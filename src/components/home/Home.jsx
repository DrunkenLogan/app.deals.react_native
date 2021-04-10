import React from 'react';

// Native Componentes Import
import { StyleSheet, View, Text } from 'react-native';

// Custom Components
import GamePreview from './GamePreview';

//Asset
import funSumImg from '../../assets/fun_sum.jpg';
import ticTacToeImg from '../../assets/tic_tac_toe.png';

const Home = ({ selectGame }) => {
    return (
        <View style={styles.container}>
            <GamePreview name={'Fun Sum'} img={funSumImg} onPress={() => selectGame(1)} />
            <GamePreview name={'Tic Tac Toe'} img={ticTacToeImg} onPress={() => selectGame(2)} />
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ddd'
    },
});

export default Home;
