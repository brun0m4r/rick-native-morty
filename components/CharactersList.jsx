import { View, FlatList, TextInput, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { getCharacters, searchCharacters } from "../api";
import Character from "./Character";
import AppLoader from "./AppLoader";

const CharactersList = ({ search, navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCharacters = async (n) => {
    const info = await getCharacters(n);
    setCharacters([...info.results]);
  };

  const searcher = async () => {
    if (search?.length > 3) {
      setLoading(true);
      const api = await searchCharacters(search);
      if (api) {
        setCharacters(api.results);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } else {
      setLoading(true);
      const api = await getCharacters();
      setCharacters([...api.results]);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  useEffect(() => {
    searcher();
  }, [search]);

  return characters.length && !loading ? (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <Character navigation={navigation} character={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  ) : (
    <AppLoader />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default CharactersList;
