import React, {FC} from 'react';
import {ForgotPasswordScreenProps} from '../../utils/LoginUserNavigation';
import {Container, MyAwareScrollView, MySafeAreaView} from '../Login/Styles';
import {BackImageView} from '../SignUp/Styles';
import Back from '../../assets/images/BackIcon2.svg';
import AppLogo from '../../assets/images/Applogo.svg';
import {WelcomeText} from '../../components/molecules/WelcomView';
import {Formik, Field} from 'formik';
import {ValidationSchemaLogin} from '../../utils/validation/Validation';
import {Input} from '../../components/atoms/Inputs/Index';
import {Buttons} from '../../components/atoms/Buttons/Index';
import String from '../../assets/strings/Strings';
import {TouchableWithoutFeedback} from 'react-native';
import {
  LogoImage,
  WelcomeTextForgotPasswordView,
  ForgetPassInputView,
  ButtonForgetPassView,
} from './Styles';

const ForgotPassword: FC<ForgotPasswordScreenProps> = props => {

  const OnPressbackForgot = () => {
    props.navigation.push('Login')
  }
  const OnSubmitForgot = () => {
    props.navigation.push('Login')
  }
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <TouchableWithoutFeedback
            onPress={OnPressbackForgot}>
            <BackImageView>
              <Back />
            </BackImageView>
          </TouchableWithoutFeedback>
          <LogoImage>
            <AppLogo width={101.76} height={57.36} />
          </LogoImage>
          <WelcomeTextForgotPasswordView>
            <WelcomeText
              texttransform={false}
              firstText={String.forgotFirstText}
              secondText={String.forgotSecondText}
            />
          </WelcomeTextForgotPasswordView>
          <Formik
            validationSchema={ValidationSchemaLogin}
            initialValues={{
              email: '',
            }}
            onSubmit={OnSubmitForgot}>
            {({values, dirty, handleSubmit, isValid}) => (
              <>
                <ForgetPassInputView>
                  <Field
                    component={Input}
                    name="email"
                    inputPlaceholder="Email"
                    value={values.email}
                    keyboardValue="email-address"
                    secureText={false}
                    EyeImage={false}
                  />
                </ForgetPassInputView>
                <ButtonForgetPassView>
                  <Buttons
                    title={String.buttonTitleContinue}
                    disabled={!(isValid && dirty)}
                    onPress={handleSubmit}
                  />
                </ButtonForgetPassView>
              </>
            )}
          </Formik>
        </MyAwareScrollView>
      </Container>
    </MySafeAreaView>
  );
};

export default ForgotPassword;
