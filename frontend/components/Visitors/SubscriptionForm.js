import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, TouchableHighlight, Image } from 'react-native';
import {postPasswordConnection, signUp} from '../../services/server_api';
import { CommunityContext } from '../../CommunityContext';
import { styles } from '../../constants/Styles';
import { colors } from '../../constants/Colors'
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';



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
            this.setState({errorEmail:"format d'email invalid."})
            return false;
        }
    }

    validPassword = () =>{
        if(this.state.password.length < 8){
            this.setState({errorPassword:"Le mot de passe doit au minimum avoir 8 caractères."})
            this.theToast('error', 'Erreur', 'Le mot de passe doit au minimum avoir 8 caractères.');
            return false;
        }else{
            this.setState({errorPassword:""})
            return true;
        }
    }

    validConfirmation = () =>{
        if(this.state.confirmation !== this.state.password){
            this.setState({errorConfirmation:"Erreur de saisie dans la confirmation du mot de passe"})
            this.theToast('error', 'Erreur', 'Erreur de saisie dans la confirmation du mot de passe');
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
                        this.setState({errorConfirmation:"Inscription réussi mais connexion échoué, rééssayez ultérieurment."})
                        this.theToast('error', 'Erreur', 'Inscription réussi mais connexion échoué, rééssayez ultérieurment.');
                    }
                }else{
                    this.setState({errorConfirmation:"Erreur lors de votre inscription, rééssayez ultérieurment."})
                    this.theToast('error', 'Erreur', 'Erreur lors de votre inscription, rééssayez ultérieurment.');

                }
            }catch(e){
                console.log(e);
                this.setState({errorConfirmation:"Erreur lors de votre inscription, rééssayez ultérieurment."})
                this.theToast('error', 'Erreur', 'Erreur lors de votre inscription, rééssayez ultérieurment.');

            }
        }
    }

    render() {
        return (
          <View style={stylesSubscription.container}>
                      <LinearGradient
      colors={[colors.blueColor1, colors.blueColor2]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
          <ScrollView>
          <Image
        style={stylesSubscription.logo}
        source={require('../../assets/new/logo_community_classique.png')}
      />
                <Text style={stylesSubscription.inputext}>Rejoins la Community</Text>
                <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                label='Username'
                placeholder="Nom d'utilisateur"
                style={stylesSubscription.input}
                />
                {this.state.errorUsername!=""&&
                    <Text style={styles.errorText}>{this.state.errorUsername}</Text>
                }
                <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                label='Email'
                placeholder="adresse email"
                style={stylesSubscription.input}
                />
                {this.state.errorEmail!=""&&
                    <Text  style={styles.errorText}>{this.state.errorEmail}</Text>
                }
                <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                label='Password'
                placeholder="mot de passe"
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
                placeholder="confirmation mot de passe"
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
                </LinearGradient>
                <Toast ref={(ref) => Toast.setRef(ref)} />
          </View>
        );
    }
}


SubscriptionForm.contextType = CommunityContext;

export default SubscriptionForm;

const stylesSubscription = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFF',
      margin:10,
      alignSelf: 'center',
    },
    logo: {
        alignSelf: 'center',
        marginTop: 30,
        resizeMode: 'contain',
        width: 100,
        height: 100
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
        color: '#fff',
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
        borderColor: colors.blueColor1,
        borderWidth : 2,
        borderRadius: 20,
        fontSize: 16,
        color: "#b5b5b5",
        marginBottom: 20,
        alignSelf: 'center',
      },
});

