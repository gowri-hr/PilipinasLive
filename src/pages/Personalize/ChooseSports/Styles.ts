import styled from 'styled-components/native';
import {COLORS} from '../../../assets/colors/Colors';
import {FONT} from '../../../assets/fonts/Fonts';
import {
  moderateScale,
  scaleUnit,
  verticalScale,
} from '../../../utils/scaling/ScalingUnits';

export const PersonalizeView = styled.View``;

export const PersonalizeSkipText = styled.Text`
  color: ${COLORS.Gray64};
  margin-top: ${scaleUnit(23)};
  margin-right: ${scaleUnit(16)};
  font-family: ${FONT.Regular};
  font-size: 18px;
  line-height: ${scaleUnit(23)};
  align-self: flex-end;
`;

export const PersonalizeTitle = styled.Text`
  font-family: ${FONT.Medium};
  color: ${COLORS.White};
  margin-top: ${scaleUnit(55)};
  font-size: 20px;
  line-height: ${scaleUnit(26)};
  text-align: center;
`;

export const PersonalizeSubTitle = styled.Text`
  font-family: ${FONT.Regular};
  color: ${COLORS.White};
  opacity: 0.64;
  margin-top: ${scaleUnit(16)};
  font-size: 18px;
  line-height: ${scaleUnit(23)};
  text-align: center;
`;

export const OptionsView = styled(PersonalizeView)`
  width: ${moderateScale(317)};
  height: ${verticalScale(148)};
  margin-top: ${scaleUnit(37)};
  align-self: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const PersonalizeButtonView = styled(PersonalizeView)`
  align-self: center;
  margin-top: 230px;
`;