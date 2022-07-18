export default class App {
  public static instance: App = new App()
  private _running = true

  get running(): boolean {
    return this._running
  }

  quit(): void {
    this._running = false
  }
}