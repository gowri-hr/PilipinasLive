import styled from 'styled-components/native';
import { COLORS } from '../../../assets/colors/Colors';
import {FONT} from '../../../assets/fonts/Fonts';

export const MainView = styled.View`
  position: relative;
  margin-top: 16px;
  flex-direction: row;
`;

export const InputTouchableWithoutFeedback = styled.TouchableOpacity`
  height: 24px;
  width: 26px;
  right: 40px;
  align-self: center;
`;

export const MyTextInput = styled.TextInput`
  width: 358px;
  height: 41px;
  background-color: ${COLORS.textInputBackground};
  border-width: 2px;
  border-color: ${COLORS.textInputBorder};
  border-radius: 3px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 40px;
  font-weight: 400;
  font-size: 14px;
  font-family: ${FONT.Regular};
  color: ${COLORS.InputFont};
`;
export const MyTextInputError = styled.TextInput`
  border: 2px solid ${COLORS.SecondaryFont};
`;
export const ErrorTextMainView = styled.View`
  width: 358px;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;
export const ErrorDescriptionText = styled.Text`
  font-size: 12px;
  font-family: ${FONT.Medium};
  color: ${COLORS.SecondaryFont};
  margin-top: 3px;
  margin-bottom: 3px;
  text-align: left;
  line-height: 22px;
  margin-left: 7px;
`;

export const OtpTextInput = styled.TextInput`
  width: 41px;
  height: 41px;
  background-color: ${COLORS.PrimaryFont};
  border-radius: 5px;
  font-family: ${FONT.Regular};
  font-size: 14px;
  color: ${COLORS.OtpText};
  padding: 9.5px 15px 9.5px 15px;
`;
