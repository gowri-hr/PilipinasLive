import styled from 'styled-components/native';
import { COLORS } from '../../assets/colors/Colors';
import {FONT} from '../../assets/fonts/Fonts';
import {ButtonMainView} from '../Login/Styles';

export const WelcomeTextPaymentView = styled.View`
  margin-top: 35px;
  width: 320px;
  height: 54px;
  align-self: center;
  align-items: center;
  justify-content: space-between;
`;

export const DescritpionView = styled.View`
  margin-top: 36px;
  margin-left: 23px;
  margin-right: 23px;
`;

export const DescritpionText = styled.Text`
  font-family: ${FONT.Regular};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
export const PaymentText = styled.Text`
  font-family: ${FONT.Bold};
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
`;
export const PaymentSubText = styled.Text`
  font-family: ${FONT.Regular};
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
export const CostText = styled.Text`
  font-family: ${FONT.Bold};
  font-size: 19px;
  line-height: 20px;
  color: ${COLORS.SecondaryFont};
  margin-top: 14px;
  align-self: center;
`;

export const ButtonPaymentView = styled(ButtonMainView)`
  margin-top: 70px;
  height: 96px;
  width: 360px;
  justify-content: space-between;
`;
export const PolicyView = styled.View`
  margin-top: 21px;
  height: 16px;
  width: 134px;
  justify-content: space-between;
  align-self: center;
`;
export const PolicyText = styled.Text`
  font-family: ${FONT.Medium};
  font-size: 14px;
  line-height: 16px;
  color: rgba(255,255,255,0.5);
`;
