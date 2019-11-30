import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

const App = () => {
  return (
    <>
      <Text style={styles.sectionDescription}>
        Edit <Text style={styles.highlight}>App.js</Text>.
      </Text>
    </>
  );
};

export default App;
