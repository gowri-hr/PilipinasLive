import React, {FC} from 'react';
import {
  HeaderView,
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
        textTransform={true}>
        MABUHAY!
      </TextView>
      <TextView
        height={19}
        fontWeight={400}
        lineHeight={19}
        fontSize={16}
        top={true}
        textTransform={false}>
        Welcome to the home of Filipino Live Sports
      </TextView>
    </HeaderView>
  );
};
