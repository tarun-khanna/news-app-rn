import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

import { colors } from '../utilities/constants'
import Typography from './typography'

const Badge = ({ title, customStyle }) => {
  return (
    <View style={[styles.container, customStyle]}>
      <Typography numberOfLines={1} color="windsor" type="BOLD" size={13} customStyle={styles.title}>{title}</Typography>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: colors.white,
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: 1.4
  }
});

Badge.propTypes = {
  title: PropTypes.string,
  customStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
}

export default Badge;