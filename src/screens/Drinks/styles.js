import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../style';

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
    flexDirection: 'row',
    padding: 15,
  },
  flatlistImage: {
    marginRight: 20,
  },
  image: {
    borderRadius: metrics.baseRadius,
    height: 70,
    width: 70,
  },
  text: {
    color: '#FFF',
    fontFamily: general.fontMedium,
    fontSize: 12,
  },
});
