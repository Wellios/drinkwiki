import React, { Component, Fragment } from 'react';
import {
  View, Text, FlatList, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { DetailsTypes } from '../../store/ducks/details';
import { DrinksTypes } from '../../store/ducks/drinks';
import styles from './styles';
import Header from '../../components/Header';
import { colors } from '../../style';

class Drinks extends Component {
  search = (text) => {
    const { searchRequest } = this.props;

    if (!_.isEmpty(text)) {
      searchRequest(text);
    }
  };

  drinkSelected = ({ idDrink }) => {
    const { detailsRequest } = this.props;
    detailsRequest(idDrink);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.drinkSelected(item)} style={styles.flatlist}>
      <View style={styles.flatlistImage}>
        <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />
      </View>
      <Text style={styles.text}>{item.strDrink}</Text>
    </TouchableOpacity>
  );

  render() {
    const {
      drinks: { data, category },
      navigation,
    } = this.props;

    const search = navigation.getParam('search');

    let description = category;
    description = !_.isEmpty(description) ? description.replace(/[_]/g, ' ') : null;

    return (
      <Fragment>
        <Header
          control
          onPress={() => navigation.pop()}
          autoFocus={search}
          onChangeText={text => this.search(text)}
          title="Drinks"
          description={description}
        />
        <LinearGradient
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={colors.gradient}
        >
          <View style={styles.flatlistView}>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={item => String(item.idDrink)}
              data={data[0]}
              renderItem={this.renderItem}
            />
          </View>
        </LinearGradient>
      </Fragment>
    );
  }
}

Drinks.propTypes = {
  drinks: PropTypes.shape({
    data: PropTypes.array,
    category: PropTypes.string,
  }).isRequired,
  searchRequest: PropTypes.func.isRequired,
  detailsRequest: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    pop: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  detailsRequest: drink => dispatch({ type: DetailsTypes.DETAILS_REQUEST, drink }),
  searchRequest: drink => dispatch({ type: DrinksTypes.SEARCH_REQUEST, drink }),
});

const mapStateToProps = state => ({
  drinks: state.drinks,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drinks);
