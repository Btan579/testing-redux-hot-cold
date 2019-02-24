import {
    GENERATE_AURAL_UPDATE,
    generateAuralUpdate,
    RESTART_GAME,
    restartGame,
    MAKE_GUESS,
    makeGuess
} from './actions';

describe('generateAuralUpdate', () => {
    it('should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    it('should return the action', () => {
        const correctAnswer = '12';
        const action = restartGame();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});