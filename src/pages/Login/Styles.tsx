import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../../assets/colors/Colors';
import {FONT} from '../../assets/fonts/Fonts';
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
  height: 65px;
  background-color: ${COLORS.SecondaryBackground};
  margin-left: 16px;
`;
export const HeaderViewLogin = styled(HeaderView)<HeaderProps>`
  justify-content: ${(props: HeaderProps) =>
    props.justify ? 'flex-start' : 'null'};
  align-items: center;
  margin-left: ${(props: HeaderProps) => (props.backBtn ? '0px' : '16px')};
  flex-direction: row;
`;
export const HeaderViewSubLogin = styled(HeaderView)`
  align-items: center;
`;
export const HeaderViewWelcome = styled(HeaderView)`
  height: 55px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${COLORS.PrimaryBackground};
`;
export const LogoImageView = styled.View<HeaderProps>`
  margin-left: ${(props: HeaderProps) => (props.backBtn ? '93px' : '0px')};
`;

export const WelcomeTextLoginView = styled.View`
  margin-top: 34px;
`;

interface TextProps {
  textTransform: boolean;
}
export const TextView = styled.Text<TextProps>`
  font-family: ${FONT.Regular};
  color: ${COLORS.PrimaryFont};
`;
export const TextViewTitle = styled(TextView)`
  height: 28px;
  font-size: 24px
  font-weight: 700;
  line-height: 28px;
  text-transform: ${(props: TextProps) =>
    props.textTransform ? 'uppercase' : 'none'};
`;

export const TextViewSubTitle = styled(TextView)`
  height: 19px;
  font-size: 16px
  font-weight: 400;
  line-height: 19px;
  margin-top: 8px;
  text-transform: ${(props: TextProps) =>
    props.textTransform ? 'uppercase' : 'none'};
`;

export const BackView = styled.View`
  width: 50px;
  height: 65px;
  justify-content: center;
  align-items: flex-start;
  margin-left: 22.68px;
`;

export const ButtonMainView = styled.View`
  left: 16px;
  right: 16px;
`;

export const ButtonLoginView = styled(ButtonMainView)`
  margin-top: 170px;
`;

export const ButtonSubloginView = styled(ButtonMainView)`
  margin-top: 91px;
`;

export const InputView = styled.View`
  width: 358px;
  left: 16px;
`;

export const LoginInputView = styled(InputView)`
  margin-top: 32px;
`;

export const ForgetView = styled.View`
  margin-top: 16px;
`;

export const ForgetText = styled.Text`
  color: ${COLORS.PrimaryFont};
  left: 16px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: ${COLORS.PrimaryFont};
  font-family: ${FONT.Regular};
`;
