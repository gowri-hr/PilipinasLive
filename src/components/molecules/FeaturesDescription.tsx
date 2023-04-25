import React, {FC} from 'react';
import {ErrorDescriptionText, ErrorTextMainView} from '../atoms/Inputs/Styles';
import {
  FeatureDetailText,
  FeatureSubView,
  FeatureTitleText,
  FeatureView,
} from '../../pages/PremiumDescription/Styles';
import LiveGame from '../../assets/images/LiveGames.svg';
import String from '../../assets/strings/Strings';

interface Features {
  title: string;
  Detail: string;
}

export const FeatureDetailsView: FC<Features> = props => {
  return (
    <FeatureView>
      <LiveGame />
      <FeatureSubView>
        <FeatureTitleText>{String.FeatureTitle1}</FeatureTitleText>
        <FeatureDetailText>{String.FeatureDetail1}</FeatureDetailText>
      </FeatureSubView>
    </FeatureView>
  );
};
