import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Rubik_700Bold } from "@expo-google-fonts/rubik";

const Character = ({ character, navigation }) => {
  const [fontsLoaded] = useFonts({
    Rubik_700Bold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: character.image }} />
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailsScreen", {
              id: character.id,
              name: character.name,
            });
          }}
        >
          <View style={{ flexDirection: "row", width: "99%" }}>
            <Text
              style={{
                fontSize,
                paddingVertical,
                fontFamily: "Rubik_700Bold",
                color: "#fff",
                flexShrink: 1,
              }}
            >
              {character.name}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerRow}>
          <Text
            style={
              character.status === "Alive"
                ? styles.textAlive
                : character.status === "Dead"
                ? styles.textDeceased
                : styles.textStatus
            }
          >
            {character.status}
          </Text>
          <Text style={styles.textSpecies}> - {character.species}</Text>
        </View>
        <View style={{ marginTop: 10, marginBottom: 5 }}>
          <Text style={styles.textInfo}>Last known location:</Text>
          <Text style={styles.text}>{character.location}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.textInfo}>First seen in:</Text>
          <Text style={styles.text}>{character.origin}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#444444",
    width: "100%",
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  containerRow: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: "100%",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    marginRight: 10,
  },
  text: {
    color: "#fff",
  },
  textSpecies: {
    color: "#fff",
  },
  textStatus: {
    color: "#FFB181",
    fontWeight: "bold",
  },
  textAlive: {
    color: "#00b5b9",
    fontWeight: "bold",
  },
  textDeceased: {
    color: "#fc4422",
    fontWeight: "bold",
  },
  textInfo: {
    color: "#949494",
  },
});

export default Character;
