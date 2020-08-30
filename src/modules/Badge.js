import React from 'react'
import { View, StyleSheet } from 'react-native'

import { colors } from '../utilities/constants'
import Typography from './typography'

const Badge = ({ title, customStyle }) => {
  return (
    <View style={[styles.container, customStyle]}>
      <Typography numberOfLines={1} color="windsor" type="BOLD" size={13} customStyle={styles.title}>{title}</Typography>
    </View>
  )
}

export default Badge

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