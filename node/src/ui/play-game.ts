import inquirer, { ListQuestion } from 'inquirer'
import Board from '../models/Board';
import Group from '../models/Group';
import { line } from '../utils';


export const playGame = async (board: Board) => {
  console.log(board.toString())
};
