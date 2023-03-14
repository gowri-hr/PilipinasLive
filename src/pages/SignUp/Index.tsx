import React, {FC, useState} from 'react';
import {SignUpScreenProps} from '../../utils/LoginUserNavigation';
import {WelcomeText} from '../../components/molecules/WelcomView';
import Back from '../../assets/images/BackIcon2.svg';
import {Formik, Field} from 'formik';
import {
  Container,
  MyAwareScrollView,
  MySafeAreaView,
} from '../Login/Styles';
import {BackImageView, WelcomeTextSignupView, SignupInputView, ButtonSignupView} from './Styles';
import {ValidationSchemaSignUp} from '../../utils/validation/Validation';
import {InputWithImage} from '../../components/atoms/Inputs/Index';
import {Buttons} from '../../components/atoms/Buttons/Index';
import PrivacyPolicy from '../../components/molecules/PrivacyPolicyView';
import String from '../../assets/strings/Strings';
import {TouchableWithoutFeedback} from 'react-native';

interface CheckProps {
  checkBtn: boolean;
}
interface SecureTextProps {
  secure?: boolean;
  secureConfirmPassword?: boolean;
}
const SignUp: FC<SignUpScreenProps> = props => {
  const [check, setCheck] = useState<CheckProps>({checkBtn: false});
  const [secureText, setSecureText] = useState<SecureTextProps>({
    secure: true,
    secureConfirmPassword: true,
  });

  const OnPressbackSignup = () => {
    props.navigation.push('Login')
  }

  const OnSubmitSignup = () => {
    props.navigation.push('Login')
  }

  const handleCheck = () => {
    setCheck({checkBtn: !check.checkBtn});
  };

  const handleSecurePassword = () => {
    setSecureText({
      secure: !secureText.secure,
      secureConfirmPassword: secureText.secureConfirmPassword,
    });
  };

  const handleSecureConfirmPassword = () => {
    setSecureText({
      secureConfirmPassword: !secureText.secureConfirmPassword,
      secure: secureText.secure,
    });
  };

  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <TouchableWithoutFeedback
            onPress={OnPressbackSignup}>
            <BackImageView>
              <Back />
            </BackImageView>
          </TouchableWithoutFeedback>
          <WelcomeTextSignupView>
            <WelcomeText
              texttransform={false}
              firstText={String.signUpFirstText}
              secondText={String.signUpSecondText}
            />
          </WelcomeTextSignupView>
          <Formik
            validationSchema={ValidationSchemaSignUp}
            initialValues={{
              password: '',
              confirmPassword: '',
              firstname: '',
            }}
            onSubmit={OnSubmitSignup}>
            {({values, handleSubmit, dirty, isValid}) => (
              <>
                <SignupInputView>
                  <Field
                    component={InputWithImage}
                    name="password"
                    inputPlaceholder="Enter Password*"
                    value={values.password}
                    keyboardValue="default"
                    secureText={secureText.secure ? false : true}
                    EyeImage={true}
                    onPress={handleSecurePassword}
                    secure={secureText.secure}
                  />
                  <Field
                    component={InputWithImage}
                    name="confirmPassword"
                    inputPlaceholder="Confirm Password*"
                    value={values.confirmPassword}
                    keyboardValue="default"
                    secureText={secureText.secureConfirmPassword ? false : true}
                    EyeImage={true}
                    onPress={handleSecureConfirmPassword}
                    secure={secureText.secureConfirmPassword}
                  />
                  <Field
                    component={InputWithImage}
                    name="firstname"
                    inputPlaceholder="First Name (Optional)"
                    value={values.firstname}
                    keyboardValue="default"
                    secureText={false}
                    EyeImage={false}
                  />
                </SignupInputView>
                <PrivacyPolicy onPress={handleCheck} check={check.checkBtn} />
                <ButtonSignupView>
                  <Field
                    component={Buttons}
                    title={String.buttonTitleContinue}
                    onPress={handleSubmit}
                    disabled={!(isValid && dirty && check.checkBtn)}
                  />
                </ButtonSignupView>
              </>
            )}
          </Formik>
        </MyAwareScrollView>
      </Container>
    </MySafeAreaView>
  );
};

export default SignUp;
