SEPERATOR = "-------------------------------------\n"

class Group
  attr_reader :data

  def initialize(data)
    @data = data
  end

  def [](key)
    data[key]
  end

  def []=(key, value)
    data[key] = value
  end

  def to_s
    # specific to rows
    s = data.map { |x| x == 0 ? "_" : x }.join(" | ")
    "| #{s} |"
  end

  def complete?
    # applies to rows columns squares
    data.sort == [1,2,3,4,5,6,7,8,9]
  end

  def valid?(position, value)
    # applies to rows columns squares
    data[position] == 0  && !data.include?(value)
  end
end

class Board
  attr_reader :rows, :columns, :squares

  def initialize(rows:, columns:, squares:)
    @rows = rows
    @columns = columns
    @squares = squares
  end

  def solved?
    rows.all?(&:complete?) && columns.all?(&:complete?) && squares.all?(&:complete?)
  end

  def solve
    steps = valid_steps_with_one_option

    steps.each do |k, values|
      x, y = k.to_s.split(",")
      _insert_number(x.to_i, y.to_i, values.first)
    end
  end

  def valid_steps
    output = Hash.new { |h, k| h[k] = [] }
    (0...9).each do |x|
      (0...9).each do |y|
        next unless rows[x][y] == 0

        row = rows[x]
        column = columns[y]
        square = squares[_find_square_index(x, y)]
        (1..9).each do |value|
          if row.valid?(y, value) && column.valid?(x, value) && square.valid?(_find_index_from_board_coordinates(x, y), value)
            output["#{x},#{y}".to_sym] << value
          end
        end
      end
    end
    output
  end

  def valid_steps_with_one_option
    valid_steps.select { |_,v| v.count == 1 }
  end

  def to_s
    SEPERATOR + rows.join("\n#{SEPERATOR}") + SEPERATOR
  end

  private

  def _insert_number(x, y, value)
    row = rows[x]
    column = columns[y]
    square = squares[_find_square_index(x, y)]
    return unless row.valid?(y, value) && column.valid?(x, value) && square.valid?(_find_index_from_board_coordinates(x, y), value)

    rows[x][y] = value
    columns[y][x] = value
    squares[_find_square_index(x, y)][_find_index_from_board_coordinates(x, y)] = value
  end

  def _find_square_index(x, y)
    ((x / 3) * 3) + (y / 3)
  end

  def _find_index_from_board_coordinates(x, y)
    ((x % 3) * 3) + (y % 3)
  end
end

class DataInterpreter
  def initialize(data)
    @data = data
  end

  def rows
    @rows ||= _init_rows
  end

  def columns
    @columns ||= _init_columns
  end

  def squares
    @squares ||= _init_squares
  end

  private

  def _init_rows
    @data.map { |row| Group.new(row) }
  end

  def _init_columns
    (0...9).map { |x| Group.new((0...9).map { |y| @data[y][x] }) }
  end

  def _init_squares
    squares = []
    [[0,1,2], [3,4,5], [6,7,8]].each do |a|
      [[0,1,2], [3,4,5], [6,7,8]].each do |b|
        squares << Group.new(a.product(b).map { |x, y| @data[x][y] })
      end
    end
    squares
  end
end

easy = [
  [5, 3, 0, 0, 1, 0, 0, 0, 6],
  [0, 0, 0, 0, 5, 4, 0, 8, 0],
  [0, 0, 7, 0, 0, 0, 0, 0, 0],
  [0, 0, 8, 2, 0, 0, 0, 6, 7],
  [4, 0, 0, 0, 6, 0, 0, 0, 1],
  [6, 5, 0, 0, 0, 3, 8, 0, 0],
  [0, 0, 0, 0, 0, 0, 4, 0, 0],
  [0, 1, 0, 3, 2, 0, 0, 0, 0],
  [2, 0, 0, 0, 7, 0, 0, 5, 9]
]
hard = [
  [0, 3, 0, 0, 0, 0, 6, 0, 0],
  [6, 0, 0, 0, 0, 2, 0, 0, 7],
  [0, 0, 4, 0, 7, 0, 0, 9, 0],
  [0, 8, 0, 7, 0, 0, 2, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 9],
  [0, 0, 5, 0, 0, 4, 0, 7, 0],
  [0, 1, 0, 0, 3, 0, 4, 0, 0],
  [8, 0, 0, 1, 0, 0, 0, 0, 5],
  [0, 0, 9, 0, 0, 0, 0, 8, 0]
]

original_data = DataInterpreter.new(easy)
board = Board.new(rows: original_data.rows, columns: original_data.columns, squares: original_data.squares)

i = 0
loop do
  puts "Iteration #{i}"
  puts board
  puts "Valid steps with one option:"
  board.valid_steps_with_one_option.each { |k,v| puts "#{k}: #{v}"}
  puts

  board.solve
  if board.solved?
    puts SEPERATOR
    puts SEPERATOR
    puts "solved"
    break
  elsif board.valid_steps_with_one_option.count == 0
    puts "failed to solve with current algorithm"
    break
  end
  i += 1
end

puts board