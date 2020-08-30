import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import { colors } from '../utilities/constants';

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

CustomTouchable.propTypes = {
  rippleColor: PropTypes.string,
  useForeground: PropTypes.bool,
  borderless: PropTypes.bool
}

CustomTouchable.defaultProps = {
  rippleColor: colors.white,
  useForeground: true,
  borderless: false
};
