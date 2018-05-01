import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

//actions
import * as actions from '../actions';

//components
import Card from './common/Card';
import CardSection from './common/CardSection';

class ListItem extends Component <{}> {
  render () {

    const { titleStyle } = styles;
    const { id, title, description } = this.props.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
            <Text>{description}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

//the first argument of connect should be 'mapStateToProps', but since we are
//not using it, the 'null' must be passed instead of it.
export default connect(null, actions)(ListItem);

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});
