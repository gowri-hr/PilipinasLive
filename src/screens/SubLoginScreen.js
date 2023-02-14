import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from '../components/Buttons';
import {Input} from '../components/Inputs';

const SubLogin = () => {
  const {width, height} = useWindowDimensions();
  console.log(height);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.header}>
          <View style={styles.backView}>
            <Image
              source={require('../assets/images/Back.png')}
              style={styles.back}
            />
          </View>
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
          <Input placeholder="Email" />
          <View style={styles.passwordView}>
            <Input placeholder="Password" />
            <TouchableOpacity style={styles.EyeView}>
              <Image
                source={require('../assets/images/EyeClose.png')}
                style={styles.eye}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.forgetTextView}>
          <Text style={styles.forgetText}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <Button title="CONTINUE" />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#111111',
    position: 'relative',
    flex: 1,
    // borderColor: 'white',
    // borderWidth: 1,
  },
  keyboardView: {
    // borderColor: 'white',
    // borderWidth: 1,
    // flex: 4,
    // width: '100%',
    // height: '100%',
    flex: 1,
  },
  header: {
    height: 65,
    width: '100%',
    //   justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#030406',
    alignItems: 'center',
  },
  backView: {
    height: 65,
    width: 44.6,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'white',
    // borderWidth: 1,
  },
  back: {
    width: 8.73,
    height: 16,
  },
  logo: {
    resizeMode: 'cover',
    height: 40,
    width: 180,
    left: 77.1490908916,
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
    height: 98,
    width: 358,
  },
  passwordView: {
    position: 'relative',
    justifyContent: 'center',
    marginTop: 16,
  },
  EyeView: {
    position: 'absolute',
    right: 0,
  },
  eye: {
    width: 22.49,
    height: 17.99,
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
    // marginTop: 110,
    // position: 'absolute',
    // bottom: 42,
    // marginTop: '24%',
    bottom: 15,
    left: 16,
    right: 16,
    // borderColor: 'white',
    // borderWidth: 1,
  },
});

export default SubLogin;
