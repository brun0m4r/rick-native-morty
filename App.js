import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import DetailsScreen from "./screens/DetailsScreen";

export default function App() {
  const navigatorOptions = {
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    }),
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#333333",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#333333",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "The Rick And Morty App",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("FormScreen")}
              >
                <Text
                  style={{
                    padding: 5,
                    backgroundColor: "#239B71",
                    color: "#fff",
                    marginRight: 20,
                    fontSize: 15,
                    borderRadius: 5,
                  }}
                >
                  New
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="FormScreen"
          component={FormScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            title: "New Character",
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={({ route }) => ({
            title: route.params.name,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
