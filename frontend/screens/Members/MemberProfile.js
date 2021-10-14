import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight, Appearance } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { CommunityContext } from '../../CommunityContext';
import { getRessource, updateRessource } from '../../services/server_api';
import Toast from 'react-native-toast-message';
import { colors } from '../../constants/Colors'

const colorScheme = Appearance.getColorScheme();
class MemberProfile extends React.Component {

  constructor()
  {
    super();
    this.state = {
      memberId : 0,
      username : '',
      lastname : '',
      firstname : '',
      email : '',
      password : '',
      errorMessage : '',
      successMessage : '',
      password : '',
    };

    (async () => {
      const tokenId = JSON.parse(await AsyncStorage.getItem('TOKENID'));
      this.setState({memberId: tokenId.member_id});
      const memberId = tokenId.member_id;
      try{
        let result = await getRessource("member", memberId);
        if(result.status===200){
            const res = result.response;
            this.setState({
              firstname: res.firstname,
              lastname: res.lastname,
              email: res.email,
              username: res.name,
              //password:res.password
            })
        }else{
          this.setState({errorMessage:"Utilisateur non trouvé"})
        }
      }catch(e){
        this.setState({errorMessage:e.message})
      }
    })()
  }

  async onUpdate()
  {
    console.log(this.state.email, this.state.memberId);
    try{
      let result = await updateRessource("member", this.state.memberId, {
        lastname: this.state.lastname,
        firstname: this.state.lastname,
        email: this.state.email,
        name: this.state.username,
        password: this.state.password
      })
      if(result.status===200)
      {
        this.setState({successMessage:"Utilisateur modifié"})
      }
      else
      {
        this.setState({errorMessage:"Erreur"})
      }
    }catch(e){this.setState({errorMessage:e.message})}
  }

  verifForm() {
    if(this.state.password.length > 0)
    {
      console.log("mdp ok")
      if(this.state.password.length < 8)
      {
        this.theToast('error', 'Erreur', 'Votre mot de passe doit contenir 8 caractère minimum 😕')
        console.log("mdp doit avoir minimum 8 caract")
      }
      else{
        this.onUpdate();
      }
    }
    else{
      console.log("mdp pas ok")
    }
  }

  theToast(type, text1, text2)
  {
      Toast.show(
        {
        type: type,
        text1: text1,
        text2: text2
      });
    
  }

  render() {
    console.log(colorScheme);
    console.log('ok');
    return (
      <SafeAreaView styles= {styleMember.container}>
        <View>
        <Text style = {styleMember.title}>Mon profil</Text>
        <TextInput
        value = {this.state.firstname}
        onChangeText = {(firstname) => this.setState ({ firstname })}
        style = {styleMember.input} />
        <TextInput
        value = {this.state.lastname}
        onChangeText = {(lastname) => this.setState ({ lastname })}
        style = {styleMember.input} />
        <TextInput
        value = {this.state.username}
        onChangeText = {(username) => this.setState ({ username })}
        style = {styleMember.input} />
        <TextInput
        value = {this.state.email}
        onChangeText = {(email) => this.setState ({ email })}
        style = {styleMember.input} />
        <TextInput
        secureTextEntry={true}
        value = {this.state.password}
        onChangeText = {(password) => this.setState ({ password })}
        secure = {true}
        placeholder = "*****"
        style = {styleMember.input} />
        <TouchableHighlight
            style={styleMember.button}
            onPress={() => this.verifForm()}>
            <Text style={{ color: "#fff", alignSelf: 'center'}}>Modifier</Text>
          </TouchableHighlight>
        <Button
            title="Se déconnecter"
            color= "red"
            onPress={() =>
              this.context.disconnect()
            }
          />
          </View>
          <Toast ref={(ref) => Toast.setRef(ref)} />
      </SafeAreaView>
    );
  }
}

MemberProfile.contextType = CommunityContext;

const styleMember = StyleSheet.create({
  container: {
    backgroundColor: colorScheme == "dark" ? '#1c1c1c' : '#ebebeb',
    alignItems: 'center',
  },
    input: {
    width: 300,
    height: 40,
    padding: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth : 1,
    borderRadius: 20,
    fontSize: 16,
    color: "rgba(0,0,0,0.6)",
    marginBottom: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
    color: colors.textThemeOfPhone,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: colors.blueColor2,
    borderRadius:12,
    width: 180,
    height: 44,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default MemberProfile;