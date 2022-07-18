import Board from '../models/Board'
import DataInterpreter from '../models/DataInterpreter'
import inquirer, { ListQuestion } from 'inquirer'
import mainMenu from './main-menu';
import { easyGameData, hardGameData } from '../utils/game-data';
import { line } from '../utils';
import { playGame } from './play-game';

const gameList = (): ListQuestion[] => ([
  {
    name: 'puzzleSelection',
    type: 'list',
    message: 'Game Selection',
    choices: [line, 'easy', 'hard', 'back']
  }
]);

export const selectGame = async () => {
  let game, board;
  const { puzzleSelection } = await inquirer.prompt<{ puzzleSelection: string }>(gameList());
  switch (puzzleSelection) {
    case 'easy':
      game = new DataInterpreter(easyGameData)
      board = new Board(game.rows, game.columns, game.squares)
      await playGame(board)
      break;
    case 'hard':
      game = new DataInterpreter(hardGameData)
      board = new Board(game.rows, game.columns, game.squares)
      await playGame(board)
      break;
    case 'back':
      mainMenu()
      break;
    default:
      break;
  }
}