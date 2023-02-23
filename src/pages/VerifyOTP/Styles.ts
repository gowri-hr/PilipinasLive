import styled from 'styled-components/native';
import { COLORS } from '../../assets/colors/Colors';
import { FONT } from '../../assets/fonts/Fonts';
import { ButtonMainView } from '../Login/Styles';

export const WelcomeTextVerifyOtpView = styled.TouchableOpacity`
  margin-top: 32.64px;
`;

export const OtpText = styled.Text`
  font-family: ${FONT.Regular};
  line-height: 19px;
  text-align: left;
  text-decoration-style: solid;
  color: ${COLORS.OtpFont};
  text-decoration-color: ${COLORS.PrimaryFont};
`;
export const OtpMainText = styled(OtpText)`
  font-size: 16px;
  margin-top: 16px;
  left: 16px;
`;
export const OtpEmailText = styled(OtpText)`
  font-size: 16px;
  margin-top: 0px;
  left: 0px;
  color: ${COLORS.PrimaryFont};
`;
export const ResendOtpText = styled(OtpText)`
  font-size: 13px;
  margin-top: 16px;
  left: 16px;
`;
export const AlreadyText = styled(OtpText)`
  font-size: 13px;
  margin-top: 0px;
  left: 0px;
`;
export const SignInText = styled(OtpText)`
  font-size: 13px;
  margin-top: 0px;
  left: 2px;
  color: ${COLORS.PrimaryFont};
  text-decoration-line: underline;
`;

export const OtpView = styled.View`
  width: 170px;
  flex-direction: row;
  margin-top: 8px;
  left: 16px;
  justify-content: space-between;
  position: relative;
`;

export const OtpInputView = styled(OtpView)`
  width: 302px;
  margin-top: 30px;
`;
export const OtpSignupView = styled(OtpView)`
  width: 220px;
  margin-top: 8px;
`;

export const EditTouchabaleWithoutFeedback = styled.TouchableWithoutFeedback``;

export const ButtonVerifyOtpView = styled(ButtonMainView)`
  margin-top: 213px;
`;