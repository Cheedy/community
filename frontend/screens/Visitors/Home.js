import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { styles } from '../../constants/Styles';
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Appearance } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/Colors'
import { FloatingAction } from "react-native-floating-action";

const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  
}
else{
  
}
const actions = [
  {
    text: "Accessibility",
    icon: require("../../assets/new/about.png"),
    name: "bt_accessibility",
    position: 2
  },
  {
    text: "Language",
    icon: require("../../assets/new/about.png"),
    name: "bt_language",
    position: 1
  },
  {
    text: "Location",
    icon: require("../../assets/new/about.png"),
    name: "bt_room",
    position: 3
  },
  {
    text: "Video",
    icon: require("../../assets/new/about.png"),
    name: "bt_videocam",
    position: 4
  }
];
const Drawer = createDrawerNavigator()

class Home extends React.Component {
  render() {
    return (  
      <View style={styleHome.container}>
         <LinearGradient
      colors={[colors.blueColor1, colors.blueColor2]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <ScrollView style={styleHome.scrollView}>
        <View style={styleHome.containerSlogan}>
        <Image
        style={styleHome.logo}
        source={require('../../assets/new/logo_community_classique.png')}
      />
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
      </LinearGradient>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerButtons: {
    marginBottom: 20,
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
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 15,
  },
  textSlogan: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center', 
    color: 'rgba(255,255,255,0.9)',
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
    color: 'rgba(255,255,255,0.9)',
  },
  containerText: {
    padding: 10,
    color: 'rgba(255,255,255,0.9)',
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