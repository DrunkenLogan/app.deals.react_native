import React from 'react';

// Native Componentes Import
import { StyleSheet, View, Text } from 'react-native';

// Component import
import Square from './Square';

function GameBoard({ data }) {
  return (
    <View style={styles.board}>
      {data.gameScore.map((el, i) =>
        <Square
          key={i}
          mark={el}
          handleMark={() => data.handleMark(i)}
        />)
      }
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white'
  },
});

export default GameBoard;