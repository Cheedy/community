import { Appearance } from 'react-native';
import { color } from 'react-native-reanimated';

const colorScheme = Appearance.getColorScheme();
let colorsBlue = {
  primary: "#4169E1",
  activeTintColor: "#4169E1",
  inactiveTintColor: "gray",
  tintColor: "#fff",
  productBackground: "#fff",
  oldPrice: "red",
  price: "green",
};

let colorsDark = {
  primary: "#A9A9A9",
  activeTintColor: "#000",
  inactiveTintColor: "#DCDCDC",
  tintColor: "#fff",
  productBackground: "#DCDCDC",
  oldPrice: "#8B0000",
  price: "#006400",
};

let colorsRed = {
  primary: "#DC143C",
  activeTintColor: "#FF4500",
  inactiveTintColor: "gray",
  tintColor: "#fff",
  productBackground: "#FAFAD2",
  oldPrice: "red",
  price: "green",
};

let colorsCool = {
  primary: "#506fa9",
  activeTintColor: "#374d75",
  inactiveTintColor: "#8299c4",
  tintColor: "#fff",
  productBackground: "#edf0f6",
  oldPrice: "#a9506f",
  price: "#6fa950",
};

let colorsCharte = {
  blueColor1 : "#0195c8",
  blueColor2 : "#24387a",
  backgroundThemeOfPhone:   colorScheme == 'dark' ? "#1c1c1c" :"#ebebeb",
  textThemeOfPhone: colorScheme == 'dark' ? '#fff' : '#000',
}

export const colors = colorsCharte;
