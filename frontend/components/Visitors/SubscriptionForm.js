import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, TouchableHighlight, Image, Appearance } from 'react-native';
import {postPasswordConnection, signUp} from '../../services/server_api';
import { CommunityContext } from '../../CommunityContext';
import { styles } from '../../constants/Styles';
import { colors } from '../../constants/Colors'
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';


const colorScheme = Appearance.getColorScheme();

class SubscriptionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          errorUsername:'',
          email: '',
          errorEmail:'',
          password: '',
          errorPassword:'',
          confirmation:'',
          errorConfirmation:'',
        };
    }

    validEmail = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true){
            this.setState({errorEmail:""})
            return true;
        }else{
            console.log("format email error")
            this.theToast('error', 'Erreur','Format d\'email invalide')
            return false;
        }
    }

    validPassword = () =>{
        if(this.state.password.length < 8){
            console.log("mdp 8 caractere erreur")
            this.theToast('error', 'Erreur','Le mot de passe doit au minimum avoir 8 caractères.')
            return false;
        }else{
            this.setState({errorPassword:""})
            return true;
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

    validConfirmation = () =>{
        if(this.state.confirmation !== this.state.password){
            console.log("confirm mdp error")
            this.theToast('success', 'Erreur','Erreur de saisie dans la confirmation du mot de passe')

            return false;
        }else{
            this.setState({errorConfirmation:""})
            return true;
        }
    }

    async subscribe() {
        if( this.validEmail()&&
            this.validPassword()&&
            this.validConfirmation()){
            var data= {
                name: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
            try{
                let result= await signUp(data);
                if(result.status==200){
                    let resultConnect = await postPasswordConnection(data.name, data.password);
                    if(resultConnect.status===200){
                        this.setState({errorConfirmation:""})
                        this.context.connect(resultConnect.response.user)
                    }else{
                        console.log("connexion error")
                        theToast('success', 'Erreur','Inscription réussi mais connexion échouée, rééssayez ultérieurement')

                    }
                }else{
                    console.log("error register")
                    theToast('success', 'Erreur','Erreur lors de votre inscription, rééssayez ultérieurement.')

                }
            }catch(e){
                console.log(e);
                this.setState({errorConfirmation:"Erreur lors de votre inscription, rééssayez ultérieurment."})
                theToast('success', 'Erreur','Erreur lors de votre inscription, rééssayez ultérieurement')

            }
        }
    }

    render() {
        colorScheme == 'dark' ? console.log("dark") : console.log("light")
        let theLogo = colorScheme == 'dark' ? require('../../assets/new/logo_community_classique.png') : require('../../assets/new/logo_community_bas_haut.png');      
        return (
          <ScrollView>
                  <Image
        style={stylesSubscription.logo}
        source= {theLogo}/>

                <Text style={stylesSubscription.inputext}>Rejoins la Community</Text>
                <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                label='Username'
                placeholder="Nom d'utilisateur"
                placeholderTextColor= '#000'
                style={stylesSubscription.input}
                />
                {this.state.errorUsername!=""&&
                    <Text style={styles.errorText}>{this.state.errorUsername}</Text>
                }
                <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                label='Email'
                placeholder="Votre Email"
                placeholderTextColor= '#000'

                style={stylesSubscription.input}
                />
                {this.state.errorEmail!=""&&
                    <Text  style={styles.errorText}>{this.state.errorEmail}</Text>
                }
                <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                label='Password'
                placeholder="Mot de passe"
                placeholderTextColor= '#000'
                secureTextEntry={true}
                style={stylesSubscription.input}
                />
                {this.state.errorPassword!=""&&
                    <Text style={styles.errorText}>{this.state.errorPassword}</Text>
                }
                <TextInput
                value={this.state.confirmation}
                onChangeText={(confirmation) => this.setState({ confirmation })}
                label='Confirmation'
                placeholder="Connfirmation de mot de passe"
                placeholderTextColor= '#000'
                secureTextEntry={true}
                style={stylesSubscription.input}
                />
                {this.state.errorConfirmation!=""&&
                    <Text style={styles.errorText}>{this.state.errorConfirmation}</Text>
                }
                <TouchableHighlight
                style={stylesSubscription.button}
                onPress={this.subscribe.bind(this)}
                >
                    <Text  style={{color:"#FFF"}}>S'inscrire</Text>
                </TouchableHighlight>
                </ScrollView>
        );
    }
}


SubscriptionForm.contextType = CommunityContext;

export default SubscriptionForm;

const stylesSubscription = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colors.backgroundThemeOfPhone,
      margin:10,
      alignSelf: 'center',
    },
    logo: {
        alignSelf: 'center',
        marginTop: 30,
        resizeMode: 'contain',
        width: 100,
        height: 100,
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
    inputext: {
        marginTop: 30,
        marginBottom: 30,
        color: colors.textThemeOfPhone,
        fontSize: 22,
        alignSelf: 'center',
      },
      errorText: {
        width: 200,
        padding: 2,
        fontWeight: 'bold',
        color: "red",
        marginBottom: 10,
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
        color: "#000",
        marginBottom: 20,
        alignSelf: 'center',
      },
});

