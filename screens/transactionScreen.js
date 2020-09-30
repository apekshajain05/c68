import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class TransactionScreen extends React.Component {
    render(){
  return (
      
    <View style={styles.container}>
     <Text>Issue or Return</Text> 
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  
});
