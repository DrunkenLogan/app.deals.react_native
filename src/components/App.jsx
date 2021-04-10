import React, { useState } from 'react';

// Native Componentes Import
import { StyleSheet, View, Text } from 'react-native';

// Custom Components Import
import Home from './home/Home';
import NavBar from './home/NavBar';
import TargetGame from './targetGame/TargetGame';
import TicTacToeGame from './ticTacToe/TicTacToeGame';

export default function App() {
  // default: Home, 1: game1, 2: game2
  const [activeView, setActiveView] = useState(0);

  const viewSwitcher = (view) => {
    switch (view) {
      case 1:
        return <TargetGame />;
      case 2:
        return <TicTacToeGame />;
      default:
        return <Home selectGame={setActiveView} />;
    }
  }

  return (
    <View style={styles.container}>
      <NavBar backToHome={setActiveView} />
      {viewSwitcher(activeView)}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
});
