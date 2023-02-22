import styled from 'styled-components/native';

interface OtpTextProps {
  color: string;
  marginTop: number;
  left: number;
  fontSize: number;
  underline?: boolean;
}
export const OtpText = styled.Text<OtpTextProps>`
  font-family: 'Roboto-Regular';
  font-size: ${(props: OtpTextProps) => `${props.fontSize}px`};
  line-height: 19px;
  text-align: left;
  color: ${(props: OtpTextProps) => props.color};
  margin-top: ${(props: OtpTextProps) => `${props.marginTop}px`};
  left: ${(props: OtpTextProps) => `${props.left}px`};
  text-decoration-line: ${(props: OtpTextProps) => props.underline ? 'underline' : 'none'};
  text-decoration-style: solid;
  text-decoration-color: #FFFFFF;
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
