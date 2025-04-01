## Challenge Clue: Runtime Reference Error

Searching for terms causes the application to crash with a `ReferenceError`. Check the `SearchTerms` component. Is a variable being used that hasn't been properly defined or is misspelled?

<details>
<summary>Learn more about Runtime ReferenceErrors</summary>

A **ReferenceError** is a runtime error in JavaScript that occurs when you try to use a variable that has not yet been declared or is outside the current scope.

**Common Causes:**
- **Typos:** Misspelling a variable name is the most frequent cause. (e.g., using `myVariabel` instead of `myVariable`).
- **Scope Issues:** Trying to access a variable defined inside a function (local scope) from outside that function, or trying to access a variable before its declaration (especially with `let` and `const` which have a "temporal dead zone").
- **Forgetting to Declare:** Simply forgetting to declare a variable using `var`, `let`, or `const` before using it (in strict mode, this always throws an error; in non-strict mode, it might accidentally create a global variable, which is bad practice).
- **Using Browser-Specific Objects:** Trying to use browser-specific objects like `window` or `document` in a Node.js environment, or vice-versa.

**How to Find Them:**
- **Browser Developer Console / Terminal Output:** Similar to `TypeError`, the console will display:
    - The error message (e.g., "ReferenceError: myVariabel is not defined").
    - A stack trace showing where the error occurred.
    - The file name and line number.
- **Linters:** Tools like ESLint can often catch potential `ReferenceError`s caused by typos or undeclared variables before you even run the code.

**Debugging Strategy:**
1.  Read the error message carefully. It explicitly names the variable that couldn't be found.
2.  Use the stack trace to locate the exact line where the undefined variable is being used.
3.  Check the spelling of the variable on that line. Does it match exactly where it was declared (or where you intended to declare it)?
4.  Verify the variable's scope. Was it declared in a place accessible to the line causing the error?
5.  Ensure the variable was actually declared using `var`, `let`, or `const` before its first use.

</details>
