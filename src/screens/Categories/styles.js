import { StyleSheet } from 'react-native';
import { colors, general } from '../../style';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flatlistView: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
  },
  flatlist: {
    alignItems: 'center',
    borderBottomColor: colors.whiteTransparent,
    borderBottomWidth: 0.3,
    justifyContent: 'center',
    padding: 15,
  },
  flatlistImage: {},
  image: {
    height: 70,
    width: 70,
  },
  text: {
    color: '#FFF',
    fontFamily: general.fontLight,
    fontSize: 15,
  },
});
