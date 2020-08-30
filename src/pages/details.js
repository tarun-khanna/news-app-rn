import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground, Linking
} from 'react-native'
import Badge from '../modules/Badge';
import CustomTouchable from '../modules/customTouchable';
import Typography from '../modules/typography';

import { ROOT_HORIZONTAL_PADDING, SCREEN_HEIGHT } from '../utilities/constants'

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
      <ImageBackground style={styles.coverImage} source={{ uri: urlToImage }}>
        {author ? <Badge title="bbc news" customStyle={styles.badgeWrapper} /> : null}
      </ImageBackground>
      <CustomTouchable style={styles.backBtn} onPress={() => navigation.navigate('Home')}>
        <Typography size={16} color="white" type="BOLD"> Back</Typography>
      </CustomTouchable>
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
  backBtn: {
    position: 'absolute',
    top: 20,
    left: 0,
    zIndex: 100,
    padding: 20,
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
