import React, { Component, Fragment } from 'react';
import {
  View, FlatList, ScrollView, Text, Image,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '../../style';
import Header from '../../components/Header';
import { navigate } from '../../services/navigation';

class Details extends Component {
  state = {
    ingredients: [],
  };

  componentDidMount() {
    this.dataMap();
  }

  dataMap = () => {
    const {
      details: { data },
    } = this.props;

    const steps = [];
    const ingredients = [];
    const measures = [];

    _.map(data, (detail, index) => {
      if (index.startsWith('strIngredient') && !_.isEmpty(detail)) {
        ingredients.push(detail);
      }

      if (index.startsWith('strMeasure') && !_.isEmpty(detail) && detail.split('').length > 1) {
        measures.push(detail);
      }
    });

    _.map(ingredients, (ingredient, index) => {
      if (!_.isEmpty(measures[index])) {
        steps.push(`${ingredient} - ${measures[index]}`);
      } else {
        steps.push(ingredient);
      }
    });

    this.setState({
      ingredients: steps,
    });
  };

  renderItem = ({ item }) => (
    <View>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  render() {
    const {
      details: { data },
      navigation,
    } = this.props;
    const { ingredients } = this.state;

    return (
      <Fragment>
        <Header
          control
          onPress={() => navigation.pop()}
          onFocus={() => navigate('Drinks', { search: true })}
          title="Details"
          description={data.strDrink}
        />
        <LinearGradient
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={colors.gradient}
        >
          <View style={styles.header}>
            <View style={styles.imageView}>
              <Image style={styles.image} source={{ uri: data.strDrinkThumb }} />
            </View>
            <View style={styles.descriptionView}>
              <View style={styles.textView}>
                <Text style={styles.title}>Category: </Text>
                <Text style={styles.text}>{data.strCategory}</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.title}>Alcoholic: </Text>
                <Text style={styles.text}>{data.strAlcoholic}</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.title}>Glass: </Text>
                <Text style={styles.text}>{data.strGlass}</Text>
              </View>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
            <Text style={styles.subtitle}>Instructions: </Text>
            <Text style={styles.instructions}>{data.strInstructions}</Text>
            <Text style={styles.subtitle}>Ingredients: </Text>
            <FlatList
              style={styles.ingredients}
              keyExtractor={(item, index) => String(index)}
              data={ingredients}
              renderItem={this.renderItem}
            />
          </ScrollView>
        </LinearGradient>
      </Fragment>
    );
  }
}

Details.propTypes = {
  details: PropTypes.shape({
    data: PropTypes.shape({
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
      strCategory: PropTypes.string,
      strAlcoholic: PropTypes.string,
      strGlass: PropTypes.string,
      strInstructions: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  details: state.details,
});

export default connect(mapStateToProps)(Details);
