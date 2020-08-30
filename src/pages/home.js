import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import axios from 'axios';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import CategorySelector from '../modules/categorySelector';
import Typography from '../modules/typography';
import HeadlineCard from '../modules/headlineCard';
import ListCard from '../modules/listCard';

import { ROOT_HORIZONTAL_PADDING, NEWS_CATEGORIES, API_TOKEN } from '../utilities/constants';
import { HeadlineCardPlaceholder, ListCardPlaceholder } from '../utilities/placeholders';

const Home = ({
  navigation
}) => {
  const [activeCategory, setActiveCategory] = useState(NEWS_CATEGORIES[0]);
  const [headlines, setHeadlines] = useState([]);
  const [headlinesLoading, setHeadlinesLoading] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [newsListLoading, setNewsListLoading] = useState(false);

  const fireApis = (category) => {
    setHeadlinesLoading(true);
    setNewsListLoading(true);
    axios({
      method: 'get',
      url: `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_TOKEN}&category=${category}`
    })
      .then(res => res.data)
      .then(({ articles }) => { setHeadlines(articles); setHeadlinesLoading(false) })
      .catch(err => console.log('err=', err));

    axios({
      method: 'get',
      url: `https://newsapi.org/v2/everything?apiKey=${API_TOKEN}&q=${category}`
    })
      .then(res => res.data)
      .then(({ articles }) => { setNewsList(articles); setNewsListLoading(false) })
      .catch(err => console.log('err=', err));
  }

  useEffect(() => {
    fireApis(activeCategory.toLowerCase())
  }, [activeCategory])

  const handlePress = (news) => {
    navigation.navigate('Details', news);
  }
  return (
    <>
      <CategorySelector
        customStyle={styles.categoriesWrapper}
        activeCategory={activeCategory}
        onPress={(category) => setActiveCategory(category)}
      />
      <ScrollView>
        <Typography type="BOLD" color="alizarin" size={24} customStyle={[styles.horizontalPadding, styles.listHeading]}>Headlines</Typography>

        {
          headlinesLoading ? (
            <HeadlineCardPlaceholder />
          ) : (
              <ScrollView
                contentContainerStyle={styles.featuredScroll}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {headlines.map((headline, index) => (
                  <HeadlineCard
                    key={headline.title + index}
                    headline={headline}
                    onPress={() => handlePress(headline)}
                  />
                ))}
              </ScrollView>
            )
        }
        <View style={[styles.horizontalPadding, styles.contentContainer]}>
          <Typography type="BOLD" size={24} customStyle={styles.listHeading}>Top Stories</Typography>
          {
            newsListLoading ? (
              <ListCardPlaceholder />
            ) : newsList.map((news, index) => (
              <ListCard
                key={news.title + index}
                news={news}
                onPress={() => handlePress(news)}
                customStyle={styles.listCard}
              />
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}

export default Home;

const styles = StyleSheet.create({
  categoriesWrapper: {
    paddingBottom: 12,
    paddingTop: getStatusBarHeight() + 10,
  },
  featuredScroll: {
    paddingRight: ROOT_HORIZONTAL_PADDING
  },
  horizontalPadding: {
    paddingHorizontal: ROOT_HORIZONTAL_PADDING,
  },
  contentContainer: {
    paddingTop: 20
  },
  listHeading: {
    marginBottom: 16
  },
  listCard: {
    marginBottom: 16
  },
});
