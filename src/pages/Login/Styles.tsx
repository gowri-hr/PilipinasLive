import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../../assets/colors/Colors';
import {FONT} from '../../assets/fonts/Fonts';
import { scaleUnit, verticalScale, moderateScale } from '../../utils/scaling/ScalingUnits';

export const MySafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.PrimaryBackground};
  flex: 1;
`;

export const MyAwareScrollView = styled(KeyboardAwareScrollView)`
  flex: 1;
`;

interface HeaderProps {
  justify?: boolean;
  backBtn?: boolean;
}
export const HeaderView = styled.View`
  height: ${verticalScale(65)};
  background-color: ${COLORS.SecondaryBackground};
  margin-left: ${scaleUnit(10)};
`;
export const HeaderViewLogin = styled(HeaderView)<HeaderProps>`
  justify-content: ${(props: HeaderProps) =>
    props.justify ? 'flex-start' : 'null'};
  align-items: center;
  margin-left: ${(props: HeaderProps) => (props.backBtn ? scaleUnit(0) : scaleUnit(16))};
  flex-direction: row;
`;
export const HeaderViewSubLogin = styled(HeaderView)`
  align-items: center;
`;
export const HeaderViewWelcome = styled(HeaderView)`
  height: ${verticalScale(55)};
  flex-direction: column;
  align-items: flex-start;
  background-color: ${COLORS.PrimaryBackground};
  margin-left: ${scaleUnit(16)};
`;
export const LogoImageView = styled.View<HeaderProps>`
  margin-left: ${(props: HeaderProps) => (props.backBtn ? scaleUnit(93) : scaleUnit(0))};
`;

export const WelcomeTextLoginView = styled.View`
  margin-top: ${scaleUnit(34)};
`;

interface TextProps {
  textTransform: boolean;
}
export const TextView = styled.Text<TextProps>`
  font-family: ${FONT.Regular};
  color: ${COLORS.PrimaryFont};
`;
export const TextViewTitle = styled(TextView)`
  height: ${verticalScale(28)};
  font-size: 24px;
  font-weight: 700;
  line-height: ${scaleUnit(28)};
  text-transform: ${(props: TextProps) =>
    props.textTransform ? 'uppercase' : 'none'};
`;

export const TextViewSubTitle = styled(TextView)`
  height: ${verticalScale(19)};
  font-size: 16px
  font-weight: 400;
  line-height: ${scaleUnit(19)};
  margin-top: ${scaleUnit(8)};
  text-transform: ${(props: TextProps) =>
    props.textTransform ? 'uppercase' : 'none'};
`;

export const BackView = styled.View`
  width: ${moderateScale(50)};
  height: ${verticalScale(65)};
  justify-content: center;
  align-items: flex-start;
  margin-left: ${scaleUnit(22.68)};
`;

export const ButtonMainView = styled.View`
  left: ${scaleUnit(16)};
  right: ${scaleUnit(16)};
`;

export const ButtonLoginView = styled(ButtonMainView)`
  margin-top: ${scaleUnit(170)};
  bottom: ${scaleUnit(42)};
`;

export const ButtonSubloginView = styled(ButtonMainView)`
  margin-top: ${scaleUnit(110)};
  bottom: ${scaleUnit(42)};
`;

export const InputView = styled.View`
  width: ${moderateScale(258)};
  left: ${scaleUnit(16)};
`;

export const LoginInputView = styled(InputView)`
  margin-top: ${scaleUnit(32)};
`;

export const ForgetView = styled.View`
  margin-top: ${scaleUnit(16)};
`;

export const ForgetText = styled.Text`
  color: ${COLORS.PrimaryFont};
  left: ${scaleUnit(16)};
  font-weight: 400;
  font-size: 13px;
  line-height: ${scaleUnit(18)};
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: ${COLORS.PrimaryFont};
  font-family: ${FONT.Regular};
`;
