import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const Button = (props) => {
  return <TouchableOpacity style={styles.button}><Text style={styles.buttonTitle}>{props.title}</Text></TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    height: 41,
    width: 358,
    backgroundColor: '#7D7D7D',
    borderWidth: 1.24725,
    borderColor: '#7D7D7D',
    borderRadius: 3.74175,
    alignItems:'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#FFFFFF'
  }
});
