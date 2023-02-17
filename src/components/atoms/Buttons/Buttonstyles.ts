import styled from 'styled-components/native';

interface Touchable {
  onPress: () => void;
  style: {};
  disabled: boolean;
}
export const MyTouchableWithoutFeedback = styled.TouchableWithoutFeedback<Touchable>`
`;
