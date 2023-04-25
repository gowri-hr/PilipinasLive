import React, {FC} from 'react';
import {useWindowDimensions} from 'react-native';
import String from '../../assets/strings/Strings';
import { Buttons } from '../../components/atoms/Buttons/Index';
import {FeatureDetailsView} from '../../components/molecules/FeaturesDescription';
import {Headers} from '../../components/molecules/Header';
import {PayDetailsScreenProps} from '../../utils/LoginUserNavigation';
import {Container, MyAwareScrollView, MySafeAreaView} from '../Login/Styles';
import {ButtonPaymentView, PolicyText, PolicyView} from '../WelcomePayment/Styles';
import {
  CancelText,
  FeatureContainer,
  PayDetailsPremiumText,
  PayDetailsPremiumView,
  PayDetailsSubscribeView,
  PayDetailsText,
  PayDetailsTrailText,
  PremiumCostText,
  PremiumDetailText,
  TapToPayBtnView,
} from './Styles';

const PayDetails: FC<PayDetailsScreenProps> = props => {
  const {width, height} = useWindowDimensions();
  console.log(width, height);

  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <Headers
            justify={false}
            backBtn={true}
            onPress={() => console.log('PayDetails')}
          />
          <PayDetailsSubscribeView>
            <PayDetailsText>{String.PayDetailsSubscribe}</PayDetailsText>
            <PayDetailsTrailText>{String.PayDetailsTrail}</PayDetailsTrailText>
          </PayDetailsSubscribeView>
          <PayDetailsPremiumView>
            <PayDetailsPremiumText>{String.Premium}</PayDetailsPremiumText>
            <PremiumDetailText>{String.PremiumDetails}</PremiumDetailText>
            <PremiumCostText>{String.CostText}</PremiumCostText>
          </PayDetailsPremiumView>
          <CancelText>{String.CancelText}</CancelText>
          <FeatureContainer>
            <FeatureDetailsView
              title={String.FeatureTitle1}
              Detail={String.FeatureDetail1}
            />
            <FeatureDetailsView
              title={String.FeatureTitle1}
              Detail={String.FeatureDetail1}
            />
            <FeatureDetailsView
              title={String.FeatureTitle1}
              Detail={String.FeatureDetail1}
            />
          </FeatureContainer>
          <TapToPayBtnView>
            <Buttons
              title={String.TaptoPay}
              onPress={() => console.log('dshgf')}
              disabled={false}
            />
          </TapToPayBtnView>
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

export default PayDetails;
