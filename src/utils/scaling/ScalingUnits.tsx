import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

function scale(size: number) {
    return width / guidelineBaseWidth * size;
}
function scaleUnit(size: number): string {
    return `${width / guidelineBaseWidth * size}px`;
}
function verticalScale(size: number) {
    return `${height / guidelineBaseHeight * size}px`;
}
function moderateScale(size: number, factor = 0.5) {
    return `${size + ( scale(size) - size ) * factor}px`;
}
function fontSize(size: number) {
    return `${size * width}px`;
}

export {scaleUnit, verticalScale, moderateScale, fontSize};