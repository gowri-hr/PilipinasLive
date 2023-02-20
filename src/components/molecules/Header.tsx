import React, {FC} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Back from '../../assets/images/BackIcon2.svg';
import AppLogo from '../../assets/images/Applogo.svg';

import {
  HeaderView,
  LogoImageView,
  BackView,
} from '../../screens/Login/LoginStyles';

interface Header {
  justify: boolean;
  backBtn: boolean;
  onPress?: () => void;
}

export const Headers: FC<Header> = props => {
  return (
    <HeaderView
      justify={props.justify}
      height={65}
      marginleft={props.backBtn ? 0 : 16}
      flexDirection="row"
      alignItems={true}
      marginTop={0}>
      {props.backBtn ? (
        <TouchableWithoutFeedback onPress={props.onPress}>
          <BackView>
            <Back />
          </BackView>
        </TouchableWithoutFeedback>
      ) : null}
      <LogoImageView marginLeft={props.backBtn ? 138 : 4.13}>
        <AppLogo />
      </LogoImageView>
    </HeaderView>
  );
};
