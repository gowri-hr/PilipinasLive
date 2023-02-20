import React, {FC} from 'react';
import {MyTouchableWithoutFeedback,ButtonView, ButtonTitleText} from './Buttonstyles';

interface Button {
  title: string;
  onPress: () => void;
  style?: {};
  disabled: boolean;
}
export const Buttons: FC<Button> = (props) => {
  return (
    <MyTouchableWithoutFeedback onPress={props.onPress} disabled={props.disabled}>
      <ButtonView style={{...props.style}}>
        <ButtonTitleText>{props.title}</ButtonTitleText>
      </ButtonView>
    </MyTouchableWithoutFeedback>
  );
};