import styled from 'styled-components/native';
import { COLORS } from '../../../assets/colors/Colors';
import {FONT} from '../../../assets/fonts/Fonts';
import { scaleUnit, verticalScale, moderateScale } from '../../../utils/scaling/ScalingUnits';

export const MainView = styled.View`
  position: relative;
  margin-top: ${scaleUnit(16)};
  flex-direction: row;
`;

export const InputTouchableWithoutFeedback = styled.TouchableOpacity`
  height: ${verticalScale(24)};
  width: ${moderateScale(26)};
  right: ${scaleUnit(40)};
  align-self: center;
`;

export const MyTextInput = styled.TextInput`
  width: ${moderateScale(337)};
  height: ${verticalScale(38)};
  background-color: ${COLORS.textInputBackground};
  border-width: 2px;
  border-color: ${COLORS.textInputBorder};
  border-radius: 3px;
  padding-top: ${scaleUnit(12)};
  padding-bottom: ${scaleUnit(12)};
  padding-left: ${scaleUnit(16)};
  padding-right: ${scaleUnit(40)};
  font-weight: 400;
  font-size: 14px;
  font-family: ${FONT.Regular};
  color: ${COLORS.InputFont};
`;
export const MyTextInputError = styled.TextInput`
  border: 2px solid ${COLORS.SecondaryFont};
`;
export const ErrorTextMainView = styled.View`
  width: ${moderateScale(337)};
  flex-direction: row;
  align-items: center;
  margin-top: ${scaleUnit(4)};
`;
export const ErrorDescriptionText = styled.Text`
  font-size: 12px;
  font-family: ${FONT.Medium};
  color: ${COLORS.SecondaryFont};
  margin-top: ${scaleUnit(3)};
  margin-bottom: ${scaleUnit(3)};
  text-align: left;
  line-height: ${scaleUnit(22)};
  margin-left: ${scaleUnit(7)};
`;

export const OtpTextInput = styled.TextInput`
  width: ${moderateScale(41)};
  height: ${moderateScale(41)};
  background-color: ${COLORS.PrimaryFont};
  border-radius: 5px;
  font-family: ${FONT.Regular};
  font-size: 14px;
  color: ${COLORS.OtpText};
  padding: ${scaleUnit(9.5)} ${scaleUnit(15)} ${scaleUnit(9.5)} ${scaleUnit(15)}
`;
