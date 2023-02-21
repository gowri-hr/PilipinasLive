import React, {FC} from 'react';
import {Text} from 'react-native';
import {
  PrivacyPolicyView,
  CheckTouchableOpacity,
  CheckText,
} from '../../screens/SignUp/SignUpstyles';
import UnCheckbox from '../../assets/images/UnCheckBox.svg';

export const PrivacyPolicy: FC<{}> = props => {
  return (
    <PrivacyPolicyView>
      <CheckTouchableOpacity>
        <UnCheckbox />
      </CheckTouchableOpacity>
      <CheckText marginLeft={10} color='#FFFFFF' underline={false}>I agree to Pilipina’s <CheckText marginLeft={0} color='#EC2027' underline={true}>Terms of Use</CheckText> and have read and understood the Cignal TV Inc’s <CheckText marginLeft={0} color='#EC2027' underline={true}>Privacy Policy</CheckText></CheckText>
    </PrivacyPolicyView>
  );
};

export default PrivacyPolicy;
