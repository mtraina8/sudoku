#! /usr/bin/env node
import mainMenu from './ui/main-menu'
import App from './models/App'

const client = async () => {
  const app = App.instance;
  // clear terminal screen
  while (app.running) {
    await mainMenu()
  }
  process.exit()
}

client()