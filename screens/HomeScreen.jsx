import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CharactersList from "../components/CharactersList";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState();

  const handleChange = (text) => {
    setSearch(text);
  };

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#858585"
        onChangeText={handleChange}
      />
      <CharactersList search={search} navigation={navigation} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "#fff",
    borderBottomColor: "#239B71",
    borderBottomWidth: 1,
    width: "50%",
    height: 30,
    borderRadius: 5,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default HomeScreen;
