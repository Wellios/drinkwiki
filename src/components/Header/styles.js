import { StyleSheet } from 'react-native';
import { colors, general } from '../../style';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderBottomColor: colors.third,
    borderBottomWidth: 0.5,
    padding: 20,
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginBottom: 6,
    marginRight: 5,
  },
  search: {
    flex: 1,
    backgroundColor: '#FFF',
    borderColor: colors.third,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 20,
    height: 40,
  },
  title: {
    color: colors.third,
    fontFamily: general.fontBold,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  description: {
    color: '#FFF',
    paddingHorizontal: 5,
  },
});
