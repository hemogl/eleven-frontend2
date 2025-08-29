import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <View style={styles.container}>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        trackColor={{ false: "#767577", true: "#0eb92aff" }}
        thumbColor={isEnabled ? "#fdfcf5ff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ToggleSwitch;
