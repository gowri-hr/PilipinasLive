import React, {FC} from 'react';
import {View} from 'react-native';
import {Headers} from '../../components/molecules/Header';
import {ForgotpasswordScreenProps} from '../../utils/LoginUserNavigation';
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
import {BackImageView, CheckTouchableOpacity} from './ForgotPasswordstyles';
import {ValidationSchema} from '../../components/Validation';
import {InputWithImage} from '../../components/atoms/Inputs/Inputs';
import {Buttons} from '../../components/atoms/Buttons/Buttons';
import PrivacyPolicy from '../../components/molecules/PrivacyPolicyView';

const ForgotPassword: FC<ForgotpasswordScreenProps> = props => {
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <BackImageView>
            <Back />
          </BackImageView>
          <WelcomeText
            justify={true}
            backBtn={false}
            marginTop={83.5}
            texttransform={false}
            firstText="Verification was successful!"
            secondText="Let’s set up your account"
          />
          <Formik
            validationSchema={ValidationSchema}
            initialValues={{
              email: '',
            }}
            onSubmit={() => console.log('submit forgot')}>
            {({values, handleSubmit, isValid, dirty}) => (
              <>
                <InputView marginTop={51}>
                  <Field
                    component={InputWithImage}
                    name="email"
                    inputPlaceholder="Enter Password*"
                    value={values.email}
                    keyboardValue="email-address"
                    secureText={false}
                    EyeImage={true}
                  />
                  <Field
                    component={InputWithImage}
                    name="email"
                    inputPlaceholder="Confirm Password*"
                    value={values.email}
                    keyboardValue="email-address"
                    secureText={false}
                    EyeImage={true}
                  />
                  <Field
                    component={InputWithImage}
                    name="email"
                    inputPlaceholder="First Name (Optional)"
                    value={values.email}
                    keyboardValue="email-address"
                    secureText={false}
                    EyeImage={false}
                  />
                </InputView>
                <PrivacyPolicy />
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

export default ForgotPassword;
