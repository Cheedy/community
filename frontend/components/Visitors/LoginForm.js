import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import {postPasswordConnection} from '../../services/server_api';
import { CommunityContext } from '../../CommunityContext';
import { styles } from '../../constants/Styles';
import { colors } from '../../constants/Colors';
import Toast from 'react-native-toast-message';
import { Colors } from 'react-native/Libraries/NewAppScreen';


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          errorUsername: '',
          password: '',
          errorPassword:''
        };
    }


    async onLogin() {
        try{
          let result = await postPasswordConnection(this.state.username, this.state.password);
          if(result.status===200){
              this.setState({errorPassword:""})
              this.context.connect(result.response.user)
          }else{
            this.theToast('error', 'Erreur', 'Mot de passe incorrect');
            this.setState({errorPassword:"Mot de passe incorrect."})

          }
        }catch(e){
          this.setState({errorPassword:"Mot de passe incorrect."})
          this.theToast('error', 'Erreur', 'Mot de passe incorrect');
        }
    }

    theToast(type, text1, text2)
    {
        Toast.show({
          type: type,
          text1: text1,
          text2: text2
        });
    }

    render() {
        return (
          <View style={stylesLogin.container}>
                
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    label='Email'
                    placeholder="Nom d'utilisateur"
                    placeholderTextColor= "#000"
                    style={stylesLogin.input}
                    pattern={[
                      '^.{8,}$', // min 6 chars
                    ]}
                />
                {this.state.errorUsername!=""&&
                  <Text style={stylesLogin.errorText}>{this.state.errorUsername}</Text>

                }
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    label='Password'
                    placeholder="Mot de passe"
                    placeholderTextColor= "#000"
                    secureTextEntry={true}
                    style={stylesLogin.input}
                />
                {this.state.errorPassword!=""&&
                    <Text style={stylesLogin.errorText}>{this.state.errorPassword}</Text>
                }
                <TouchableHighlight
                    style={stylesLogin.button}
                    onPress={this.onLogin.bind(this)}>
                    <Text  style={{color:"#FFF"}}>Se connecter</Text>
                </TouchableHighlight>
          </View>
        );
    }
}

LoginForm.contextType = CommunityContext;

export default LoginForm;

const stylesLogin = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      margin:10
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
    },
    errorText: {
      padding: 2,
      color: "red",
      marginBottom: 10,
      fontWeight: 'bold',
    },
    input: {
      width: 300,
      height: 50,
      padding: 10,
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor: colors.blueColor2,
      borderWidth : 2,
      borderRadius: 20,
      fontSize: 16,
      marginBottom: 20,
      color: '#000'
    },
});

