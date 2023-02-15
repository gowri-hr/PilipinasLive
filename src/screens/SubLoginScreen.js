import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
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
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Enter password'),
});

const SubLogin = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  console.log(height);

  const OnPressBack = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={OnPressBack}>
            <View style={styles.backView}>
              <Image
                source={require('../assets/images/Back.png')}
                style={styles.back}
              />
            </View>
          </TouchableWithoutFeedback>
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
          }}>
          {({isValid, handleSubmit, values, dirty}) => (
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
                <View style={styles.passwordView}>
                  <Field
                    component={Input}
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    keyboardType="default"
                    secureTextEntry={true}
                  />
                  <TouchableOpacity style={styles.EyeView}>
                    <Image
                      source={require('../assets/images/EyeClose.png')}
                      style={styles.eye}
                    />
                  </TouchableOpacity>
                </View>
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
                  disabled={!(isValid && dirty)}
                  style={
                    isValid && dirty
                      ? {
                          backgroundColor: 'red',
                          borderColor: '#EC2027',
                        }
                      : {
                          backgroundColor: '#7D7D7D',
                          borderColor: '#7D7D7D',
                        }
                  }
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
    position: 'relative',
    flex: 1,
  },
  header: {
    height: 65,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#030406',
    alignItems: 'center',
  },
  backView: {
    height: 65,
    width: 44.6,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  inputView: {
    marginTop: 32,
    // height: 98,
    width: 358,
    left: 16,
  },
  passwordView: {
    position: 'relative',
    marginTop: 16,
  },
  EyeView: {
    position: 'absolute',
    top: 12,
    right: 11.5,
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
    fontFamily: 'Roboto-Regular',
  },
  buttonView: {
    bottom: 15,
    marginTop: 110,
    left: 16,
    right: 16,
  },
});

export default SubLogin;
