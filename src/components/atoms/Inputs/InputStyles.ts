import styled from 'styled-components/native';

export const MainView = styled.View`
  position: relative;
  margin-top: 16px;
`;

export const InputTouchableWithoutFeedback = styled.TouchableOpacity`
  position: absolute;
  top: 12px;
  right: 11.5px;
  border: 1px solid white;
`;

export const MyTextInput = styled.TextInput`
  width: 358px;
  height: 41px;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #dedede;
  border-radius: 3px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  color: #111111;
`;
export const MyTextInputError = styled.TextInput`
  border: 2px solid #ec2027;
`;
export const ErrorTextMainView = styled.View`
  width: 358px;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;
export const ErrorDescriptionText = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Medium';
  color: #ec2027;
  margin-top: 3px;
  margin-bottom: 3px;
  text-align: left;
  line-height: 22px;
  margin-left: 7px;
`;

export const OtpTextInput = styled.TextInput`
  width: 41px;
  height: 41px;
  background-color: #ffffff;
  border-radius: 5px;
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #333333;
  padding: 9.5px 15px 9.5px 15px
`;
