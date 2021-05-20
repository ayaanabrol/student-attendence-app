import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.text}>School Attendace App</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black'    
  },

  text: {
    fontFamily: 'times',
    fontWeight: 'bold',
    fontSize: 32,
    paddingLeft: 20,
    color:"white",
  },
});
