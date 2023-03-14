import styled from 'styled-components/native';
import { COLORS } from '../../assets/colors/Colors';
import { FONT } from '../../assets/fonts/Fonts';
import { ButtonMainView } from '../Login/Styles';
import { scaleUnit, moderateScale } from '../../utils/scaling/ScalingUnits';

export const WelcomeTextVerifyOtpView = styled.TouchableOpacity`
  margin-top: ${scaleUnit(32.64)};
`;

export const OtpText = styled.Text`
  font-family: ${FONT.Regular};
  line-height: ${scaleUnit(19)};
  text-align: left;
  text-decoration-style: solid;
  color: ${COLORS.OtpFont};
  text-decoration-color: ${COLORS.PrimaryFont};
`;
export const OtpMainText = styled(OtpText)`
  font-size: 16px;
  margin-top: ${scaleUnit(16)};
  left: ${scaleUnit(16)};
`;
export const OtpEmailText = styled(OtpText)`
  font-size: 16px;
  margin-top: ${scaleUnit(0)};
  left: ${scaleUnit(0)};
  color: ${COLORS.PrimaryFont};
`;
export const ResendOtpText = styled(OtpText)`
  font-size: 13px;
  margin-top: ${scaleUnit(16)};
  left: ${scaleUnit(16)};
`;
export const AlreadyText = styled(OtpText)`
  font-size: 13px;
  margin-top: ${scaleUnit(0)};
  left: ${scaleUnit(0)};;
`;
export const SignInText = styled(OtpText)`
  font-size: 13px;
  margin-top: ${scaleUnit(0)};
  left: ${scaleUnit(2)};
  color: ${COLORS.PrimaryFont};
  text-decoration-line: underline;
`;

export const OtpView = styled.View`
  width: ${moderateScale(170)};
  flex-direction: row;
  margin-top: ${scaleUnit(8)};
  left: ${scaleUnit(16)};
  justify-content: space-between;
  position: relative;
`;

export const OtpInputView = styled(OtpView)`
  width: ${moderateScale(302)};
  margin-top: ${scaleUnit(30)};
`;
export const OtpSignupView = styled(OtpView)`
  width: 220px;
  margin-top: ${scaleUnit(8)};
`;

export const EditTouchabaleWithoutFeedback = styled.TouchableWithoutFeedback``;

export const ButtonVerifyOtpView = styled(ButtonMainView)`
  margin-top: ${scaleUnit(243)};
  bottom: ${scaleUnit(42)};
`;