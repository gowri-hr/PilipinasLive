import React, {FC} from 'react';
import {SubLoginScreenProps} from '../utils/LoginUserNavigation';
import {Buttons} from '../components/atoms/Buttons/Buttons';
import {Input, InputWithImage} from '../components/atoms/Inputs/Inputs';
import {Formik, Field} from 'formik';
import BackgroundImage from '../assets/images/BackgroundImage.svg';
import {ValidationSchema} from '../components/Validation';
import {
  Container,
  MyAwareScrollView,
  MySafeAreaView,
  ButtonMainView,
  InputView,
  ForgetView,
  ForgetText,
} from '../styles/LoginRegisterStyles';
import {MyTouchableWithoutFeedback} from '../components/atoms/Buttons/Buttonstyles';
import {Headers} from '../components/molecules/Header';
import {WelcomeText} from '../components/molecules/WelcomView';
import { useWindowDimensions } from 'react-native';

const SubLogin: FC<SubLoginScreenProps> = props => {
  const {width, height} = useWindowDimensions();
  console.log(width)
  const OnPressBack = () => {
    props.navigation.push('Login');
  };
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <Headers justify={false} backBtn={true} onPress={OnPressBack} />
          <BackgroundImage />
          <WelcomeText justify={false} backBtn={true} onPress={OnPressBack} />
          <Formik
            validationSchema={ValidationSchema}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={() => console.log('submit')}>
            {({isValid, handleSubmit, values, dirty}) => (
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
                  <Field
                    component={InputWithImage}
                    name="password"
                    inputPlaceholder="Password"
                    value={values.password}
                    keyboardType="default"
                    secureText={true}
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
                <ButtonMainView marginTop={110}>
                  <Field
                    component={Buttons}
                    title="CONTINUE"
                    onPress={handleSubmit}
                    disabled={!(isValid && dirty)}
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

export default SubLogin;
