import Group from './Group'
import { cartesian } from '../utils';

export default class DataInterpreter {
  private _rows: Group[];
  private _columns: Group[];
  private _squares: Group[];

  constructor(private _data: number[][]) {
    this._rows = this._data.map(row => new Group(row))

    this._columns = [];
    for (let x = 0; x < 9; x++) {
      let data = []
      for (let y = 0; y < 9; y++) {
        data.push(this._data[y][x])
      }
      this._columns.push(new Group(data))
    }

    this._squares= [];
    [[0,1,2], [3,4,5], [6,7,8]].forEach((a) => {
      [[0,1,2], [3,4,5], [6,7,8]].forEach((b) => {
        let data = cartesian(a, b).map((xy: number[]) => this._data[xy[0]][xy[1]])
        this._squares.push(new Group(data))
      })
    })
  }

  get rows(): Group[] {
    return this._rows
  }

  get columns(): Group[] {
    return this._columns
  }

  get squares(): Group[] {
    return this._squares
  }
}
