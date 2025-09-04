import {
  SafeAreaView,
  View,
  TouchableOpacity,
  SectionList,
} from "react-native";
import settingdata from "../utils";
import { StyleSheet, Text } from "react-native";
import GenericButton from "./Buttons/GenericButton";
import { useNavigation } from "@react-navigation/native";
import { dark } from "../colorPalet";

function SettingsList() {
  const navigation = useNavigation();

  const data = [
    /*  {
      title: "Help",
      data: [
        {
          id: "1",
          task: "FAQ",
          action: () => {
            console.log("Help pressed");
            navigation.navigate("Map");
          },
        },
        {
          id: "2",
          task: "Contact us",
          action: () => {
            console.log("Help pressed");
            navigation.navigate("Map");
          },
        },
      ],
    }, */
    /*  {
      title: "My account",
      data: [
        {
          id: "3",
          task: "Change password",
          action: () => {
            console.log("My account pressed");
            navigation.navigate("Map");
          },
        },
        {
          id: "4",
          task: "Privacy",
          action: () => {
            console.log("My account pressed");
            navigation.navigate("Map");
          },
        },
      ],
    }, */
    {
      title: "About Eleven",
      data: [
        {
          id: "5",
          task: "Eleven ★",
          action: () => {
            console.log("About Eleven pressed");
            navigation.navigate("Chart");
          },
        },
        /*  {
          id: "6",
          task: "Version",
          action: () => {
            console.log("About Eleven pressed");
            navigation.navigate("Map");
          },
        }, */
      ],
    },
    {
      title: "Log Out",
      data: [
        {
          id: "7",
          task: "Log out",
          action: () => {
            console.log("Log Out pressed");
            navigation.navigate("Map");
          },
        },
      ],
    },
  ];

  return (
    <SafeAreaView>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <Text style={styles.taskTitle}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.space}>
            <GenericButton
              title={item.task}
              width={330}
              action={item.action}
              color={dark.pink}
              backgroundColor={dark.black}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  space: {
    padding: 5,
  },
  taskItem: {
    backgroundColor: "#f8f3f8ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  taskTitle: {
    fontSize: 24,
    backgroundColor: "#fff",
    padding: 30,
  },
});

export default SettingsList;
