import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SubscriptionForm from '../../components/Visitors/SubscriptionForm';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/Colors'


class Inscription extends React.Component {
  render() {
    return (
        <SubscriptionForm />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Inscription;