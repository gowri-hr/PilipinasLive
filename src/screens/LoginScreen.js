import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from '../components/Buttons';
import {Input} from '../components/Inputs';
import {Formik, Field} from 'formik';
import * as yup from 'yup';

const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email must have a number, special character, small and capital alphabets.',
    )
    .required('Email is required'),
});

const Login = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  console.log(width);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
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
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            email: '',
          }}
          onSubmit={() => {
            console.log('submit');
            navigation.navigate('SubLogin')
          }}>
          {({handleSubmit, values}) => (
            <>
              <View style={styles.inputView}>
                <Field
                  component={Input}
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  keyboardType="email-address"
                  secureTextEntry={false}
                />
              </View>
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log('forgot');
                }}>
                <View style={styles.forgetTextView}>
                  <Text style={styles.forgetText}>Forgot your password?</Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.buttonView}>
                <Field
                  component={Button}
                  title="CONTINUE"
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#111111',
    flex: 1,
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
    fontFamily: 'Roboto-Regular',
  },
  welcomeText: {
    height: 19,
    top: 8,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    alignItems: 'center',
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
  },
  inputView: {
    marginTop: 32,
    left: 16,
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
    fontFamily: 'Roboto-Regular',
  },
  buttonView: {
    bottom: 15,
    marginTop: 170,
    left: 16,
    right: 16,
  },
});

export default Login;
