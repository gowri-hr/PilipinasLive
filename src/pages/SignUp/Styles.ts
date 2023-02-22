import styled from 'styled-components/native';

export const BackImageView = styled.TouchableOpacity`
  margin-top: 33px;
  left: 16px;
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

interface CheckTextProps {
  marginLeft: number;
  color: string;
  underline: boolean;
}
export const CheckText = styled.Text<CheckTextProps>`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 12.5px;
  line-height: 22px;
  letter-spacing: 0.0016px;
  color: ${(props: CheckTextProps) => props.color};
  margin-left: ${(props: CheckTextProps) => `${props.marginLeft}px`};
  width: 303px;
  height: 44px;
  text-decoration-line: ${(props: CheckTextProps) => props.underline ? 'underline' : 'none'};
  text-decoration-style: solid;
  text-decoration-color: #EC2027;
  align-items: center;
  justify-content: center;
`;