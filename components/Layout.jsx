import { View, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#333333" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
});

export default Layout;
