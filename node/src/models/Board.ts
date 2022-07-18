import Group from './Group'
import { SEPERATOR, IHash } from '../utils'

export default class Board {
  rows: Group[]
  columns: Group[]
  squares: Group[]

  constructor(rows: Group[], columns: Group[], squares: Group[]) {
    this.rows = rows
    this.columns = columns
    this.squares = squares
  }

  solved(): boolean {
//     rows.all?(&:complete?) && columns.all?(&:complete?) && squares.all?(&:complete?)
    return true
  }

  solve(): void {
//     steps = valid_steps_with_one_option
//     return unless steps.count > 0

//     steps.each do |k, values|
//       x, y = k.to_s.split(',')
//       _insert_number(x.to_i, y.to_i, values.first)
//     end
  }

  validSteps(): IHash {
  //   output = Hash.new { |h, k| h[k] = [] }
  //   (0...9).each do |x|
  //     (0...9).each do |y|
  //       next unless rows[x][y] == 0

  //       row = rows[x]
  //       column = columns[y]
  //       square = squares[_find_square_index(x, y)]
  //       (1..9).each do |value|
  //         if row.valid?(y, value) && column.valid?(x, value) && square.valid?(_find_index_from_board_coordinates(x, y), value)
  //           output['#{x},#{y}'.to_sym] << value
  //         end
  //       end
  //     end
  //   end
  //   output
    let thing: IHash = {};
    thing['11'] = [2]
    return thing;
  }

  validStepsWithOneOption(): IHash {
  //   valid_steps.select { |_,v| v.count == 1 }
    let thing: IHash = {};
    thing['11'] = [2]
    return thing;
  }

  toString(): string {
    return SEPERATOR + this.rows.join(`\n${SEPERATOR}`) + `\n${SEPERATOR}`
  }

  static findSquareIndex(x: number, y: number): number {
    return ((x / 3) * 3) + (y / 3)
  }

  static findIndexFromBoardCoordinates(x: number, y: number): number {
    return ((x % 3) * 3) + (y % 3)
  }

  private insertNumber(x: number, y: number, value: number): void {
    let row = this.rows[x];
    let column = this.columns[y]
    let squareIndex = Board.findSquareIndex(x, y)
    let square = this.squares[squareIndex]
    // return unless row.valid?(y, value) && column.valid?(x, value) && square.valid?(_find_index_from_board_coordinates(x, y), value)

    row.insert(y, value)
    column.insert(x, value)
    square.insert(squareIndex, Board.findIndexFromBoardCoordinates(x, y))
  }
}
