import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface Button {
  title: string;
  onPress: () => void;
  style: {};
  disabled: boolean;
}
export const Buttons: FC<Button> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress} disabled={props.disabled}>
      <View style={[styles.button, {...props.style}]}>
        <Text style={styles.buttonTitle}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 41,
    width: 358,
    backgroundColor: '#7D7D7D',
    borderWidth: 1.24725,
    borderColor: '#7D7D7D',
    borderRadius: 3.74175,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
  },
});