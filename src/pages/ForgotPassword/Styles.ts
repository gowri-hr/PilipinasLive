import styled from 'styled-components/native';
import {ButtonMainView, InputView} from '../Login/Styles';
import { scaleUnit } from '../../utils/scaling/ScalingUnits';

export const LogoImage = styled.View`
  margin-left: ${scaleUnit(16.24)};
  margintop: ${scaleUnit(38.5)};
`;

export const WelcomeTextForgotPasswordView = styled.TouchableOpacity`
  margin-top: ${scaleUnit(32.64)};
`;

export const ForgetPassInputView = styled(InputView)`
  margin-top: ${scaleUnit(51)};
`;

export const ButtonForgetPassView = styled(ButtonMainView)`
  margin-top: ${scaleUnit(267)};
`;
