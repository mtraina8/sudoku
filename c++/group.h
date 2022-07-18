#include <vector>
#include <string>

using namespace std;

class Group {
  private:
    const vector<int> data;

  public:
    Group(const vector<int> data);
    vector<int> GetDataElement(int key) const;
    vector<int> SetDataElement(int key, int value);
    string ToString(void) const;
    bool Complete(void) const;
    bool Valid(int key, int value) const;
};
