import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import DrinksActions from '../../store/ducks/drinks';

class Drinks extends Component {
  componentDidMount() {}

  categorySelected = ({ strCategory }) => {
    const { drinksRequest } = this.props;

    drinksRequest(strCategory);
  };

  renderItem = ({ item }) => {
    console.tron.log(item);
    return (
      <TouchableOpacity onPress={() => this.categorySelected(item)} style={styles.flatlist}>
        <Text style={styles.text}>{item.strDrink}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { data } = this.props.drinks;

    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => String(index)}
          data={data[0]}
          renderItem={this.renderItem}
          numColumns={2}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(DrinksActions, dispatch);

const mapStateToProps = state => ({
  drinks: state.drinks,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drinks);
