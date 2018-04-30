import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';


export default class ListItem extends Component <{}> {
  render () {
    //destruction styles
    const { titleStyle } = styles;

    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.item.title}</Text>
        <Text>{this.props.item.description}</Text>
      </CardSection>
    );
  }

}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});
