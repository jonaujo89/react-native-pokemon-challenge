import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

import Home from "./Home";
import Details from "./SetDetails";

type RootStackParamList = {
  Home: undefined;
  SetDetails: { setID: string; cardSet: PokemonTCG.Set };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const rootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="SetDetails" component={Details} />
    </RootStack.Navigator>
  );
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
export type NavProps<T extends keyof RootStackParamList> =
  ScreenProps<T>["navigation"];
export type RouteProps<T extends keyof RootStackParamList> =
  ScreenProps<T>["route"];

export default rootNavigation;
