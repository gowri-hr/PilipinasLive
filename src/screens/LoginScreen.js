import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { Button } from '../components/Buttons';
import {Input} from '../components/Inputs';

const Login = () => {
  const {width, height} = useWindowDimensions();
  console.log(width);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/AppLogo.png')}
          style={styles.logo}
        />
      </View>
      <Image
        source={require('../assets/images/BackgroundImage.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.welcomeView}>
        <Text style={styles.nameText}>MABUHAY!</Text>
        <Text style={styles.welcomeText}>
          Welcome to the home of Filipino Live Sports
        </Text>
      </View>
      <View style={styles.inputView}>
        <Input placeholder='Email'/>
      </View>
      <TouchableOpacity style={styles.forgetTextView}>
        <Text style={styles.forgetText}>Forgot your password?</Text>
      </TouchableOpacity>
      <View style={styles.buttonView}>
        <Button title='CONTINUE' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#111111',
    position: 'relative',
  },
  header: {
    height: 65,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#030406',
  },
  logo: {
    resizeMode: 'cover',
    height: 40,
    width: 180,
    marginLeft: 20.13,
  },
  backgroundImage: {
    height: 240,
    width: '100%',
    borderColor: 'white',
    // resizeMode: 'cover'
  },
  welcomeView: {
    width: 313,
    height: 55,
    left: 16,
    marginTop: 34,
  },
  nameText: {
    height: 28,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    alignItems: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    // borderColor: 'white',
    // borderWidth: 1,
  },
  welcomeText: {
    height: 19,
    top: 8,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    alignItems: 'center',
    color: '#FFFFFF',
  },
  inputView: {
    marginTop: 32,
  },
  forgetTextView: {
    marginTop: 16,
  },
  forgetText: {
    color: '#FFFFFF',
    left: 16,
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#FFFFFF',
  },
  buttonView: {
    position: 'absolute',
    bottom: 42,
    left: 16,
    right: 16,
    // borderColor: 'white',
    // borderWidth: 1,
  }
});

export default Login;
