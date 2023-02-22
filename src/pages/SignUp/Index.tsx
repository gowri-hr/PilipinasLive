import React, {FC, useState} from 'react';
import {SignUpScreenProps} from '../../utils/LoginUserNavigation';
import {WelcomeText} from '../../components/molecules/WelcomView';
import Back from '../../assets/images/BackIcon2.svg';
import {Formik, Field} from 'formik';
import {
  ButtonMainView,
  Container,
  InputView,
  MyAwareScrollView,
  MySafeAreaView,
} from '../Login/Styles';
import {BackImageView, WelcomeTextSignupView} from './Styles';
import {ValidationSchemaSignUp} from '../../components/Validation';
import {InputWithImage} from '../../components/atoms/Inputs/Index';
import {Buttons} from '../../components/atoms/Buttons/Index';
import PrivacyPolicy from '../../components/molecules/PrivacyPolicyView';
import String from '../../components/Strings';
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
            onPress={() => props.navigation.push('Login')}>
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
            onSubmit={() => props.navigation.push('Login')}>
            {({values, handleSubmit, isValid, dirty}) => (
              <>
                <InputView marginTop={51}>
                  <Field
                    component={InputWithImage}
                    name="password"
                    inputPlaceholder="Enter Password*"
                    value={values.password}
                    keyboardValue="email-address"
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
                    keyboardValue="email-address"
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
                    keyboardValue="email-address"
                    secureText={false}
                    EyeImage={false}
                  />
                </InputView>
                <PrivacyPolicy onPress={handleCheck} check={check.checkBtn} />
                <ButtonMainView marginTop={220}>
                  <Field
                    component={Buttons}
                    title={String.buttonTitleContinue}
                    onPress={handleSubmit}
                    disabled={!(isValid && dirty && check.checkBtn)}
                    style={
                      isValid && dirty && check.checkBtn
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

export default SignUp;
