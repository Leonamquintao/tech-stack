import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

import Header from './components/common/Header';
import LibraryList from './components/LibraryList';

export default class App extends Component<{}> {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Technologies Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
