import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors/Colors';
import {FONT} from '../../assets/fonts/Fonts';
import {
  scaleUnit,
  moderateScale,
  verticalScale,
} from '../../utils/scaling/ScalingUnits';
import {CostText} from '../WelcomePayment/Styles';

export const PayDetailsSubscribeView = styled.View`
  margin-top: ${scaleUnit(8)};
  width: ${moderateScale(309)};
  height: ${verticalScale(46)};
  align-self: center;
  align-items: center;
`;

export const PayDetailsText = styled.Text`
  color: ${COLORS.PrimaryFont};
  line-height: ${scaleUnit(23)};
  font-size: 16px;
  font-family: ${FONT.Bold};
`;

export const PayDetailsTrailText = styled(PayDetailsText)`
  color: ${COLORS.SecondaryFont};
`;

export const PayDetailsPremiumView = styled.View`
  margin-top: ${verticalScale(17)};
  width: ${moderateScale(328)};
  height: ${verticalScale(171)};
  align-self: center;
  align-items: flex-start;
  background-color: ${COLORS.DarkGrey}
  padding: ${verticalScale(16)};
  border-radius: 5px;
`;

export const PayDetailsPremiumText = styled.Text`
  color: ${COLORS.PrimaryFont};
  font-size: 24px;
  line-height: 24px;
  font-family: ${FONT.Medium};
`;

export const PremiumDetailText = styled(PayDetailsPremiumText)`
  font-size: 12px;
  line-height: ${verticalScale(18)};
  font-family: ${FONT.Regular};
  margin-top: ${verticalScale(16)};
  text-align: left;
  width: ${moderateScale(280)};
`;

export const PremiumCostText = styled(CostText)`
  font-family: ${FONT.Regular};
  font-size: 19px;
  line-height: ${verticalScale(20)};
  color: ${COLORS.SecondaryFont};
  margin-top: ${verticalScale(28)};
  align-self: auto;
`;

export const CancelText = styled.Text`
  font-family: ${FONT.Regular};
  font-size: 12px;
  line-height: ${verticalScale(16)};
  color: ${COLORS.LightBlack};
  align-self: center;
  text-align: center;
  width: ${moderateScale(309)};
  margin-top: ${verticalScale(17)};
`;
export const FeatureContainer = styled.View`
  margin-top: ${verticalScale(28)};
  height: ${verticalScale(212.75)};
  justify-content: space-between;
`;

export const FeatureView = styled.View`
  height: ${verticalScale(62)};
  width: ${moderateScale(331)};
  align-self: center;
  flex-direction: row;
`;
export const FeatureSubView = styled(FeatureView)`
  width: ${moderateScale(299)};
  margin-left: ${verticalScale(8.1)};
  align-self: flex-start;
  flex-direction: column;
`;

export const FeatureTitleText = styled(PayDetailsPremiumText)`
  font-size: 14px;
  line-height: ${verticalScale(16)};
`;

export const FeatureDetailText = styled(PayDetailsPremiumText)`
  margin-top: ${verticalScale(8)};
  font-size: 12px;
  line-height: ${verticalScale(18)};
  color: ${COLORS.Gray82};
  font-family: ${FONT.Regular};
`;

export const TapToPayBtnView = styled.View`
  margin-top: ${scaleUnit(36)};
  width: ${moderateScale(328)};
  justify-content: center;
  align-self: center;
`;
