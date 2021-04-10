import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Native Components
import { StyleSheet, Text, View, Button } from 'react-native';

// Custom Components
import RandomNumber from './RandomNumber';
import DifficultyMenu from './DifficultyMenu';

// Custom Hooks
import useInterval from '../../hooks/useInterval';

// Util Functions
import { shuffle, proper } from '../../util/util';

// Styles
import { fonts } from '../../styles/base';

export default function Game({ randomNumberCount, resetGame, difficulty, changeDifficulty }) {
    // Internal State
    const [selectedIds, setSelectedIds] = useState([]);
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [remainingTime, setRemainingTime] = useState(0);
    const [target, setTarget] = useState(0);

    useEffect(() => {
        // Create an array of of as many random numbers as the random number count passed
        setRandomNumbers([...Array(randomNumberCount)].map(() => 1 + Math.floor(10 * Math.random())))
        setSelectedIds([]);
        // Set difficulty
        if (difficulty === 'easy') setRemainingTime(15);
        if (difficulty === 'medium') setRemainingTime(10);
        if (difficulty === 'hard') setRemainingTime(5);
    }, []);

    // Start countdown
    useInterval(() => {
        // Pause timer when game is won or lost
        if (gameStatus() === 'won' || gameStatus() === 'lost') return;

        // Pause timer when it hits 0
        if (remainingTime === 0) return;
        setRemainingTime(remainingTime - 1);
    }, 1000);

    // Calculate the target number sum from the random numbers
    useEffect(() => {
        setTarget(shuffle([...randomNumbers])
            .slice(0, randomNumberCount - 2)
            .reduce((acc, curr) => acc + curr, 0));
    }, [target, randomNumbers])

    // Check if an element with provided Id has already been selected
    const isDisabled = (num) => selectedIds.indexOf(num) >= 0;

    // Add Ids of selected numbers to state
    const updateSelectedIds = (i) => setSelectedIds([...selectedIds, i]);

    const gameStatus = () => {
        const selectedNumbersSum = selectedIds.reduce((acc, curr) => acc + randomNumbers[curr], 0);
        if (remainingTime === 0) return 'lost';
        if (selectedNumbersSum < target) return 'playing';
        if (selectedNumbersSum === target) return 'won';
        if (selectedNumbersSum > target) return 'lost';
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.target, styles[`status_${gameStatus()}`]]}>{target}</Text>
            <View style={styles.gameInfoContainer}>
                <Text style={styles.status}>{proper(gameStatus())}</Text>
            </View>
            <View style={styles.randomNumbersContainer}>
                {randomNumbers.map((rn, i) =>
                    <RandomNumber
                        number={rn}
                        id={i}
                        key={i}
                        isDisabled={isDisabled(i) || gameStatus() !== 'playing'}
                        onPress={updateSelectedIds}
                    />
                )}
            </View>
            <Text style={styles.timer}>Time Left: {remainingTime}</Text>
            {gameStatus() !== 'playing' &&
                <Button
                    onPress={resetGame}
                    title="Play Again"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            }
            <DifficultyMenu difficulty={difficulty} changeDifficulty={changeDifficulty} />
        </View>
    );
}

// Proptypes
Game.propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    target: {
        fontSize: fonts.xlg,
        marginHorizontal: 80,
        marginVertical: 25,
        textAlign: 'center',
        borderRadius: 20,
        overflow: 'hidden'
    },

    randomNumbersContainer: {
        marginVertical: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },

    gameInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 80,
        textAlign: 'center'
    },

    status: {
        fontSize: fonts.md,
    },

    timer: {
        textAlign: 'center',
        fontSize: fonts.lg
    },

    status_playing: {
        backgroundColor: '#aaa'
    },

    status_won: {
        backgroundColor: 'green',
    },

    status_lost: {
        backgroundColor: 'red',
    },
});
