import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { IMAGE_PLACEHOLDER, SCREEN_WIDTH } from '../utilities/constants'
import CustomTouchable from './customTouchable';
import Typography from './typography';

const ListCard = ({
  news,
  onPress,
  customStyle
}) => {
  const { urlToImage, title, description } = news;
  return (
    <CustomTouchable onPress={onPress}>
      <View style={[styles.container, customStyle]}>
        <Image
          style={styles.imageStyles}
          borderRadius={10}
          source={{ uri: urlToImage || IMAGE_PLACEHOLDER }}
        />
        <View style={styles.cardBody}>
          <Typography type="MEDIUM" numberOfLines={2} customStyle={styles.title}>{title}</Typography>
          <Typography numberOfLines={2} size={14} color="dim_grey" customStyle={styles.desc}>{description}</Typography>
        </View>
      </View>
    </CustomTouchable>
  )
}

export default ListCard

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  imageStyles: {
    width: 0.25 * SCREEN_WIDTH,
    resizeMode: 'cover'
  },
  cardBody: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    paddingLeft: 12
  },
  title: {
    marginBottom: 4
  },
});
