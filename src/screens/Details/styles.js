import { StyleSheet } from 'react-native';
import { metrics, general, colors } from '../../style';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding,
  },
  flatlist: {},
  header: {
    backgroundColor: colors.secondary,
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: metrics.baseMargin,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  imageView: {
    marginRight: metrics.baseMargin,
  },
  image: {
    borderRadius: metrics.baseRadius,
    height: 80,
    width: 80,
  },
  textView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: colors.third,
    fontFamily: general.fontBold,
    fontWeight: 'bold',
    marginRight: 10,
  },
  subtitle: {
    color: '#FFF',
    fontFamily: general.fontBold,
    fontWeight: 'bold',
    marginRight: 10,
  },
  text: {
    color: '#FFF',
    fontFamily: general.fontLight,
  },
  content: {
    backgroundColor: colors.secondary,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  instructions: {
    color: '#FFF',
    fontFamily: general.fontRegular,
    marginBottom: 20,
    marginTop: 10,
  },
  ingredients: {
    marginBottom: 20,
    marginTop: 10,
  },
});
