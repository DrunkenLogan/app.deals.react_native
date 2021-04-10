import React from 'react';

// Native Componentes Import
import { StyleSheet, View, TouchableWithoutFeedback, Text, Alert } from 'react-native';

// Styles
import { fonts } from '../../styles/base';

function Square({ mark, handleMark }) {

  return (
    <TouchableWithoutFeedback onPress={handleMark}>
      <View style={styles.square}>
        <Text style={styles.mark}>{mark}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

// Styles
const styles = StyleSheet.create({
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: '33%',
    aspectRatio: 1,
  },

  mark: {
    textAlign: 'center',
    flexDirection: 'row',
    fontSize: fonts.md
  }
});

export default Square;