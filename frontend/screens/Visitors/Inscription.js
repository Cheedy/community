import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SubscriptionForm from '../../components/Visitors/SubscriptionForm';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/Colors'
import Toast from 'react-native-toast-message';


class Inscription extends React.Component {
  render() {
    return (
      <View style={styles.container}>  
        <SubscriptionForm />
        <Toast ref={(ref) => Toast.setRef(ref)} />      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundThemeOfPhone,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Inscription;