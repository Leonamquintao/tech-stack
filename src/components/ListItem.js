import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

//actions
import * as actions from '../actions';

//components
import Card from './common/Card';
import CardSection from './common/CardSection';

class ListItem extends Component <{}> {

  renderDescription() {

    if(this.props.item.id === this.props.selectedLibraryId) {
      return (
        <Text>{ this.props.item.description }</Text>
      );
    }
  }

  render () {

    const { titleStyle } = styles;
    const { id, title, description } = this.props.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          { this.renderDescription() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

//the first argument of connect should be 'mapStateToProps', but since we are
//not using it, the 'null' must be passed instead of it.
export default connect(mapStateToProps, actions)(ListItem);

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});
