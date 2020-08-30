import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground, Linking
} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Badge from '../modules/Badge';
import CustomTouchable from '../modules/customTouchable';
import Typography from '../modules/typography';
import { colors, IMAGE_PLACEHOLDER, ROOT_HORIZONTAL_PADDING, SCREEN_HEIGHT } from '../utilities/constants'

const Details = ({ navigation, route }) => {
  const {
    urlToImage,
    author,
    title,
    url,
    content
  } = route.params;

  const handleLinkClick = () => {
    Linking.openURL(url)
  }

  return (
    <ScrollView>
      <ImageBackground style={styles.coverImage} source={{ uri: urlToImage || IMAGE_PLACEHOLDER }}>
        {author ? <Badge title="bbc news" customStyle={styles.badgeWrapper} /> : null}
      </ImageBackground>
      <View style={styles.backBtnWrapper}>
        <CustomTouchable customStyle={styles.backBtn} onPress={() => navigation.navigate('Home')}>
          <View style={styles.backBtn}>
            <Typography size={16} color="white" type="BOLD">X</Typography>
          </View>
        </CustomTouchable>
      </View>
      <View style={styles.contentContainer}>
        <Typography type="BOLD" size={22} customStyle={styles.title}>
          {title}
        </Typography>
        <CustomTouchable onPress={handleLinkClick}>
          <Typography color="dark_cerulean" size={13} numberOfLines={1} customStyle={styles.linkStyles}>
            {url}
          </Typography>
        </CustomTouchable>
        <Typography color="night_rider" size={18}>
          {content}
        </Typography>
      </View>
    </ScrollView>
  )
}

export default Details;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: ROOT_HORIZONTAL_PADDING,
    paddingTop: 20
  },
  coverImage: {
    height: 0.3 * SCREEN_HEIGHT,
    position: 'relative',
  },
  backBtnWrapper: {
    position: 'absolute',
    top: getStatusBarHeight(),
    right: 20,
    zIndex: 100,
  },
  backBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.night_rider,
    borderRadius: 20
  },
  title: {
    marginBottom: 4,
  },
  linkStyles: {
    marginBottom: 12
  },
  badgeWrapper: {
    position: 'absolute',
    bottom: 16,
    left: 16
  }
});
