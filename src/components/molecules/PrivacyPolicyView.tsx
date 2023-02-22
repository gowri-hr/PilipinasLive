import React, {FC, useState} from 'react';
import {Text} from 'react-native';
import {
  PrivacyPolicyView,
  CheckTouchableOpacity,
  CheckText,
} from '../../pages/SignUp/Styles';
import UnCheckbox from '../../assets/images/UnCheckBox.svg';
import Checkbox from '../../assets/images/Checkbox.svg';

interface PrivacyPolicyProps {
  onPress: () => void;
  check: boolean;
}
export const PrivacyPolicy: FC<PrivacyPolicyProps> = props => {

  return (
    <PrivacyPolicyView>
      <CheckTouchableOpacity onPress={props.onPress}>
        {!props.check ? <UnCheckbox /> : <Checkbox />}
      </CheckTouchableOpacity>
      <CheckText marginLeft={10} color="#FFFFFF" underline={false}>
        I agree to Pilipina’s{' '}
        <CheckText marginLeft={0} color="#EC2027" underline={true}>
          Terms of Use
        </CheckText>{' '}
        and have read and understood the Cignal TV Inc’s{' '}
        <CheckText marginLeft={0} color="#EC2027" underline={true}>
          Privacy Policy
        </CheckText>
      </CheckText>
    </PrivacyPolicyView>
  );
};

export default PrivacyPolicy;
