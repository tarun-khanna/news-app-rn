import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

import {
  colors,
  PRIMARY_FONT,
  PRIMARY_FONT_BOLD,
  PRIMARY_FONT_HEAVY,
  PRIMARY_FONT_LIGHT,
  PRIMARY_FONT_MEDIUM,
} from '../utilities/constants';

const TEXT_TYPES = {
  HEAVY: 'HEAVY',
  LIGHT: 'LIGHT',
  MEDIUM: 'MEDIUM',
  BOLD: 'BOLD',
}

const Typography = ({
  children,
  color,
  size,
  type,
  customStyle,
  ...props
}) => {
  return (
    <Text style={[styles.getTextStyles({ color, size }), styles.getFamily(type), customStyle]} {...props}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  getTextStyles: ({ color, size }) => ({
    color: colors[color] || colors.black,
    fontSize: size || 16
  }),
  getFamily: (type) => {
    switch (type) {
      case TEXT_TYPES.HEAVY: return {
        fontFamily: PRIMARY_FONT_HEAVY
      }
      case TEXT_TYPES.BOLD: return {
        fontFamily: PRIMARY_FONT_BOLD
      }
      case TEXT_TYPES.LIGHT: return {
        fontFamily: PRIMARY_FONT_LIGHT
      }
      case TEXT_TYPES.MEDIUM: return {
        fontFamily: PRIMARY_FONT_MEDIUM
      }

      default: return {
        fontFamily: PRIMARY_FONT
      }
    }
  }
});

Typography.propTypes = {
  type: PropTypes.oneOf(Object.keys(TEXT_TYPES)),
}

export default Typography;