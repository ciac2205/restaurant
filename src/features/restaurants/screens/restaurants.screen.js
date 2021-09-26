import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";
import styled from "styled-components/native";
// const isAndroid = Platform.OS === "android";
// console.log(Platform.OS === "android");
// console.log(StatusBar.currentHeight);
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight} && "margin-top: ${StatusBar.currentHeight}px";
`;
const SearchContainer = styled(View)`
  padding: 16px;
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  );
};
