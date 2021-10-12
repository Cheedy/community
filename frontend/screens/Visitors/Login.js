import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableHighlight, Dimensions, Image, Appearance } from 'react-native';
import LoginForm from '../../components/Visitors/LoginForm';
import { styles } from '../../constants/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/Colors'
import Toast from 'react-native-toast-message';


const colorScheme = Appearance.getColorScheme();

class Login extends React.Component {
  render() {
    colorScheme == 'dark' ? console.log("dark") : console.log("light")
    let theLogo = colorScheme == 'dark' ? require('../../assets/new/logo_community_classique.png') : require('../../assets/new/logo_community_bas_haut.png');  
    return (
      <SafeAreaView style={styleLogin.container}>
        <Image
        style={styleLogin.logo}
        source= {theLogo}/>
        <Text style={styleLogin.title}>Se connecter</Text>
        <LoginForm />
        <Text style={styleLogin.simpleText}>Pas encore membre?</Text>
        <TouchableHighlight
                    style={styleLogin.button}
                    onPress={()=>this.props.navigation.navigate('Inscription')}>
                    <Text  style={{color:"#FFF"}}>S'inscrire</Text>
        </TouchableHighlight>
        <View style={styleLogin.containerButtons}>

      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </SafeAreaView>
    );
  }
}

const styleLogin = StyleSheet.create({
  container: {
    height: null,
    width: null,
    flex: 1,
    backgroundColor: colors.backgroundThemeOfPhone,
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 30,
    color: colors.textThemeOfPhone,
    fontSize: 22,
    alignSelf: 'center',
  },
  simpleText: {
    color: colors.textThemeOfPhone,
    alignSelf: 'center',
    marginBottom: 20,
  },  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blueColor2,
    borderRadius:12,
    width: 180,
    height: 44,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  containerButtons: {
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
});

export default Login;