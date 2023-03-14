import React, {FC} from 'react';
import {LoginScreenProps} from '../../utils/LoginUserNavigation';
import {Buttons} from '../../components/atoms/Buttons/Index';
import {Input} from '../../components/atoms/Inputs/Index';
import {Formik, Field} from 'formik';
import BackgroundImage from '../../assets/images/BackgroundImage.svg';
import {ValidationSchemaLogin} from '../../utils/validation/Validation';
import {
  Container,
  MyAwareScrollView,
  MySafeAreaView,
  ButtonLoginView,
  ForgetText,
  ForgetView,
  LoginInputView,
  WelcomeTextLoginView,
} from './Styles';
import {MyTouchableWithoutFeedback} from '../../components/atoms/Buttons/Styles';
import {Headers} from '../../components/molecules/Header';
import {WelcomeText} from '../../components/molecules/WelcomView';
import String from '../../assets/strings/Strings';

const Login: FC<LoginScreenProps> = props => {

  const HandleContinueLogin = () => {
    props.navigation.push('SubLogin');
  };

  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <Headers justify={true} backBtn={false} />
          <BackgroundImage />
          <WelcomeTextLoginView>
            <WelcomeText
              texttransform={true}
              firstText={String.welcomeText}
              secondText={String.welcomeSubText}
            />
          </WelcomeTextLoginView>
          <Formik
            validationSchema={ValidationSchemaLogin}
            initialValues={{
              email: '',
            }}
            onSubmit={HandleContinueLogin}>
            {({values, dirty, isValid}) => (
              <>
                <LoginInputView>
                  <Field
                    component={Input}
                    name="email"
                    inputPlaceholder="Email"
                    value={values.email}
                    keyboardValue="email-address"
                    secureText={false}
                    EyeImage={false}
                  />
                </LoginInputView>
                <MyTouchableWithoutFeedback>
                  <ForgetView>
                    <ForgetText>{String.forgotFirstText}</ForgetText>
                  </ForgetView>
                </MyTouchableWithoutFeedback>
                <ButtonLoginView>
                  <Field
                    component={Buttons}
                    title={String.buttonTitleContinue}
                    disabled={!(isValid && dirty)}
                    onPress={HandleContinueLogin}
                  />
                </ButtonLoginView>
              </>
            )}
          </Formik>
        </MyAwareScrollView>
      </Container>
    </MySafeAreaView>
  );
};

export default Login;
