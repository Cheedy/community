import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ScrollView, Appearance} from 'react-native';
import { styles } from '../../constants/Styles';
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../../constants/Colors'

const Drawer = createDrawerNavigator()
const colorScheme = Appearance.getColorScheme();

class Home extends React.Component {
  render() {
    colorScheme == 'dark' ? console.log("dark") : console.log("light")
  let theLogo = colorScheme == 'dark' ? require('../../assets/new/logo_community_classique.png') : require('../../assets/new/logo_community_bas_haut.png');
    return (  
      <View style={styleHome.container}>
      <ScrollView style={styleHome.scrollView}>
        <View style={styleHome.containerSlogan}>
        <Image
        style={styleHome.logo}
        source= {theLogo}/>
          <Text style={styleHome.slogan}>
            Community
          </Text>
          <Text style={styleHome.textSlogan}>
            Lancez des sujets et créez vos propres communautées à partir de vos publications.
          </Text>
        </View>
        <View style={styleHome.containerCard}>
          <Image style={styleHome.containerImage} source={require('../../assets/conversation.jpeg')} />
          <Text style={styleHome.containerTitre}>Créez vos communautées</Text>
          <Text style={styleHome.containerText}>
            Lorem ipsum dolor sit amet.
            Qui totam dolores id dolor voluptatem sit iusto voluptas quo debitis autem.
            Id voluptatem reiciendis cum molestiae officiis sed neque sequi.
            Cum dolorem eveniet aut vitae ipsam At ipsa aliquid qui architecto animi aut deserunt autem ut natus omnis.
          </Text>
        </View>
        <View style={styleHome.containerCard}>
          <Image style={styleHome.containerImage} source={require('../../assets/utilisation.jpeg')} />
          <Text style={styleHome.containerTitre}>Et si vous provoquiez des débats ?</Text>
          <Text style={styleHome.containerText}>
            Lorem ipsum dolor sit amet.
            Qui totam dolores id dolor voluptatem sit iusto voluptas quo debitis autem.
            Id voluptatem reiciendis cum molestiae officiis sed neque sequi.
            Cum dolorem eveniet aut vitae ipsam At ipsa aliquid qui architecto animi aut deserunt autem ut natus omnis.
          </Text>
        </View>
        <View style={styleHome.containerCard}>
          <Image style={styleHome.containerImage} source={require('../../assets/win.jpeg')} />
          <Text style={styleHome.containerTitre}>Community pour toute les communautées</Text>
          <Text style={styleHome.containerText}>
            Lorem ipsum dolor sit amet.
            Qui totam dolores id dolor voluptatem sit iusto voluptas quo debitis autem.
            Id voluptatem reiciendis cum molestiae officiis sed neque sequi.
            Cum dolorem eveniet aut vitae ipsam At ipsa aliquid qui architecto animi aut deserunt autem ut natus omnis.
          </Text>
        </View>
        <View style={styleHome.containerButtons}>
          <TouchableHighlight
            style={styleHome.button}
            onPress={() => this.props.navigation.navigate('About')}>
            <Text style={{ color: "#fff" }}>A propos</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styleHome.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{ color: "#fff" }}>Se connecter</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styleHome = StyleSheet.create({
  
  logo: {
      alignSelf: 'center',
      resizeMode: 'contain',
      width: 100,
      height: 100,
      marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundThemeOfPhone,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerButtons: {
    marginBottom: 50,
    alignSelf: 'center',
    },

  containerSlogan: {
    padding: 10,
    marginTop: 30,
    marginBottom: 5,
  },
  slogan: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.textThemeOfPhone,
    marginBottom: 15,
  },
  textSlogan: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center', 
    color: colors.textThemeOfPhone,
  },
  containerCard: {
    width: "90%",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    alignSelf: 'center',

  },
  containerImage: {
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    height: 150,
    borderColor: "black",
    marginBottom: 20,
    
  },
  containerTitre: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    color: colors.textThemeOfPhone,
  },
  containerText: {
    padding: 10,
    color: colors.textThemeOfPhone,
  },
  button: {
    backgroundColor: colors.blueColor2,
    borderRadius:12,
    width: 180,
    height: 44,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default Home;