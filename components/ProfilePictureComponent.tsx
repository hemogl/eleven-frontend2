import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function RegisterPictureScreen() {
  const [selectedImageURI, setSelectedImageURI] = React.useState<
    string | undefined
  >();

  const [isUploading, setIsUploading] = useState(false);

  //Choix d'image pour la prévisualisation
  const handlePick = async () => {
    if (isUploading) return;
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: false,
    });
    if (res.canceled) return;

    const asset = res.assets[0];
    setSelectedImageURI(asset.uri);

    //Fichier pour l'upload
    setPendingAsset({
      uri: asset.uri,
      mimeType: asset.mimeType,
    });
  };

  const handleNext = async () => {
    if (isUploading) return;
    try {
      if (pendingAsset) {
        // Affiche l’overlay
        setIsUploading(true);

        //Upload de l'image
        const url = await uploadToCloudinary(
          pendingAsset.uri,
          pendingAsset.mimeType,
          "user_profile_photos"
        );

        //Met à jour le store avec l'url
        if (url) {
          // setUser({ profileImage: url });
          // TODO: Mettre à jour le store avec l'url de l'image
        } else {
          Alert.alert(
            "Info",
            "Échec lors de l'envoi de l'image. Veuillez recommencer l'inscription"
          );
        }
      }
    } finally {
      // Retire l’overlay
      setIsUploading(false);

      router.push("/(auth)/register/step4-infos");
    }
  };

  //Upload de l'image
  const uploadToCloudinary = async (
    uri: string,
    mimeType: string | undefined,
    preset: string
  ) => {
    try {
      const cloudName = process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME;
      if (!cloudName) return undefined;

      const data = new FormData();
      const fallbackType = "application/octet-stream";
      const guessedExt = mimeType?.split("/")[1] ?? "bin";

      data.append("file", {
        uri,
        type: mimeType ?? fallbackType,
        name: `upload.${guessedExt}`,
      } as any);
      data.append("upload_preset", preset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      if (!res.ok) {
        const body = await res.text();
        console.error("HTTP", res.status, body);
        return undefined;
      }

      const json = await res.json();
      return json.secure_url as string | undefined;
    } catch {
      return undefined;
    }
  };

  return (
    <View>
      <Text style={[TEXTSTYLES.title_1, styles.title]}>INSCRIPTION</Text>
      <View style={styles.picture}>
        <Image selectedImage={selectedImageURI} text={"Photo de profil"} />
        <TouchableOpacity style={styles.add_picture} onPress={handlePick}>
          <AddPhotoIcon width={60} height={60} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 30,
  },
  text: {
    color: COLORS.grey.dark,
  },
  add_picture: {
    height: 60,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: COLORS.green.medium,
    position: "absolute",
    bottom: 5,
    right: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  picture: {
    height: 230,
    borderRadius: 125,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
