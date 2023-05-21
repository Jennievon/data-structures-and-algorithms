## Task
You are given two classes, `Person` and `Student`, where `Person` is the base class and `Student` is the derived class. `Student` inherits all the properties of `Person`.

Complete the `Student` class by writing the following:

- A `Student` class constructor, which has 4 parameters:
    - A string, `firstName`.
    - A string, `lastName`.
    - An integer, `idNumber`.
    - An integer array (or vector) of test scores, `scores`.
- A char `calculate()` method that calculates a `Student` object's average and returns the grade character representative of their calculated average:

| Grading Scale 
| Letter | Average (a) |
| ------ | ----------- |
| O      | 90 <= a <= 100 |
| E      | 80 <= a < 90 |
| A      | 70 <= a < 80 |
| P      | 55 <= a < 70 |
| D      | 40 <= a < 55 |
| T      | a < 40 |

### Input Format

The locked stub code in the editor reads the input and calls the `Student` class constructor with the necessary arguments. It also calls the calculate method which takes no arguments.

The first line contains `firstName`, `lastName`, and `idNumber`, separated by a space. The second line contains the number of test scores. The third line of space-separated integers describes `scores`.

### Constraints

- `1 <= length of firstName, length of lastName <= 10`
- `length of idNumber === 7`
- `0 <= score <= 100`

### Output Format

Output is handled by the locked stub code. Your output will be correct if your `Student` class constructor and `calculate()` method are properly implemented.