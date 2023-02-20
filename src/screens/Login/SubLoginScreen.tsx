import React, {FC} from 'react';
import {SubLoginScreenProps} from '../../utils/LoginUserNavigation';
import {Buttons} from '../../components/atoms/Buttons/Buttons';
import {Input, InputWithImage} from '../../components/atoms/Inputs/Inputs';
import {Formik, Field} from 'formik';
import BackgroundImage from '../../assets/images/BackgroundImage.svg';
import {ValidationSchema} from '../../components/Validation';
import {
  Container,
  MyAwareScrollView,
  MySafeAreaView,
  ButtonMainView,
  InputView,
  ForgetView,
  ForgetText,
} from './LoginStyles';
import {MyTouchableWithoutFeedback} from '../../components/atoms/Buttons/Buttonstyles';
import {Headers} from '../../components/molecules/Header';
import {WelcomeText} from '../../components/molecules/WelcomView';
import {useWindowDimensions} from 'react-native';

const SubLogin: FC<SubLoginScreenProps> = props => {

  const OnPressBack = () => {
    props.navigation.push('Login');
  };
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <Headers justify={false} backBtn={true} onPress={OnPressBack} />
          <BackgroundImage />
          <WelcomeText
            justify={false}
            backBtn={true}
            onPress={OnPressBack}
            marginTop={34}
            texttransform = {true}
            firstText="MABUHAY!"
            secondText="Welcome to the home of Filipino Live Sports"
          />
          <Formik
            validationSchema={ValidationSchema}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={() => props.navigation.push('ForgotPassword')}>
            {({isValid, handleSubmit, values, dirty}) => (
              <>
                <InputView marginTop={32}>
                  <Field
                    component={Input}
                    name="email"
                    inputPlaceholder="Email"
                    value={values.email}
                    keyboardValue="email-address"
                    secureText={false}
                    EyeImage={false}
                  />
                  <Field
                    component={InputWithImage}
                    name="password"
                    inputPlaceholder="Password"
                    value={values.password}
                    keyboardType="default"
                    secureText={true}
                    EyeImage={true}
                  />
                </InputView>
                <MyTouchableWithoutFeedback
                  onPress={() => {
                    console.log('forgot');
                  }}>
                  <ForgetView>
                    <ForgetText>Forgot your password?</ForgetText>
                  </ForgetView>
                </MyTouchableWithoutFeedback>
                <ButtonMainView marginTop={110}>
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
                </ButtonMainView>
              </>
            )}
          </Formik>
        </MyAwareScrollView>
      </Container>
    </MySafeAreaView>
  );
};

export default SubLogin;
