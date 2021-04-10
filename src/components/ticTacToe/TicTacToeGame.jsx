import React, { useReducer, useState, useEffect } from 'react';

// Native Componentes Import
import { StyleSheet, View, Alert, Text } from 'react-native';

// Components Import
import GameBoard from './GameBoard';
import StatusBoard from './StatusBoard';

// Styles
import { fonts } from '../../styles/base';

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const gameBoardValues = ["", "", "", "", "", "", "", "", ""];

function TicTacToeFame() {
  // Internal state
  const [nextPlayer, setNextPlayer] = useReducer(
    (lastPlayer, newPlayer) => newPlayer ? newPlayer : lastPlayer === 'X' ? 'O' : 'X',
    'X'
  );
  const [gameStatus, setGameStatus] = useState(1); // 1: active, 2: winner, 3: tie
  const [gameScore, setGameScore] = useState(gameBoardValues);

  useEffect(() => {
    // Check game status
    const markedSquares = gameScore.filter(el => el !== '').length;

    // If there are more than three marks, check if there is a winner
    if (markedSquares > 2) {
      let roundWon = false;
      for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameScore[winCondition[0]];
        let b = gameScore[winCondition[1]];
        let c = gameScore[winCondition[2]];
        if (a === '' || b === '' || c === '') {
          continue;
        }
        if (a === b && b === c) {
          roundWon = true;
          break
        }
      }

      if (roundWon) {
        // Pause game
        setGameStatus(2);
        createTwoButtonAlert(`${nextPlayer} won the game!`)
        return;
      }

      // If there are no more empty squares game is a tie
      if (markedSquares === gameScore.length) {
        setGameStatus(3);
        createTwoButtonAlert('Game is a Tie!')
        return;
      }
    }

    // if not the first render Set next player
    if (markedSquares > 0) {
      setNextPlayer();
    }
  }, [gameScore])

  const handleMark = (n) => {
    // If already marked, return
    if (gameScore[n]) return;

    // If Game is won, return
    if (gameStatus === 2) return;

    // Update the game score
    const newGameScore = [...gameScore];
    newGameScore[n] = nextPlayer;
    setGameScore(newGameScore);
  }

  const resetGame = () => {
    setGameStatus(1);
    setGameScore(gameBoardValues);
    setNextPlayer('X');
  }

  const createTwoButtonAlert = (msg) =>
    Alert.alert(
      `Game Over`,
      msg,
      [
        { text: "OK" }
      ]
    )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-tac-toe</Text>
      <Text style={styles.reset} onPress={resetGame}>Reset</Text>
      <View style={styles.boardContainer}>
        <StatusBoard data={{ nextPlayer, gameStatus }} />
        <GameBoard data={{ gameScore, handleMark }} />
      </View>
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 50,
    padding: 50
  },

  title: {
    fontSize: fonts.lg,
    fontWeight: 'bold'
  },

  reset: {
    marginVertical: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#fff',
    backgroundColor: '#1784df87',
    fontSize: fonts.sm,
    borderRadius: 20,
    overflow: 'hidden',
    textTransform: 'uppercase',
    /* Shadow */
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    /* End Shadow */
  }
});

export default TicTacToeFame