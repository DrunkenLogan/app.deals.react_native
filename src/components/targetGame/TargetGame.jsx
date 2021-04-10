import React, { useState } from 'react';

// Native Componentes Import
import { StyleSheet, View } from 'react-native';

// Custom Components Import
import Game from './Game';

export default function App() {
  const [gameId, setGameId] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');

  return (
    <View style={styles.container}>
      <Game key={gameId} difficulty={difficulty} changeDifficulty={setDifficulty} randomNumberCount={6} resetGame={() => setGameId(prevId => prevId + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
});
