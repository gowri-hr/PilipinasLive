import React, {FC} from 'react';
import {LoginScreenProps} from '../utils/LoginUserNavigation';
import {Buttons} from '../components/atoms/Buttons/Buttons';
import {Input} from '../components/atoms/Inputs/Inputs';
import {Formik, Field} from 'formik';
import BackgroundImage from '../assets/images/BackgroundImage.svg';
import {ValidationSchema} from '../components/Validation';
import {
  Container,
  MyAwareScrollView,
  MySafeAreaView,
  ButtonMainView,
  ForgetText,
  ForgetView,
  InputView,
} from '../styles/LoginRegisterStyles';
import {MyTouchableWithoutFeedback} from '../components/atoms/Buttons/Buttonstyles';
import {Headers} from '../components/molecules/Header';
import {WelcomeText} from '../components/molecules/WelcomView';

const Login: FC<LoginScreenProps> = props => {
  const handleContinue = () => {
    console.log('submit');
    props.navigation.push('SubLogin');
  };
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <Headers justify={true} backBtn={false} onPress={null} />
          <BackgroundImage />
          <WelcomeText justify={true} backBtn={false} onPress={null} />
          <Formik
            validationSchema={ValidationSchema}
            initialValues={{
              email: '',
            }}
            onSubmit={handleContinue}>
            {({values, dirty}) => (
              <>
                <InputView>
                  <Field
                    component={Input}
                    name="email"
                    inputPlaceholder="Email"
                    value={values.email}
                    keyboardValue="email-address"
                    secureText={false}
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
                <ButtonMainView marginTop={170}>
                  <Buttons
                    title="CONTINUE"
                    disabled={!(dirty)}
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
