import React, {FC} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Back from '../../assets/images/BackIcon.svg';
import {
  HeaderView,
  LogoImage,
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
      flexDirection='row'
      alignItems={true}
      marginTop={0}
      >
      {props.backBtn ? (
        <TouchableWithoutFeedback onPress={props.onPress}>
          <BackView>
            <Back />
          </BackView>
        </TouchableWithoutFeedback>
      ) : null}
      <LogoImage
        source={require('../../assets/images/AppLogo.png')}
        width={180}
        height={40}
        marginLeft={props.backBtn ? 70.1490908916 : 4.13}
      />
    </HeaderView>
  );
};
