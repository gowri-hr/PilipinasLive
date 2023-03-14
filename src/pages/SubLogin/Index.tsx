import React, {FC} from 'react';
import {SubLoginScreenProps} from '../../utils/LoginUserNavigation';
import {Buttons} from '../../components/atoms/Buttons/Index';
import {Input, InputWithImage} from '../../components/atoms/Inputs/Index';
import {Formik, Field} from 'formik';
import BackgroundImage from '../../assets/images/BackgroundImage.svg';
import {ValidationSchemaSubLogin} from '../../utils/validation/Validation';
import {
  Container,
  MyAwareScrollView,
  MySafeAreaView,
  ButtonSubloginView,
  ForgetView,
  ForgetText,
  WelcomeTextLoginView,
  LoginInputView,
} from '../Login/Styles';
import {MyTouchableWithoutFeedback} from '../../components/atoms/Buttons/Styles';
import {Headers} from '../../components/molecules/Header';
import {WelcomeText} from '../../components/molecules/WelcomView';
import String from '../../assets/strings/Strings';

const SubLogin: FC<SubLoginScreenProps> = props => {

  const OnPressBackSublogin = () => {
    props.navigation.push('Login');
  };
  const OnSubmitSublogin = () => {
    props.navigation.push('Login');
  };
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <Headers justify={false} backBtn={true} onPress={OnPressBackSublogin} />
          <BackgroundImage />
          <WelcomeTextLoginView>
            <WelcomeText
              texttransform={true}
              firstText={String.welcomeText}
              secondText={String.welcomeSubText}
            />
          </WelcomeTextLoginView>
          <Formik
            validationSchema={ValidationSchemaSubLogin}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={OnSubmitSublogin}>
            {({isValid, handleSubmit, values, dirty}) => (
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
                  <Field
                    component={InputWithImage}
                    name="password"
                    inputPlaceholder="Password"
                    value={values.password}
                    keyboardType="default"
                    secureText={true}
                    EyeImage={true}
                  />
                </LoginInputView>
                <MyTouchableWithoutFeedback>
                  <ForgetView>
                    <ForgetText>Forgot your password?</ForgetText>
                  </ForgetView>
                </MyTouchableWithoutFeedback>
                <ButtonSubloginView>
                  <Field
                    component={Buttons}
                    title={String.buttonTitleContinue}
                    onPress={handleSubmit}
                    disabled={!(isValid && dirty)}
                  />
                </ButtonSubloginView>
              </>
            )}
          </Formik>
        </MyAwareScrollView>
      </Container>
    </MySafeAreaView>
  );
};

export default SubLogin;
