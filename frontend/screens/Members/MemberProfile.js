import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { CommunityContext } from '../../CommunityContext';
import { getRessource } from '../../services/server_api';
import Toast from 'react-native-toast-message';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/Colors'
import { styles } from '../../constants/Styles';


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
      errorMessage : '',
      successMessage : '',
      password : '',
    };

    (async () => {
      const tokenId = JSON.parse(await AsyncStorage.getItem('TOKENID'));
      this.setState({memberId: tokenId.member_id});
      const memberId = tokenId.member_id;
      const notreUserKwa = tokenId.firstname;
      try{
        let result = await getRessource("member", memberId);
        if(result.status===200){
            const res = result.response;
            this.setState({
              firstname: res.firstname,
              lastname: res.lastname,
              email: res.email,
              username: res.name
            })
        }else{
          this.setState({errorMessage:"Utilisateur non trouvé"})
        }
      }catch(e){
        this.setState({errorMessage:e.message})
      }
    })()
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
        onUpdate()
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
    return (
      <SafeAreaView>
      <LinearGradient
      colors={[colors.blueColor1, colors.blueColor2]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
        <Text style = {stylesCustom.title}>Mon profil</Text>
        <TextInput
        value = {this.state.firstname}
        onChangeText = {(firstname) => this.setState ({ firstname })}
        style = {stylesCustom.input} />
        <TextInput
        value = {this.state.lastname}
        onChangeText = {(lastname) => this.setState ({ lastname })}
        style = {stylesCustom.input} />
        <TextInput
        value = {this.state.username}
        onChangeText = {(username) => this.setState ({ username })}
        style = {stylesCustom.input} />
        <TextInput
        value = {this.state.email}
        onChangeText = {(email) => this.setState ({ email })}
        style = {stylesCustom.input} />
        <TextInput
        value = {this.state.password}
        onChangeText = {(password) => this.setState ({ password })}
        secure = {true}
        placeholder = "*****"
        style = {stylesCustom.input} />
        <TouchableHighlight
            style={stylesCustom.button}
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
          <Toast ref={(ref) => Toast.setRef(ref)} />
          </LinearGradient>
      </SafeAreaView>
    );
  }
}

MemberProfile.contextType = CommunityContext;

const stylesCustom = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#fff',
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