#include <vector>
#include <string>
#include "data_interpreter.h"
#include "group.h"

using namespace std;

DataInterpreter::DataInterpreter(const vector<vector<int>>) {
  // rows = data.map { |row| Group.new(row) }
  rows = []
  for (int i = 0; i < 9, i++) {

  }




  // columns = (0...9).map { |x| Group.new((0...9).map { |y| @data[y][x] }) }

  // squares = []
  // [[0,1,2], [3,4,5], [6,7,8]].each do |a|
  //   [[0,1,2], [3,4,5], [6,7,8]].each do |b|
  //     squares << Group.new(a.product(b).map { |x, y| @data[x][y] })
  //   end
  // end
}
