import React, {FC} from 'react';
import {
  PrivacyPolicyView,
  CheckTouchableOpacity,
  CheckText1,
  CheckText2,
  CheckText3,
} from '../../pages/SignUp/Styles';
import UnCheckbox from '../../assets/images/UnCheckBox.svg';
import Checkbox from '../../assets/images/Checkbox.svg';
import String from '../../assets/strings/Strings';

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
        {String.CheckText1}<CheckText2>{String.CheckText2}</CheckText2>{String.CheckText4}{' '}
        <CheckText3>{String.CheckText3}</CheckText3>
      </CheckText1>
    </PrivacyPolicyView>
  );
};

export default PrivacyPolicy;
