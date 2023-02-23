import React, {FC} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Back from '../../assets/images/BackIcon2.svg';
import AppLogo from '../../assets/images/Applogo.svg';
import {
  LogoImageView,
  BackView,
  HeaderViewLogin,
} from '../../pages/Login/Styles';

interface Header {
  justify: boolean;
  backBtn: boolean;
  onPress?: () => void;
}
export const Headers: FC<Header> = props => {
  return (
    <HeaderViewLogin justify={props.justify} backBtn={props.backBtn}>
      {props.backBtn ? (
        <TouchableWithoutFeedback onPress={props.onPress}>
          <BackView>
            <Back />
          </BackView>
        </TouchableWithoutFeedback>
      ) : null}
      <LogoImageView backBtn={props.backBtn}>
        <AppLogo />
      </LogoImageView>
    </HeaderViewLogin>
  );
};
