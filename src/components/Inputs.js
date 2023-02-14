import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';

export const Input = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={'rgba(51, 51, 51, 0.4)'}
      style={styles.inputContainer}
      //   onChangeText={value => setTo(value)}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 358,
    height: 41,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 3,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    left: 16,
    right: 16,
    fontWeight: '400',
    fontSize: 14,
  },
});
