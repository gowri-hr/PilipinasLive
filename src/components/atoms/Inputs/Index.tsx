import React, {FC} from 'react';
import {
  MyTextInput,
  MainView,
  InputTouchableWithoutFeedback,
  MyTextInputError,
  OtpTextInput,
} from './Styles';
import EyeClose from '../../../assets/images/visibility_off.svg';
import EyeOn from '../../../assets/images/visibility_on.svg';
import {ErrorText} from '../../molecules/ErrorTextView';

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
  style?: {};
  onPress?: () => void;
  secure?: boolean;
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
        style={hasError && {borderColor: '#EC2027', borderWidth: 2}}
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
      {hasError && <ErrorText error={errors[name]} />}
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
    <>
      <MainView>
        <MyTextInput
          style={hasError && {borderColor: '#EC2027', borderWidth: 2}}
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
          <InputTouchableWithoutFeedback onPress={props.onPress}>
            {props.secure ? <EyeClose /> : <EyeOn />}
          </InputTouchableWithoutFeedback>
        ) : null}
      </MainView>
      {hasError && <ErrorText error={errors[name]} />}
    </>
  );
};

interface OtpUserInput {
  keyboardValue: any;
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
  style?: {};
}
export const OtpInput: FC<OtpUserInput> = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <OtpTextInput
      style={hasError && {borderColor: '#EC2027', borderWidth: 2}}
      placeholderTextColor={'rgba(51, 51, 51, 0.4)'}
      keyboardType="numeric"
      maxLength={1}
      value={value}
      onChangeText={(text: string) => onChange(name)(text)}
      onBlur={() => {
        setFieldTouched(name);
        onBlur(name);
      }}
      {...inputProps}
    />
  );
};
