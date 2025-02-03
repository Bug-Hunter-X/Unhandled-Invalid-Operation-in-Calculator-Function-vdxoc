# Unhandled Invalid Operation in Calculator Function

This repository demonstrates a common JavaScript error: unhandled invalid operations. The `calculate` function handles basic arithmetic but throws an error for invalid operators. This is a simple example, but in larger applications, such unexpected errors can cause significant problems.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a more robust solution.

## Bug Description
The `calculate` function uses a `switch` statement to perform arithmetic operations. However, it doesn't gracefully handle cases where the `operation` parameter is not one of the supported operators (+, -, *, /).  This leads to an error if an invalid operator is passed. 

## Solution
The `bugSolution.js` file improves the code by implementing input validation and a default case to return a user-friendly message for unsupported operations instead of throwing an error.