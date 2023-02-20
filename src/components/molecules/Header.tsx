import React, {FC} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Back from '../../assets/images/BackIcon.svg';
import AppLogo from '../../assets/images/Applogo.svg';

import {
  HeaderView,
  LogoImageView,
  BackView,
} from '../../styles/LoginRegisterStyles';

interface Header {
  justify: boolean;
  backBtn: boolean;
  onPress: any;
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
      {/* <LogoImage
        source={require('../../assets/images/Applogo.svg')}
        width={67.41}
        height={38}
        marginLeft={props.backBtn ? 70.1490908916 : 4.13}
      /> */}
      <LogoImageView marginLeft={props.backBtn ? 138 : 4.13}>
        <AppLogo />
      </LogoImageView>
    </HeaderView>
  );
};
