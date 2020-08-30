import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientOverlay = ({ children, borderRadius }) => (
  <View style={[styles.overlayStyles, borderRadius && { borderRadius }]}>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['transparent', '#000000']}
      style={[styles.overlayStyles, styles.gradientOverlay]}
    />
    <View style={[styles.overlayStyles, styles.overlayContent]}>
      {children}
    </View>
  </View>
);

export default GradientOverlay;

const styles = StyleSheet.create({
  overlayStyles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    overflow: 'hidden'
  },
  gradientOverlay: {
    opacity: 0.7
  },
  overlayContent: {
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 15
  },
});
