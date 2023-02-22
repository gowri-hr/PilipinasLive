import React, {FC} from 'react';
import {ForgotPasswordScreenProps} from '../../utils/LoginUserNavigation';
import {
  ButtonMainView,
  Container,
  InputView,
  LogoImageView,
  MyAwareScrollView,
  MySafeAreaView,
} from '../Login/Styles';
import {BackImageView} from '../SignUp/Styles';
import Back from '../../assets/images/BackIcon2.svg';
import AppLogo from '../../assets/images/Applogo.svg';
import {WelcomeText} from '../../components/molecules/WelcomView';
import {Formik, Field} from 'formik';
import {ValidationSchemaLogin} from '../../components/Validation';
import {Input} from '../../components/atoms/Inputs/Index';
import {Buttons} from '../../components/atoms/Buttons/Index';
import String from '../../components/Strings';
import {TouchableWithoutFeedback} from 'react-native';
import {LogoImage, WelcomeTextForgotPasswordView} from './Styles';
const ForgotPassword: FC<ForgotPasswordScreenProps> = props => {
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
          <WelcomeTextForgotPasswordView>
            <WelcomeText
              // justify={true}
              // backBtn={false}
              // marginTop={32.64}
              // height={55}
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
            onSubmit={() => props.navigation.push('Login')}>
            {({values, dirty, handleSubmit}) => (
              <>
                <InputView marginTop={51}>
                  <Field
                    component={Input}
                    name="email"
                    inputPlaceholder="Email"
                    value={values.email}
                    keyboardValue="email-address"
                    secureText={false}
                    EyeImage={false}
                  />
                </InputView>
                <ButtonMainView marginTop={343}>
                  <Buttons
                    title={String.buttonTitleContinue}
                    disabled={!dirty}
                    onPress={handleSubmit}
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

export default ForgotPassword;
