export default class Group {
  constructor(private _data: number[]) { }

  get data(): number[] {
    return this._data
  }

  insert(key: number, value: number) {
    this._data[key] = value
  }

  toString(): string {
    let s = this._data.map(x => x == 0 ? '_' : x).join(' | ')
    return `| ${s} |`
  }
}

// class Group
//   def to_s
//   end

//   def complete?
//     # applies to rows columns squares
//     data.sort == [1,2,3,4,5,6,7,8,9]
//   end

//   def valid?(position, value)
//     # applies to rows columns squares
//     data[position] == 0  && !data.include?(value)
//   end
// end
