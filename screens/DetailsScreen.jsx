import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { getCharacter } from "../api";

const DetailsScreen = ({ route }) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);

  const catchCharacter = async () => {
    const character = await getCharacter(route.params.id);
    setCharacter(character);
  };

  useEffect(() => {
    catchCharacter();
  }, []);

  return (
    <Layout>
      <Text>{character.name}</Text>
    </Layout>
  );
};

export default DetailsScreen;
