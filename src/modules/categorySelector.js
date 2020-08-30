import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Typography from './typography'
import { NEWS_CATEGORIES, ROOT_HORIZONTAL_PADDING } from '../utilities/constants'
import CustomTouchable from './customTouchable';

const CategorySelector = ({
  activeCategory,
  customStyle,
  onPress
}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[styles.containerScroll, customStyle]}>
      {NEWS_CATEGORIES.map(category => (
        <React.Fragment key={category}>
          <CustomTouchable onPress={() => onPress(category)}>
            <Typography customStyle={styles.categoryStyles} color={activeCategory === category ? 'black' : 'pastel_grey'} type="BOLD" size={16}>
              {category}
            </Typography>
          </CustomTouchable>
        </React.Fragment>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerScroll: {
    paddingHorizontal: ROOT_HORIZONTAL_PADDING,
  },
  categoryStyles: {
    marginRight: 12,
  }
});

CategorySelector.propTypes = {
  activeCategory: PropTypes.string,
  customStyle: PropTypes.object,
  onPress: PropTypes.func
}

export default CategorySelector;
