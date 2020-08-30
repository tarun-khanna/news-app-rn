import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const ROOT_HORIZONTAL_PADDING = 0.06 * SCREEN_WIDTH;

export const colors = {
  alizarin: '#E42828',
  black: '#000',
  white: '#fff',
  dim_grey: '#666666',
  pastel_grey: '#CCCCCC',
  danube: '#5A8EC1',
  night_rider: '#333333',
  dark_cerulean: '#02457B',
  windsor: '#472E8B',
  solitude: '#F6F8F9'
};

export const DEFAULT_BACKGROUND_COLOR = colors.solitude;

export const PRIMARY_FONT = 'AvenirNext-Regular';
export const PRIMARY_FONT_BOLD = 'AvenirNext-Bold';
export const PRIMARY_FONT_HEAVY = 'AvenirNext-Heavy';
export const PRIMARY_FONT_MEDIUM = 'AvenirNext-Medium';
export const PRIMARY_FONT_LIGHT = 'AvenirNext-Light';

export const NEWS_CATEGORIES = [
  'General', 'Entertainment', 'Sports', 'Health', 'Business', 'Technology', 'Science'
]

export const API_TOKEN = '43a4e3dac1504d76883768ff0d31879c';

export const IMAGE_PLACEHOLDER = 'https://loadlink.ca/wp-content/uploads/2019/08/newsPlaceholder.png';