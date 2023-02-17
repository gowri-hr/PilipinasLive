import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #111111;
  flex: 1;
`;

export const MyAwareScrollView = styled(KeyboardAwareScrollView)`
  flex: 1;
`;

interface HeaderProps {
  justify: boolean;
  height: number;
  flexDirection: string;
  marginleft: number;
  alignItems: boolean;
  marginTop: number;
}
export const HeaderView = styled.View<HeaderProps>`
  height: ${(props: HeaderProps) => `${props.height}px`};
  margin-top: ${(props: HeaderProps) => `${props.marginTop}px`};
  background-color: '#030406';
  justify-content: ${(props: HeaderProps) =>
    props.justify ? 'flex-start' : 'null'};
  align-items: ${(props: HeaderProps) =>
    props.alignItems ? 'center' : 'flex-start'};
  flex-direction: ${(props: HeaderProps) => props.flexDirection};
  margin-left: ${(props: HeaderProps) => `${props.marginleft}px`};
`;

interface TextProps {
  height: number;
  fontWeight: number;
  lineHeight: number;
  top: boolean;
  fontSize: number;
  textTransform: boolean;
}
export const TextView = styled.Text<TextProps>`
  font-family: 'Roboto-Regular';
  color: #ffffff;
  height: ${(props: TextProps) =>
    props.height ? `${props.height}px` : `${props.height}px`};
  font-weight: ${(props: TextProps) =>
    props.fontWeight ? `${props.fontWeight}` : `${props.fontWeight}`};
  line-height: ${(props: TextProps) =>
    props.lineHeight ? `${props.lineHeight}px` : `${props.lineHeight}px`};
  top: ${(props: TextProps) => (props.top ? '8px' : '0px')};
  font-size: ${(props: TextProps) =>
    props.fontSize ? `${props.fontSize}px` : `${props.fontSize}px`};
  text-transform: ${(props: TextProps) =>
    props.textTransform ? 'uppercase' : 'none'};
`;
export const BackView = styled.View`
  width: 44.6px;
  height: 65px;
  justify-content: center;
  align-items: center;
`;

interface ImageProps {
  width: number;
  height: number;
  marginLeft: number;
}
export const LogoImage = styled.Image<ImageProps>`
  width: ${(props: ImageProps) => `${props.width}px`};
  height: ${(props: ImageProps) => `${props.height}px`};
  margin-left: ${(props: ImageProps) => `${props.marginLeft}px`};
`;
