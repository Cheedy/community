import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableHighlight, Dimensions, Image } from 'react-native';
import LoginForm from '../../components/Visitors/LoginForm';
import { styles } from '../../constants/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/Colors'
import BlurView from 'react-native-blur';
import Toast from 'react-native-toast-message';


class Login extends React.Component {

  render() {
    return (
      <SafeAreaView style={styleLogin.container}>
        <LinearGradient
        colors={[colors.blueColor1, colors.blueColor2]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
              <Image
        style={styleLogin.logo}
        source={require('../../assets/new/logo_community_classique.png')}
      />
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
      </LinearGradient>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </SafeAreaView>
    );
  }
}

const styleLogin = StyleSheet.create({
  container: {
    height: null,
    width: null,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
    resizeMode: 'contain',
    width: 100,
    height: 100
  },
  title: {
    marginTop: 30,
    color: '#fff',
    fontSize: 22,
    alignSelf: 'center',
  },
  simpleText: {
    color: '#fff',
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