import React, {FC} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {
  HeaderView,
  LogoImage,
  BackView,
  TextView,
} from '../../styles/LoginRegisterStyles';

interface Header {
  justify: boolean;
  backBtn: boolean;
  onPress: any;
}

export const WelcomeText: FC<Header> = props => {
  return (
    <HeaderView
      justify={props.justify}
      height={55}
      marginleft={16}
      flexDirection="column"
      alignItems={false}
      marginTop={34}>
      <TextView
        height={28}
        fontWeight={700}
        lineHeight={28}
        fontSize={24}
        top={false}
        textTranform={true}>
        MABUHAY!
      </TextView>
      <TextView
        height={19}
        fontWeight={400}
        lineHeight={19}
        fontSize={16}
        top={true}
        textTranform={false}>
        Welcome to the home of Filipino Live Sports
      </TextView>
    </HeaderView>
  );
};

const styles = StyleSheet.create({
  welcomeView: {
    width: 313,
    height: 55,
    left: 16,
    marginTop: 34,
  },
  nameText: {
    height: 28,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    alignItems: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
  },
  welcomeText: {
    height: 19,
    top: 8,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    alignItems: 'center',
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
  },
});
