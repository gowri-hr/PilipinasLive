import styled from 'styled-components/native';
import {BackView} from '../Login/Styles';
export const BackImageView = styled(BackView)`
  margin-top: 6px;
  margin-left: 26px;
`;
export const WelcomeTextSignupView = styled.TouchableOpacity`
  margin-top: 51px;
`;
export const PrivacyPolicyView = styled.View`
  height: 44px;
  width: 358px;
  margin-top: 16px;
  left: 16px;
  flex-direction: row;
`;

export const CheckTouchableOpacity = styled.TouchableOpacity`
  margin-top: 4px;
`;

export const CheckText = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 12.5px;
  line-height: 22px;
  letter-spacing: 0.0016px;
  width: 303px;
  height: 44px;
  text-decoration-style: solid;
  text-decoration-color: #ec2027;
  align-items: center;
  justify-content: center;
`;

export const CheckText1 = styled(CheckText)`
  color: #ffffff;
  margin-left: 10px;
  text-decoration-line: none;
`;
export const CheckText2 = styled(CheckText)`
  color: #ec2027;
  text-decoration-line: underline;
`;
export const CheckText3 = styled(CheckText)`
  color: #ec2027;
  text-decoration-line: underline;
`;
