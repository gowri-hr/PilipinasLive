import React, {FC} from 'react';
import Edit from '../../assets/images/editIcon.svg';
import {VerifyOTPScreenProps} from '../../utils/LoginUserNavigation';
import {Formik, Field} from 'formik';
import {Container, MyAwareScrollView, MySafeAreaView} from '../Login/Styles';
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
  ButtonVerifyOtpView,
  OtpInputView,
  OtpSignupView,
} from './Styles';
import {Buttons} from '../../components/atoms/Buttons/Index';
import {OtpInput} from '../../components/atoms/Inputs/Index';
import String from '../../assets/strings/Strings';
import {LogoImage} from '../ForgotPassword/Styles';
import {TouchableWithoutFeedback} from 'react-native';

const VerifyOTP: FC<VerifyOTPScreenProps> = props => {

  const OnPressbackVerifyotp = () => {
    props.navigation.push('Login')
  }
  const OnSubmitVerifyotp = () => {
    props.navigation.push('Login')
  }

  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <TouchableWithoutFeedback
            onPress={OnPressbackVerifyotp}>
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
          <OtpMainText>{String.OtpText}</OtpMainText>
          <OtpView>
            {/* here the mail id comes from the api, so I have hardcoded it for now */}
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
            onSubmit={OnSubmitVerifyotp}>
            {({values, handleSubmit, dirty}) => (
              <>
                <OtpInputView>
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
                </OtpInputView>
                <ResendOtpText>{String.ResendOtpText}</ResendOtpText>
                <OtpSignupView>
                  <AlreadyText>{String.AlreadyText}</AlreadyText>
                  <SignInText>{String.SignInText}</SignInText>
                </OtpSignupView>
                <ButtonVerifyOtpView>
                  <Field
                    component={Buttons}
                    title={String.buttonTitleContinue}
                    onPress={handleSubmit}
                    disabled={!dirty}
                  />
                </ButtonVerifyOtpView>
              </>
            )}
          </Formik>
        </MyAwareScrollView>
      </Container>
    </MySafeAreaView>
  );
};

export default VerifyOTP;
