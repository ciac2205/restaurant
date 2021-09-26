import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 16px;
  border-radius: 0.5rem;
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.brand.primary}
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.caption}
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some nice restaurant ",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2014/01/04/14/08/cafe-238538_960_720.jpg",
    ],
    address = "some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(rating));
  return (
    <RestaurantCard>
      <RestaurantCardCover
        elevation={5}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Title> {name} </Title>
        {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
