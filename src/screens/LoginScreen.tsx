import React, {FC} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {LoginScreenProps} from '../utils/LoginUserNavigation';
import {Buttons} from '../components/atoms/Buttons/Buttons';
import {Input} from '../components/atoms/Inputs';
import {Formik, Field} from 'formik';
import BackgroundImage from '../assets/images/BackgroundImage.svg';
import {ValidationSchema} from '../components/Validation';
import {Container, MyAwareScrollView} from '../styles/LoginRegisterStyles';
import {Headers} from '../components/molecules/Header';
import {WelcomeText} from '../components/molecules/WelcomView';

const Login: FC<LoginScreenProps> = props => {

  const handleContinue = () => {
    props.navigation.push('SubLogin');
  };
  return (
    <Container>
      <MyAwareScrollView>
        <Headers justify={true} backBtn={false} onPress={null} />
        <BackgroundImage />
        <WelcomeText justify={true} backBtn={false} onPress={null} />
        <Formik
          validationSchema={ValidationSchema}
          initialValues={{
            email: '',
          }}
          onSubmit={handleContinue}>
          {({handleSubmit, values, isValid, dirty}) => (
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
                  disabled={!(isValid && dirty)}
                  onPress={handleSubmit}
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
    left: 16,
  },
  forgetTextView: {
    marginTop: 16,
  },
  forgetText: {
    color: '#FFFFFF',
    left: 16,
    fontWeight: '400',
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
