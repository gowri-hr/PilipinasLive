import React, {FC} from 'react';
import {LoginScreenProps} from '../../utils/LoginUserNavigation';
import {Buttons} from '../../components/atoms/Buttons/Index';
import {Input} from '../../components/atoms/Inputs/Index';
import {Formik, Field} from 'formik';
import BackgroundImage from '../../assets/images/BackgroundImage.svg';
import {ValidationSchemaLogin} from '../../components/Validation';
import {
  Container,
  MyAwareScrollView,
  MySafeAreaView,
  ButtonMainView,
  ForgetText,
  ForgetView,
  InputView,
} from './Styles';
import {MyTouchableWithoutFeedback} from '../../components/atoms/Buttons/Styles';
import {Headers} from '../../components/molecules/Header';
import {WelcomeText} from '../../components/molecules/WelcomView';
import String from '../../components/Strings';

const Login: FC<LoginScreenProps> = props => {
  const handleContinue = () => {
    props.navigation.push('SubLogin');
  };
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <Headers justify={true} backBtn={false} />
          <BackgroundImage />
          <WelcomeText
            justify={true}
            backBtn={false}
            marginTop={34}
            height={55}
            texttransform={true}
            firstText={String.welcomeText}
            secondText={String.welcomeSubText}
          />
          <Formik
            validationSchema={ValidationSchemaLogin}
            initialValues={{
              email: '',
            }}
            onSubmit={handleContinue}>
            {({values, dirty, isValid, errors}) => (
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
                </InputView>
                <MyTouchableWithoutFeedback>
                  <ForgetView>
                    <ForgetText>Forgot your password?</ForgetText>
                  </ForgetView>
                </MyTouchableWithoutFeedback>
                <ButtonMainView marginTop={170}>
                  <Buttons
                    title={String.buttonTitleContinue}
                    disabled={!(isValid && dirty)}
                    onPress={handleContinue}
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

export default Login;
