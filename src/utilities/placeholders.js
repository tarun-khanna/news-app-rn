import React from 'react';
import { Platform, View, StyleSheet } from 'react-native'
import { Placeholder, ShineOverlay, PlaceholderLine, Fade, PlaceholderMedia } from 'rn-placeholder';

import { ROOT_HORIZONTAL_PADDING, SCREEN_WIDTH, DEFAULT_BACKGROUND_COLOR } from './constants'

export const HeadlineCardPlaceholder = () => (
  <View style={styles.headlineContainer}>
    <Placeholder Animation={ShineOverlay}>
      <PlaceholderLine style={{ width: '20%' }} />
      <PlaceholderLine style={{ width: '40%' }} />
      <PlaceholderLine style={{ width: '100%' }} />
      <PlaceholderLine style={{ width: '60%' }} />
    </Placeholder>
  </View>
);

export const ListCardPlaceholder = () => (
  <>
    {Array(2).fill('').map((el, index) => (
      <View key={index} style={styles.listCardWrapper}>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  headlineContainer: {
    paddingHorizontal: 40,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    ...Platform.select({
      ios: {
        shadowRadius: 7,
        shadowOpacity: 1,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: 0, height: 6 }
      },
      android: {
        elevation: 8
      }
    }),
    marginLeft: ROOT_HORIZONTAL_PADDING,
    width: 0.65 * SCREEN_WIDTH,
    aspectRatio: 0.8,
    maxWidth: 240,
    borderRadius: 10,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    marginBottom: 14,
    marginTop: 5
  },
  listCardWrapper: {
    marginBottom: 16
  }
});
