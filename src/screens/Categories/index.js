import React, { Component } from 'react';
import {
  View, Text, FlatList, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import CategoriesActions from '../../store/ducks/categories';
import drinksRequest from '../../store/ducks/drinks';

class Categories extends Component {
  componentDidMount() {
    const { categoriesRequest } = this.props;

    console.tron.log('PROPS', this.props);
    categoriesRequest();
  }

  categorySelected = ({ strCategory }) => {
    const { drinksRequest } = this.props;

    drinksRequest(strCategory);
  };

  renderItem = ({ item }) => {
    console.tron.log(item);
    return (
      <TouchableOpacity onPress={() => this.categorySelected(item)} style={styles.flatlist}>
        <Text style={styles.text}>{item.strCategory}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { data } = this.props.categories;

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

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
