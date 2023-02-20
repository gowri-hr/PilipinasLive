import React, {FC} from 'react';
import {
  MyTextInput,
  ErrorText,
  MainView,
  InputTouchableWithoutFeedback,
} from './InputStyles';
import EyeClose from '../../../assets/images/eyeClose.svg';

interface UserInput {
  inputPlaceholder: string;
  keyboardValue: any;
  secureText: boolean;
  field: {
    name: string;
    onBlur: (value: string) => {};
    onChange(name: string): (value: string) => {};
    value: string;
  };
  form: {
    errors: {[key: string]: string};
    touched: {[key: string]: boolean};
    setFieldTouched: (value: string) => void;
  };
  eyeIconstyle?: {};
  EyeImage?: boolean;
}
export const Input: FC<UserInput> = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <MyTextInput
        placeholder={props.inputPlaceholder}
        placeholderTextColor={'rgba(51, 51, 51, 0.4)'}
        keyboardType={props.keyboardValue}
        value={value}
        secureTextEntry={props.secureText}
        onChangeText={(text: string) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <ErrorText>{errors[name]}</ErrorText>}
    </>
  );
};

export const InputWithImage: FC<UserInput> = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  return (
    <MainView>
      <MyTextInput
        placeholder={props.inputPlaceholder}
        placeholderTextColor={'rgba(51, 51, 51, 0.4)'}
        keyboardType={props.keyboardValue}
        value={value}
        secureTextEntry={props.secureText}
        onChangeText={(text: string) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {props.EyeImage ? (
        <InputTouchableWithoutFeedback>
          <EyeClose />
        </InputTouchableWithoutFeedback>
      ) : null}

      {hasError && <ErrorText>{errors[name]}</ErrorText>}
    </MainView>
  );
};
