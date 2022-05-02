import axios from "axios";

const SERVER = "http://192.168.100.5:3001";

export const getCharacters = async (n) => {
  if (n) {
    return await axios.get(`${SERVER}/characters?page=${n}`);
  }
  return (await axios.get(`${SERVER}/characters`)).data;
};

export const searchCharacters = async (name) => {
  if (name) {
    const characters = await (
      await axios.get(`${SERVER}/characters?name=${name}`)
    ).data;
    return characters;
  }
};

export const getCharacter = async (id) => {
  const character = (await axios.get(`${SERVER}/characters/${id}`)).data;
  return character;
};
