import React from 'react';

// Native Componentes Import
import { StyleSheet, View, Text } from 'react-native';

// Util Functions
import { proper } from '../../util/util';

// Styles
import { fonts } from '../../styles/base';

function StatusBoard({ data }) {

  const Item = ({ text }) => <Text style={styles.info}>{proper(text)}</Text>

  const printStatus = () => {
    switch (data.gameStatus) {
      case 1:
        return <Item text={`Next Player: ${data.nextPlayer}`} />;
      case 2:
        return <Item text={`Winner: ${data.nextPlayer}`} />;
      case 3:
        return <Item text="Game is a Tie" />
    }
  };

  return (
    <View style={styles.status}>
      <Text style={styles.title}>Status Board</Text>
      {printStatus()}
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  status: {
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#eee5e9',
    alignSelf: "center",
    marginBottom: 30
  },

  title: {
    fontSize: fonts.md,
    fontWeight: 'bold'
  },

  info: {
    fontSize: fonts.sm,
  }
});

export default StatusBoard;