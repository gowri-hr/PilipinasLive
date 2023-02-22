import React, {FC, useState} from 'react';
import {Text} from 'react-native';
import {
  PrivacyPolicyView,
  CheckTouchableOpacity,
  CheckText,
  CheckText1,
  CheckText2,
  CheckText3,
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
      <CheckText1>
        I agree to Pilipina’s <CheckText2>Terms of Use</CheckText2> and have
        read and understood the Cignal TV Inc’s{' '}
        <CheckText3>Privacy Policy</CheckText3>
      </CheckText1>
    </PrivacyPolicyView>
  );
};

export default PrivacyPolicy;
