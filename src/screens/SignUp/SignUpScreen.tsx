import React, {FC} from 'react';
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
} from '../Login/LoginStyles';
import {BackImageView} from './SignUpstyles';
import {ValidationSchemaSubLogin} from '../../components/Validation';
import {InputWithImage} from '../../components/atoms/Inputs/Inputs';
import {Buttons} from '../../components/atoms/Buttons/Buttons';
import PrivacyPolicy from '../../components/molecules/PrivacyPolicyView';

const SignUp: FC<SignUpScreenProps> = props => {
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <BackImageView
            onPress={() => props.navigation.push('Login')}>
            <Back />
          </BackImageView>
          <WelcomeText
            justify={true}
            backBtn={false}
            marginTop={83.5}
            height={55}
            texttransform={false}
            firstText="Verification was successful!"
            secondText="Let’s set up your account"
          />
          <Formik
            validationSchema={ValidationSchemaSubLogin}
            initialValues={{
                password: '',
                confirmPassword: '',
                firstname: '',
            }}
            onSubmit={() => console.log('submit SignUp')}>
            {({values, handleSubmit, isValid, dirty}) => (
              <>
                <InputView marginTop={51}>
                  <Field
                    component={InputWithImage}
                    name="password"
                    inputPlaceholder="Enter Password*"
                    value={values.password}
                    keyboardValue="email-address"
                    secureText={false}
                    EyeImage={true}
                  />
                  <Field
                    component={InputWithImage}
                    name="confirmPassword"
                    inputPlaceholder="Confirm Password*"
                    value={values.confirmPassword}
                    keyboardValue="email-address"
                    secureText={false}
                    EyeImage={true}
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
                <Field component={PrivacyPolicy} />
                <ButtonMainView marginTop={220}>
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

export default SignUp;
