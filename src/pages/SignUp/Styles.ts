import styled from 'styled-components/native';
import {BackView, ButtonMainView, InputView} from '../Login/Styles';
import {COLORS} from '../../assets/colors/Colors';
import { FONT } from '../../assets/fonts/Fonts';
import { scaleUnit, verticalScale, moderateScale } from '../../utils/scaling/ScalingUnits';

export const BackImageView = styled(BackView)`
  margin-top: ${scaleUnit(2)};
  margin-left: ${scaleUnit(26)};
`;
export const WelcomeTextSignupView = styled.TouchableOpacity`
  margin-top: ${scaleUnit(48)};
`;
export const PrivacyPolicyView = styled.View`
  height: ${verticalScale(40)};
  width: ${moderateScale(354)};
  margin-top: ${scaleUnit(12)};
  left: ${scaleUnit(16)};
  flex-direction: row;
`;

export const CheckTouchableOpacity = styled.TouchableOpacity`
  margin-top: ${scaleUnit(4)};
`;

export const CheckText = styled.Text`
  font-family: ${FONT.Regular};
  font-style: normal;
  font-weight: 400;
  font-size: 12.5px;
  line-height: ${scaleUnit(22)};
  letter-spacing: 0.0016px;
  width: ${moderateScale(303)};
  height: ${verticalScale(40)};
  text-decoration-style: solid;
  text-decoration-color: ${COLORS.SecondaryFont};
  align-items: center;
  justify-content: center;
`;

export const CheckText1 = styled(CheckText)`
  color: ${COLORS.PrimaryFont};
  margin-left: ${scaleUnit(10)};
  text-decoration-line: none;
`;
export const CheckText2 = styled(CheckText)`
  color: ${COLORS.SecondaryFont};
  text-decoration-line: underline;
`;
export const CheckText3 = styled(CheckText)`
  color: ${COLORS.SecondaryFont};
  text-decoration-line: underline;
`;

export const SignupInputView = styled(InputView)`
  margin-top: ${scaleUnit(48)};
`
export const ButtonSignupView = styled(ButtonMainView)`
  margin-top: ${scaleUnit(137)};
`;
