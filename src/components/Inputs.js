import React from 'react';
import {Image, StyleSheet, Text, TextInput} from 'react-native';

export const Input = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={'rgba(51, 51, 51, 0.4)'}
        style={[styles.inputContainer, hasError && styles.errorInput]}
        keyboardType={props.keyboardType}
        value={value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
        //   onChangeText={value => setTo(value)}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
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
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#111111'
  },
  errorText: {
    width: 358,
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 3,
    marginBottom: 3,
    textAlign: 'center',
  },
});
