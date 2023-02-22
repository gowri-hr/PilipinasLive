import React, {FC} from 'react';
import Edit from '../../assets/images/editIcon.svg';
import {VerifyOTPScreenProps} from '../../utils/LoginUserNavigation';
import {Formik, Field} from 'formik';
import {
  ButtonMainView,
  Container,
  MyAwareScrollView,
  MySafeAreaView,
} from '../Login/Styles';
import {BackImageView} from '../SignUp/Styles';
import Back from '../../assets/images/BackIcon2.svg';
import AppLogo from '../../assets/images/Applogo.svg';
import {WelcomeText} from '../../components/molecules/WelcomView';
import {
  AlreadyText,
  EditTouchabaleWithoutFeedback,
  OtpEmailText,
  OtpMainText,
  OtpView,
  ResendOtpText,
  SignInText,
  WelcomeTextVerifyOtpView,
} from './Styles';
import {Buttons} from '../../components/atoms/Buttons/Index';
import {OtpInput} from '../../components/atoms/Inputs/Index';
import String from '../../components/Strings';
import {LogoImage} from '../ForgotPassword/Styles';
import {TouchableWithoutFeedback} from 'react-native';

const VerifyOTP: FC<VerifyOTPScreenProps> = props => {
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.push('Login')}>
            <BackImageView>
              <Back />
            </BackImageView>
          </TouchableWithoutFeedback>
          <LogoImage>
            <AppLogo width={101.76} height={57.36} />
          </LogoImage>
          <WelcomeTextVerifyOtpView>
            <WelcomeText
              texttransform={false}
              firstText={String.verifyFirstText}
            />
          </WelcomeTextVerifyOtpView>
          <OtpMainText>OTP was sent to</OtpMainText>
          <OtpView marginTop={8} width={170}>
            <OtpEmailText>abcde@gmail.com</OtpEmailText>
            <EditTouchabaleWithoutFeedback>
              <Edit />
            </EditTouchabaleWithoutFeedback>
          </OtpView>
          <Formik
            initialValues={{
              firstInput: '',
              secondInput: '',
              thirdInput: '',
              fourthInput: '',
              fifthInput: '',
              sixthInput: '',
            }}
            onSubmit={() => props.navigation.push('Login')}>
            {({values, handleSubmit, isValid, dirty}) => (
              <>
                <OtpView marginTop={30} width={302}>
                  <Field
                    component={OtpInput}
                    name="firstInput"
                    values={values.firstInput}
                  />
                  <Field
                    component={OtpInput}
                    name="secondInput"
                    values={values.secondInput}
                    keyboardValue="numeric"
                  />
                  <Field
                    component={OtpInput}
                    name="thirdInput"
                    values={values.thirdInput}
                    keyboardValue="numeric"
                  />
                  <Field
                    component={OtpInput}
                    name="fourthInput"
                    values={values.fourthInput}
                  />
                  <Field
                    component={OtpInput}
                    name="fifthInput"
                    values={values.fifthInput}
                  />
                  <Field
                    component={OtpInput}
                    name="sixthInput"
                    values={values.sixthInput}
                  />
                </OtpView>
                <ResendOtpText>Resend OTP in 57 secs</ResendOtpText>
                <OtpView marginTop={8} width={220}>
                  <AlreadyText>Already have an Account?</AlreadyText>
                  <SignInText>Sign in here</SignInText>
                </OtpView>
                <ButtonMainView marginTop={254}>
                  <Field
                    component={Buttons}
                    title={String.buttonTitleContinue}
                    onPress={handleSubmit}
                    disabled={!dirty}
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

export default VerifyOTP;
