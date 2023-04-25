import React, {FC} from 'react';
import {PersonalizeButtonView} from '../../../pages/Personalize/ChooseSports/Styles';
import {
  MyTouchableWithoutFeedback,
  ButtonTitleText,
  InactiveButton,
  ActiveButton,
  BorderButton,
  ButtonBorderText,
  OptionsButtonView,
  OptionTitle,
  OptionsSelectButtonView,
} from './Styles';

interface Button {
  title: string;
  onPress: () => void;
  disabled: boolean;
}
export const Buttons: FC<Button> = props => {
  return (
    <MyTouchableWithoutFeedback
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.disabled ? (
        <InactiveButton>
          <ButtonTitleText>{props.title}</ButtonTitleText>
        </InactiveButton>
      ) : (
        <ActiveButton>
          <ButtonTitleText>{props.title}</ButtonTitleText>
        </ActiveButton>
      )}
    </MyTouchableWithoutFeedback>
  );
};
export const OutlineButton: FC<Button> = props => {
  return (
    <MyTouchableWithoutFeedback
      onPress={props.onPress}
      disabled={props.disabled}>
      <BorderButton>
        <ButtonBorderText>{props.title}</ButtonBorderText>
      </BorderButton>
    </MyTouchableWithoutFeedback>
  );
};
export const OptionButtons: FC<Button> = props => {
  return (
    <MyTouchableWithoutFeedback
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.disabled ? (
        <OptionsSelectButtonView>
          <OptionTitle>{props.title}</OptionTitle>
        </OptionsSelectButtonView>
      ) : (
        <OptionsButtonView>
          <OptionTitle>{props.title}</OptionTitle>
        </OptionsButtonView>
      )}
    </MyTouchableWithoutFeedback>
  );
};
