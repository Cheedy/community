import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { styles } from '../../constants/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/Colors'


class About extends React.Component {
  render() {
    return (
      <View>
      <LinearGradient
      colors={[colors.blueColor1, colors.blueColor2]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <ScrollView>
        <Image
        style={styleAbout.logo}
        source={require('../../assets/new/logo_community_classique.png')}
      />
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
      </LinearGradient>

      </View>
    );
  }
}

const styleAbout = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "#fff"
  },
  text_body: {
    fontWeight: '400',
    justifyContent: 'center',
    maxWidth: 500,
    padding: 20,
    color: '#fff',
    alignSelf: 'center',
  },
  text_end: {
    fontWeight: '400',
    justifyContent: 'center',
    maxWidth: 500,
    padding: 20,
    color: '#fff',
    marginBottom: 40,
    alignSelf: 'center',
  }
});

export default About;