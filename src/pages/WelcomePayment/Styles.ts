import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors/Colors';
import {FONT} from '../../assets/fonts/Fonts';
import {ButtonMainView} from '../Login/Styles';
import {
  scaleUnit,
  moderateScale,
  verticalScale,
} from '../../utils/scaling/ScalingUnits';

export const WelcomeTextPaymentView = styled.View`
  margin-top: ${scaleUnit(32)};
  width: ${moderateScale(320)};
  height: ${verticalScale(47)};
  align-self: center;
  align-items: center;
  justify-content: space-between;
`;

export const DescritpionView = styled.View`
  margin-top: ${scaleUnit(32)};
  margin-left: ${scaleUnit(23)};
  margin-right: ${scaleUnit(23)};
`;

export const DescritpionText = styled.Text`
  font-family: ${FONT.Regular};
  font-size: 14px;
  line-height: ${scaleUnit(20)};
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
export const PaymentText = styled.Text`
  font-family: ${FONT.Bold};
  font-size: 20px;
  line-height: ${scaleUnit(20)};
  color: #ffffff;
`;
export const PaymentSubText = styled.Text`
  font-family: ${FONT.Regular};
  font-size: 14px;
  line-height: ${scaleUnit(16)};
  color: #ffffff;
`;
export const CostText = styled.Text`
  font-family: ${FONT.Bold};
  font-size: 19px;
  line-height: ${scaleUnit(20)};
  color: ${COLORS.SecondaryFont};
  margin-top: ${scaleUnit(10)};
  align-self: center;
`;

export const ButtonPaymentView = styled(ButtonMainView)`
  margin-top: ${scaleUnit(66)};
  height: ${verticalScale(86)};
  width: ${moderateScale(320)};
  justify-content: space-between;
`;
export const PolicyView = styled.View`
  margin-top: ${scaleUnit(18)};
  height: ${verticalScale(12)};
  width: ${moderateScale(130)};
  justify-content: space-between;
  align-self: center;
`;
export const PolicyText = styled.Text`
  font-family: ${FONT.Medium};
  font-size: 14px;
  line-height: ${scaleUnit(16)};
  color: rgba(255, 255, 255, 0.5);
`;
