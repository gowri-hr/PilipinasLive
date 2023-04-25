import React, {FC} from 'react';
import String from '../../../assets/strings/Strings';
import {OutlineButton} from '../../../components/atoms/Buttons/Index';
import {ColdStartScreenProps} from '../../../utils/LoginUserNavigation';
import {Container, MyAwareScrollView, MySafeAreaView} from '../../Login/Styles';
import {ColdStartButtonView, SubTitleText, TitleText} from './Styles';

const ColdStart: FC<ColdStartScreenProps> = props => {
  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <TitleText>{String.ColdStart}</TitleText>
          <SubTitleText>{String.ColdStart2}</SubTitleText>
          <ColdStartButtonView>
            <OutlineButton
              title="CONTINUE"
              onPress={() => console.log('jhasg')}
              disabled={false}
            />
          </ColdStartButtonView>
        </MyAwareScrollView>
      </Container>
    </MySafeAreaView>
  );
};

export default ColdStart;
