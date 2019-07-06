import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { colors } from '../../style';

const Header = ({
  title, description, onChangeText, onFocus, autoFocus, onPress, control,
}) => (
  <View style={styles.container}>
    <View style={styles.controls}>
      {control && (
        <Icon
          style={styles.icon}
          onPress={onPress}
          name="chevron-left"
          size={40}
          color={colors.third}
        />
      )}
      <TextInput
        autoFocus={autoFocus}
        style={styles.search}
        onChangeText={onChangeText}
        onFocus={onFocus}
        placeholder="Search"
      />
    </View>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  onPress: PropTypes.func,
  autoFocus: PropTypes.bool,
  control: PropTypes.bool,
};

Header.defaultProps = {
  description: null,
  onFocus: () => {},
  onChangeText: () => {},
  onPress: () => {},
  autoFocus: false,
  control: false,
};

export default Header;
