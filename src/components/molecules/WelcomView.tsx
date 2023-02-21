import React, {FC} from 'react';
import {
  HeaderView,
  TextView,
} from '../../screens/Login/LoginStyles';

interface WelcomeProps {
  justify: boolean;
  backBtn: boolean;
  onPress?: () => void;
  marginTop: number;
  firstText: string;
  secondText?: string;
  texttransform: boolean;
  height: number;
}

export const WelcomeText: FC<WelcomeProps> = props => {
  return (
    <HeaderView
      justify={props.justify}
      height={props.height}
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
