import React, { Component, Fragment } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';
import { CategoriesTypes } from '../../store/ducks/categories';
import { DrinksTypes } from '../../store/ducks/drinks';
import { colors } from '../../style';
import Header from '../../components/Header';
import { navigate } from '../../services/navigation';

class Categories extends Component {
  componentDidMount() {
    const { categoriesRequest } = this.props;

    categoriesRequest();
  }

  categorySelected = ({ strCategory }) => {
    const { drinksRequest } = this.props;
    const category = strCategory.replace(/[ ]/g, '_');

    drinksRequest(category);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.categorySelected(item)} style={styles.flatlist}>
      <Text style={styles.text}>{item.strCategory}</Text>
    </TouchableOpacity>
  );

  render() {
    const {
      categories: { data },
    } = this.props;

    return (
      <Fragment>
        <Header
          onFocus={() => navigate('Drinks', { search: true })}
          title="Categories"
          description="Choose a Category"
        />
        <LinearGradient
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={colors.gradient}
        >
          <View style={styles.flatlistView}>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => String(index)}
              data={data[0]}
              renderItem={this.renderItem}
            />
          </View>
        </LinearGradient>
      </Fragment>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
  categoriesRequest: PropTypes.func.isRequired,
  drinksRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  categoriesRequest: () => dispatch({ type: CategoriesTypes.CATEGORIES_REQUEST }),
  drinksRequest: category => dispatch({ type: DrinksTypes.DRINKS_REQUEST, category }),
  searchRequest: drink => dispatch({ type: DrinksTypes.SEARCH_REQUEST, drink }),
});

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
