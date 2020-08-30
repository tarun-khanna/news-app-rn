import React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const CustomTouchable = props => {
  const { children, onPress, rippleColor, useForeground, borderless } = props;
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(rippleColor, borderless)}
        useForeground={useForeground}
      >
        <TouchableWithoutFeedback onPress={onPress}>
          {children}
        </TouchableWithoutFeedback>
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity activeOpacity={0.4} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchable;

CustomTouchable.defaultProps = {
  rippleColor: '#fff',
  useForeground: true,
  borderless: false
};
