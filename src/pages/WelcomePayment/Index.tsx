import React, {FC} from 'react';
import {Container, MyAwareScrollView, MySafeAreaView} from '../Login/Styles';
import {Headers} from '../../components/molecules/Header';
import Poster1 from '../../assets/images/PilipinasLive_Poster1.svg';
import { PaymentScreenProps } from '../../utils/LoginUserNavigation';
import {WelcomeText} from '../../components/molecules/WelcomView';
import String from '../../assets/strings/Strings';
import {
  ButtonPaymentView,
  CostText,
  DescritpionText,
  DescritpionView,
  PaymentSubText,
  PaymentText,
  PolicyText,
  PolicyView,
  WelcomeTextPaymentView,
} from './Styles';
import {Buttons, OutlineButton} from '../../components/atoms/Buttons/Index';

const Payment: FC<PaymentScreenProps> = props => {

  const OnPressbackWelcomePayment = () => {
    props.navigation.push('Login')
  }

  const handleFreeTrial = () => {
    props.navigation.push('Login')
  }

  const handleFreeVersion = () => {
    props.navigation.push('Login')
  }

  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <Headers
            justify={false}
            backBtn={true}
            onPress={OnPressbackWelcomePayment}
          />
          <Poster1 />
          <WelcomeTextPaymentView>
            <PaymentText>{String.PaymentText}</PaymentText>
            <PaymentSubText>{String.PaymentSubText}</PaymentSubText>
          </WelcomeTextPaymentView>
          <DescritpionView>
            <DescritpionText>{String.PaymentDescriptionText}</DescritpionText>
          </DescritpionView>
          <CostText>{String.CostText}</CostText>
          <ButtonPaymentView>
            <Buttons
              title={String.StartYourTrailText}
              onPress={handleFreeTrial}
              disabled={false}
            />
            <OutlineButton
              title={String.LiteVersionText}
              onPress={handleFreeVersion}
              disabled={false}
            />
          </ButtonPaymentView>
          <PolicyView>
            <PolicyText>
              {String.Privacypolicy}  {String.Terms_condition}
            </PolicyText>
          </PolicyView>
        </MyAwareScrollView>
      </Container>
    </MySafeAreaView>
  );
};

export default Payment;
