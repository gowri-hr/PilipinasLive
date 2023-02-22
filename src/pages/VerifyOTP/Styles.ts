import styled from 'styled-components/native';

export const WelcomeTextVerifyOtpView = styled.TouchableOpacity`
  margin-top: 32.64px;
`;

export const OtpText = styled.Text`
  font-family: 'Roboto-Regular';
  line-height: 19px;
  text-align: left;
  text-decoration-style: solid;
  text-decoration-color: #FFFFFF;
`;
export const OtpMainText = styled(OtpText)`
  font-size: 16px;
  margin-top: 16px;
  left: 16px;
  color: #b3b3b3;
`;
export const OtpEmailText = styled(OtpText)`
  font-size: 16px;
  margin-top: 0px;
  left: 0px;
  color: #ffffff;
`;
export const ResendOtpText = styled(OtpText)`
  font-size: 13px;
  margin-top: 16px;
  left: 16px;
  color: #b3b3b3;
`;
export const AlreadyText = styled(OtpText)`
  font-size: 16px;
  margin-top: 0px;
  left: 0px;
  color: #b3b3b3;
`;
export const SignInText = styled(OtpText)`
  font-size: 13px;
  margin-top: 0px;
  left: 2px;
  color: #ffffff;
  text-decoration-line: underline;
`;

interface OtpViewProps {
  marginTop: number;
  width: number;
}
export const OtpView = styled.View<OtpViewProps>`
  width: ${(props: OtpViewProps) => `${props.width}px`};
  flex-direction: row;
  margin-top: ${(props: OtpViewProps) => `${props.marginTop}px`};
  left: 16px;
  justify-content: space-between;
  position: relative;
`;

export const EditTouchabaleWithoutFeedback = styled.TouchableWithoutFeedback``;
