#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Row() {
  // def valid
  // def complete
};

class Board() {
  // def solved
};

void print_row(int *row) {
  cout << "| ";
  for (int i = 0; i < 3; i++) {
    cout << row[i] << " | ";
  }

  for (int i = 3; i < 6; i++) {
    cout << row[i] << " | ";
  }
  for (int i = 6; i < 9; i++) {
    cout << row[i] << " | ";
  }
  cout << endl;
  cout << "-------------------------------------" << endl;
}

void print_puzzle(int **rows) {
  cout << "-------------------------------------" << endl;
  for (int i = 0; i < 9; i++) {
    print_row(rows[i]);
  }
}

bool solved(int **rows) {
  for (int i = 0, i < 9, i++) {
    if (true) {
      return false;
    }
  }

  for (int i = 0, i < 9, i++) {
    if (true) {
      return false;
    }
  }

  return true;
}

int main() {
  vector<vector<int>> easy {
    { 5, 3, 0, 0, 1, 0, 0, 0, 6 },
    { 0, 0, 0, 0, 5, 4, 0, 8, 0 },
    { 0, 0, 7, 0, 0, 0, 0, 0, 0 },
    { 0, 0, 8, 2, 0, 0, 0, 6, 7 },
    { 4, 0, 0, 0, 6, 0, 0, 0, 1 },
    { 6, 5, 0, 0, 0, 3, 8, 0, 0 },
    { 0, 0, 0, 0, 0, 0, 4, 0, 0 },
    { 0, 1, 0, 3, 2, 0, 0, 0, 0 },
    { 2, 0, 0, 0, 7, 0, 0, 5, 9 }
  }

  int **board;
  board = new int*[9];
 3, 9, 8, 1, 7, 2, 4, 6], board[0] = new int[9]{ 5, 3, 0, 0, 1, 0, 0, 0, 6 };
   [0, 2, 6, 9, 5, 4, 7, 8, 3], board[1] = new int[9]{ 0, 0, 0, 0, 5, 4, 0, 8, 0 };
   [0, 4, 7, 6, 3, 2, 9, 1, 5], board[2] = new int[9]{ 0, 0, 7, 0, 0, 0, 0, 0, 0 };
   [0, 9, 8, 2, 4, 1, 5, 6, 7], board[3] = new int[9]{ 0, 0, 8, 2, 0, 0, 0, 6, 7 };
   [0, 7, 2, 5, 6, 8, 3, 9, 1], board[4] = new int[9]{ 4, 0, 0, 0, 6, 0, 0, 0, 1 };
   [0, 5, 1, 7, 9, 3, 8, 2, 4], board[5] = new int[9]{ 6, 5, 0, 0, 0, 3, 8, 0, 0 };
   [0, 6, 5, 1, 8, 9, 4, 3, 2], board[6] = new int[9]{ 0, 0, 0, 0, 0, 0, 4, 0, 0 };
   [0, 1, 4, 3, 2, 5, 6, 7, 8], board[7] = new int[9]{ 0, 1, 0, 3, 2, 0, 0, 0, 0 };
   [0, 8, 3, 4, 7, 6, 1, 5, 0 board[8] = new int[9]{ 2, 0, 0, 0, 7, 0, 0, 5, 9 };

  cout << "Imported Puzzle:" << endl;
  print_puzzle(board);
  cout << boolalpha;
  cout << "solved: " << solved(board) << endl;
};