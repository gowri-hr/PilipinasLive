import React, {FC} from 'react';
import Edit from '../../assets/images/editIcon.svg';
import {VerifyOTPScreenProps} from '../../utils/LoginUserNavigation';
import {Formik, Field} from 'formik';
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
import {
  EditTouchabaleWithoutFeedback,
  OtpText,
  OtpView,
} from './Styles';
import {Buttons} from '../../components/atoms/Buttons/Index';
import { ValidationSchemaSubLogin } from '../../components/Validation';
import { OtpInput } from '../../components/atoms/Inputs/Index';
import String from '../../components/Strings';

const VerifyOTP: FC<VerifyOTPScreenProps> = props => {
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <BackImageView>
            <Back />
          </BackImageView>
          <LogoImageView marginLeft={16} marginTop={63.5}>
            <AppLogo width={101.76} height={57.36} />
          </LogoImageView>
          <WelcomeText
            justify={true}
            backBtn={false}
            marginTop={32.64}
            height={28}
            texttransform={false}
            firstText={String.verifyFirstText}
          />
          <OtpText color="#B3B3B3" marginTop={16} left={16} fontSize={16}>
            OTP was sent to
          </OtpText>
          <OtpView marginTop={8} width={170}>
            <OtpText color="#FFFFFF" marginTop={0} left={0} fontSize={16}>
              abcde@gmail.com
            </OtpText>
            <EditTouchabaleWithoutFeedback>
              <Edit />
            </EditTouchabaleWithoutFeedback>
          </OtpView>
          <Formik
            initialValues={{
              firstInput: '',
              secondInput: '',
              thirdInput: '',
              fourthInput: '',
              fifthInput: '',
              sixthInput: '',
            }}
            onSubmit={() => console.log('submit SignUp')}>
            {({values, handleSubmit, isValid, dirty}) => (
              <>
                <OtpView marginTop={30} width={302}>
                  <Field
                    component={OtpInput}
                    name="firstInput"
                    values={values.firstInput}
                  />
                  <Field
                    component={OtpInput}
                    name="secondInput"
                    values={values.secondInput}
                    keyboardValue="numeric"
                  />
                  <Field
                    component={OtpInput}
                    name="thirdInput"
                    values={values.thirdInput}
                    keyboardValue="numeric"
                  />
                  <Field
                    component={OtpInput}
                    name="fourthInput"
                    values={values.fourthInput}
                  />
                  <Field
                    component={OtpInput}
                    name="fifthInput"
                    values={values.fifthInput}
                  />
                  <Field
                    component={OtpInput}
                    name="sixthInput"
                    values={values.sixthInput}
                  />
                </OtpView>
                <OtpText color="#B3B3B3" marginTop={16} left={16} fontSize={13}>
                  Resend OTP in 57 secs
                </OtpText>
                <OtpView marginTop={8} width={220}>
                  <OtpText color="#B3B3B3" marginTop={0} left={0} fontSize={13}>
                    Already have an Account?
                  </OtpText>
                  <OtpText
                    color="#FFFFFF"
                    marginTop={0}
                    left={0}
                    fontSize={13}
                    underline={true}>
                    Sign in here
                  </OtpText>
                </OtpView>
                <ButtonMainView marginTop={258}>
                  <Field
                    component={Buttons}
                    title={String.buttonTitleContinue}
                    onPress={handleSubmit}
                    disabled={!dirty}
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

export default VerifyOTP;
