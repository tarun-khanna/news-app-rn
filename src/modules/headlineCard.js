import React from 'react';
import {
  View,
  ImageBackground,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  ROOT_HORIZONTAL_PADDING,
  SCREEN_WIDTH,
  DEFAULT_BACKGROUND_COLOR, IMAGE_PLACEHOLDER
} from '../utilities/constants';
import Typography from './typography';
import GradientOverlay from './gradientOverlay';
import Badge from './Badge';
import CustomTouchable from './customTouchable';

const HeadlineCard = ({
  headline,
  onPress
}) => {
  const { urlToImage, author, title, description } = headline;
  return (
    <CustomTouchable activeOpacity={0.4} onPress={onPress}>
      <View style={styles.container}>
        <GradientOverlay borderRadius={10}>
          <View>
            {author ? <Badge customStyle={styles.badgeWrapper} title={author} /> : null}
            <Typography type="BOLD" size={18} color="white" numberOfLines={2} customStyle={styles.title}>
              {title}
            </Typography>
            <Typography size={14} color="white" numberOfLines={2}>
              {description}
            </Typography>
          </View>
        </GradientOverlay>
        <ImageBackground
          source={{
            uri: urlToImage || IMAGE_PLACEHOLDER
          }}
          borderRadius={10}
          style={styles.bgImage}
        />
      </View>
    </CustomTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
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
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  badgeWrapper: {
    marginBottom: 12
  },
  title: {
    marginBottom: 4
  }
});

export default HeadlineCard;

HeadlineCard.propTypes = {
  headline: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string
  })
}
