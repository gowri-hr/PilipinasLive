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

export const ErrorText = styled.Text`
  width: 358px;
  font-size: 12px;
  color: #ffffff;
  margin-top: 3px;
  margin-bottom: 3px;
  text-align: center;
`;
