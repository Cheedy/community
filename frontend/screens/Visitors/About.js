import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableHighlight, Image, ScrollView, Appearance } from 'react-native';
import { styles } from '../../constants/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/Colors'

const colorScheme = Appearance.getColorScheme();
class About extends React.Component {
  render() {
    colorScheme == 'dark' ? console.log("dark") : console.log("light")
    let theLogo = colorScheme == 'dark' ? require('../../assets/new/logo_community_classique.png') : require('../../assets/new/logo_community_bas_haut.png');  
    return (
      <View>
      <ScrollView>
      <Image
        style={styleAbout.logo}
        source= {theLogo}/>
        <Text style={styleAbout.text_title}>Community</Text>
        <Text style={styleAbout.text_body}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <Text style={styleAbout.text_body}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <Text style={styleAbout.text_body}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <Text style={styleAbout.text_end}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </ScrollView>
      </View>
    );
  }
}

const styleAbout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundThemeOfPhone,
    },
    scroll:{
      flex: 1,
    },
  containerButtons: {
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
    resizeMode: 'contain',
    width: 100,
    height: 100
  },
  text_title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
    color: colors.textThemeOfPhone,
  },
  text_body: {
    fontWeight: '400',
    justifyContent: 'center',
    maxWidth: 500,
    padding: 20,
    color: '#fff',
    alignSelf: 'center',
    color: colors.textThemeOfPhone,
  },
  text_end: {
    fontWeight: '400',
    justifyContent: 'center',
    maxWidth: 500,
    padding: 20,
    color: colors.textThemeOfPhone,
    marginBottom: 40,
    alignSelf: 'center',
  }
});

export default About;