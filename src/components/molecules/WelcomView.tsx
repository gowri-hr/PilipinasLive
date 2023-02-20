import React, {FC} from 'react';
import {
  HeaderView,
  TextView,
} from '../../screens/Login/LoginStyles';

interface Header {
  justify: boolean;
  backBtn: boolean;
  onPress?: () => void;
  marginTop?: number;
  firstText: string;
  secondText: string;
  texttransform: boolean;
}

export const WelcomeText: FC<Header> = props => {
  return (
    <HeaderView
      justify={props.justify}
      height={55}
      marginleft={16}
      flexDirection="column"
      alignItems={false}
      marginTop={props.marginTop}>
      <TextView
        height={28}
        fontWeight={700}
        lineHeight={28}
        fontSize={24}
        top={false}
        textTransform={props.texttransform ? true : false}
        >
        {props.firstText}
      </TextView>
      <TextView
        height={19}
        fontWeight={400}
        lineHeight={19}
        fontSize={16}
        top={true}
        textTransform={false}
        >
        {props.secondText}
      </TextView>
    </HeaderView>
  );
};
