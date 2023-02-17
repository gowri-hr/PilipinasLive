import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SubLoginScreenProps} from '../utils/LoginUserNavigation';
import {Buttons} from '../components/atoms/Buttons';
import {Input} from '../components/atoms/Inputs';
import {Formik, Field} from 'formik';
import BackgroundImage from '../assets/images/BackgroundImage.svg';
import EyeClose from '../assets/images/eyeClose.svg';
import {ValidationSchema} from '../components/Validation';
import {Container, MyAwareScrollView} from '../styles/LoginRegisterStyles';
import {Headers} from '../components/molecules/Header';
import {WelcomeText} from '../components/molecules/WelcomView';

const SubLogin: FC<SubLoginScreenProps> = props => {
  const OnPressBack = () => {
    props.navigation.push('Login');
  };
  return (
    <Container>
      <MyAwareScrollView>
        <Headers justify={false} backBtn={true} onPress={OnPressBack} />
        <BackgroundImage />
        <WelcomeText justify={false} backBtn={true} onPress={OnPressBack} />
        <Formik
          validationSchema={ValidationSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          >
          {({isValid, handleSubmit, values, dirty}) => (
            <>
              <View style={styles.inputView}>
                <Field
                  component={Input}
                  name="email"
                  inputPlaceholder="Email"
                  value={values.email}
                  keyboardValue="email-address"
                  secureText={false}
                />
                <View style={styles.passwordView}>
                  <Field
                    component={Input}
                    name="password"
                    inputPlaceholder="Password"
                    value={values.password}
                    keyboardType="default"
                    secureText={true}
                  />
                  <TouchableOpacity style={styles.EyeView}>
                    <EyeClose />
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
                  component={Buttons}
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
      </MyAwareScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: 240,
    width: '100%',
    borderColor: 'white',
  },
  inputView: {
    marginTop: 32,
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
