import reducer from './reducer';
import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE, restartGame} from './actions';

describe('Reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    decribe('restartGame', () => {
        it('should start a new game', () => {
            let state = {
                guesses: [1, 2, 3, 4],
                feedback: 'Great!',
                correctAnswer: 4
            };
            const correctAnswer = 12;
            state = reducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.correctAnswer).toEqual(correctAnswer);
            expect(state.auralStatus).toEqual('');
        });

    });

});