import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

//actions
import * as actions from '../actions';

//components
import Card from './common/Card';
import CardSection from './common/CardSection';

class ListItem extends Component <{}> {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {

    const { expanded, item } = this.props;
    const { descStyle } = styles;

    if(expanded) {
      return (
        <CardSection>
          <Text style={descStyle}>
            { item.description }
          </Text>
        </CardSection>
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.item.id;
  return { expanded: expanded };
};

//the first argument of connect should be 'mapStateToProps', but since we are
//not using it, the 'null' must be passed instead of it.
export default connect(mapStateToProps, actions)(ListItem);

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descStyle: {
    flex: 1,
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10
  }
});
