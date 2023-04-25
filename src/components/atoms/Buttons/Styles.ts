import styled from 'styled-components/native';
import {COLORS} from '../../../assets/colors/Colors';
import {FONT} from '../../../assets/fonts/Fonts';
import {verticalScale, moderateScale } from '../../../utils/scaling/ScalingUnits';

export const MyTouchableWithoutFeedback = styled.TouchableWithoutFeedback``;

export const ButtonView = styled.View`
  height: ${verticalScale(38)};
  width: ${moderateScale(337)};
  background-color: ${COLORS.PrimaryButtonBackground};
  border-width: 1.24725px;
  border-color: ${COLORS.PrimaryButtonBorder};
  border-radius: 3.74175px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitleText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: ${COLORS.PrimaryFont};
  font-family: ${FONT.Medium};
  font-weight: 600;
`;
export const ButtonBorderText = styled(ButtonTitleText)`
  color: ${COLORS.GreyText};
`;

export const InactiveButton = styled(ButtonView)`
  background-color: ${COLORS.PrimaryButtonBackground};
  border-color: ${COLORS.PrimaryButtonBorder};
`;
export const ActiveButton = styled(ButtonView)`
  background-color: ${COLORS.SecondaryButtonBackground};
  border-color: ${COLORS.SecondaryButtonBorder};
`;
export const BorderButton = styled(ButtonView)`
  background-color: none;
  border-color: ${COLORS.WhiteButtonBorder};
`;
