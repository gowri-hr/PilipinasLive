import styled from 'styled-components/native';
import { COLORS } from '../../../assets/colors/Colors';
import { FONT } from '../../../assets/fonts/Fonts';
import { moderateScale, scaleUnit } from '../../../utils/scaling/ScalingUnits';

export const TitleText = styled.Text`
    color: ${COLORS.White};
    font-family: ${FONT.Bold};
    font-size: 20px; 
    margin-top: ${scaleUnit(300)};
    text-align: center;
`;
export const SubTitleText = styled.Text`
    color: ${COLORS.White};
    font-family: ${FONT.Regular};
    font-size: 20px; 
    line-height: 27px;
    margin-top: ${scaleUnit(30)};
    width: ${moderateScale(250)};
    align-self: center;
    text-align: center;
`;
export const ColdStartButtonView = styled.View`
    margin-top: ${scaleUnit(200)};
    align-items: center;
`;