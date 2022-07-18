import inquirer, { ListQuestion } from 'inquirer'
import App from '../models/App';
import { line, waitFor } from '../utils';
import { selectGame } from './select-game';
import clear from 'clear'

const mainMenuList = (): ListQuestion[] => ([{
  name: 'action',
  type: 'list',
  message: 'Main Menu',
  choices: [line, 'play sudoku', 'exit']
}]);

const mainMenu = async () => {
  clear()
  console.log("SUDOKU")
  await waitFor(0.5);

  const { action } = await inquirer.prompt<{ action: string }>(mainMenuList());
  switch (action) {
    case 'play sudoku':
      await selectGame()
      break;
    case 'exit':
      App.instance.quit()
      break;
    default:
      break;
  }
};

export default mainMenu