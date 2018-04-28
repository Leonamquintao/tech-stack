import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Card extends Component<{}> {
  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});
