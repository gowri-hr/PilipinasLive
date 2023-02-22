import React, {FC} from 'react';
import {
  HeaderViewWelcome,
  TextViewSubTitle,
  TextViewTitle,
} from '../../pages/Login/Styles';

interface WelcomeProps {
  onPress?: () => void;
  firstText: string;
  secondText?: string;
  texttransform: boolean;
}

export const WelcomeText: FC<WelcomeProps> = props => {
  return (
    <HeaderViewWelcome>
      <TextViewTitle textTransform={props.texttransform}>
        {props.firstText}
      </TextViewTitle>
      <TextViewSubTitle textTransform={false}>
        {props.secondText}
      </TextViewSubTitle>
    </HeaderViewWelcome>
  );
};
