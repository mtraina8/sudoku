#include <vector>
#include <string>
#include "group.h"

using namespace std;

class DataInterpreter {
  private:
    const vector<vector<int>> data;
    const vector<vector<Group>> rows;
    const vector<vector<Group>> columns;
    const vector<vector<Group>> squares;

  public:
    DataInterpreter(const vector<vector<int>> data) { this->data = data; };
    vector<Group> Rows(void) const { return rows; };
    vector<Group> Columns(void) const { return columns; };
    vector<Group> Squares(void) const { return squares; };
};
