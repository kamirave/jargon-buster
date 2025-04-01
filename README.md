# Jargon Buster

## Installation
Clone the repository and install the dependencies:

```bash
npm install
npm run dev
```

## Debugging Challenges

This repository contains several branches, each with a specific bug for you to find and fix.

### Getting Started:

1.  **Fork & Clone:** Fork this repository on GitHub, then clone your fork locally.
    ```bash
    git clone <your-fork-repository-url>
    cd jargon-buster
    ```
2.  **Add Upstream:** Add the original repository as a remote named `upstream`.
    ```bash
    git remote add upstream https://github.com/codeWithJV/jargon-buster
    ```
3.  **Fetch Challenges:** Fetch all branches from the upstream repository.
    ```bash
    git fetch upstream
    ```
4.  **Choose a Challenge:** Select a challenge from the Table of Contents below.
5.  **Checkout Branch:** Use the `git checkout -b ...` command provided in the challenge details section to create and switch to the local challenge branch.
6.  **Install & Run:** Install dependencies (`npm install`) and start the development server (`npm run dev`).
7.  **Debug:** Use the specific clue, reproduction steps, and debugging hints for your chosen challenge (found below the Table of Contents) to find and fix the bug.
8.  **Commit & Push:** Commit your solution (`git add .`, `git commit -m "fix: solved <challenge-name>"`) and push it to your fork (`git push origin <challenge-name>`).
9.  **Repeat:** Checkout `main` (`git checkout main`) and go back to step 4 to try another challenge.

---

### Challenge Table of Contents

1.  **[Syntax Error (`challenge/syntax-error`)](#1-syntax-error)**
2.  **Runtime Errors**
    *   2a. **[Type Error (`challenge/runtime-type-error`)](#2a-runtime-type-error)**
    *   2b. **[Reference Error (`challenge/runtime-reference-error`)](#2b-runtime-reference-error)**
3.  **Logical Errors**
    *   3a. **[Filter (`challenge/logical-error-filter`)](#3a-logical-error---filter)**
    *   3b. **[Add (`challenge/logical-error-add`)](#3b-logical-error---add)**
4.  **[Development Environment Error (`challenge/dev-env-error`)](#4-development-environment-error)**
5.  **[Server-Side Error - Add Term (`challenge/server-error-add`)](#5-server-side-error---add-term)**

---

### Challenge Clues Details

## 1. Syntax Error
#### `challenge/syntax-error`
```bash
git checkout -b challenge/syntax-error upstream/challenge/syntax-error
```
**Reproduce:** Run `npm run dev`. The application fails to start.

**Details:** Check the browser's developer console or the terminal where you ran `npm run dev` for clues about a syntax mistake. Look closely at the structure of the `AddTermForm` component.

<details>
<summary>Learn more about Syntax Errors</summary>

A **Syntax Error** occurs when your code violates the grammatical rules of the programming language. The computer cannot understand or parse code that doesn't follow the correct syntax.

**Common Causes:**
- Typos (misspelled keywords, variable names)
- Missing or mismatched punctuation (parentheses `()`, braces `{}`, brackets `[]`, semicolons `;`, commas `,`)
- Incorrect use of operators (`=`, `==`, `===`, `+`, `-`, etc.)
- Improper code structure (e.g., incorrect indentation in Python, misplaced keywords)

**How to Find Them:**
- **Linters & IDEs:** Tools like ESLint (for JavaScript/TypeScript) and your code editor (like VS Code) often highlight syntax errors as you type. Pay attention to red squiggly lines!
- **Compiler/Interpreter Output:** When you try to run or build your code (`npm run dev`, `tsc`, `node script.js`), the error message will usually point directly to the file and line number where the syntax violation occurred. The message might say something like "Unexpected token", "Missing ;", or "Unterminated string constant".

**Debugging Strategy:**
1.  Read the error message carefully. It often tells you exactly what's wrong and where.
2.  Go to the specified file and line number.
3.  Examine the line and the lines immediately before and after it.
4.  Look for common causes like missing punctuation or typos.
5.  If unsure, comment out sections of code to isolate the problematic line.

</details>

---

## 2. Runtime Errors

### 2a. Runtime Type Error
#### `challenge/runtime-type-error`
```bash
git checkout -b challenge/runtime-type-error upstream/challenge/runtime-type-error
```
**Reproduce:** Run `npm run dev`, add a term if needed, ensure it's visible in the list (adjust filters if necessary). App crashes when rendering the term list.

**Details:** The application loads initially, but crashes when trying to display the list of terms. The console likely shows a `TypeError`. Investigate how term data is accessed within the `TermList` component. Is it possible some data is missing or has an unexpected structure?

<details>
<summary>Learn more about Runtime TypeErrors</summary>

A **TypeError** is a common runtime error in JavaScript (and TypeScript) that occurs when you try to perform an operation on a value of an inappropriate type. The most frequent cause is trying to access a property or call a method on `undefined` or `null`.

**Common Causes:**
- Accessing a property of `undefined` or `null` (e.g., `myObject.property` when `myObject` is `undefined`).
- Calling something that is not a function (e.g., `myVariable()` when `myVariable` is a number or string).
- Using operators with incompatible types (though JavaScript often tries type coercion first).
- Incorrect assumptions about data structure (e.g., expecting an object but receiving an array or primitive).
- Asynchronous operations not completing before their results are used.

**How to Find Them:**
- **Browser Developer Console:** This is your primary tool. When a `TypeError` occurs, the console will display:
    - The error message (e.g., "TypeError: Cannot read properties of undefined (reading 'name')").
    - A stack trace showing the sequence of function calls leading to the error.
    - The file name and line number where the error originated.
- **Debugging Tools:** Using `console.log()` or the debugger (`debugger;` statement or IDE debugger) to inspect variable values just before the error occurs.

**Debugging Strategy:**
1.  Read the error message carefully. It often tells you *which property* couldn't be read and *what* it couldn't be read from (usually `undefined` or `null`).
2.  Use the stack trace to find the exact line of code causing the error.
3.  Examine that line. Identify the variable that is likely `undefined` or `null`.
4.  Trace back where that variable gets its value. Why might it be `undefined` or `null` at that point?
    - Was data fetched correctly?
    - Was a function argument missing?
    - Is there a conditional logic path where the variable isn't assigned?
5.  Add checks (`if (variable) { ... }`) or provide default values (`variable?.property` or `variable || defaultValue`) to handle cases where the value might be missing.

</details>

---

### 2b. Runtime Reference Error
#### `challenge/runtime-reference-error`
```bash
git checkout -b challenge/runtime-reference-error upstream/challenge/runtime-reference-error
```
**Reproduce:** Run `npm run dev`, go to "Search Terms" tab, type in the search box. App crashes or search fails.

**Details:** Searching for terms causes the application to crash with a `ReferenceError`. Check the `SearchTerms` component. Is a variable being used that hasn't been properly defined or is misspelled?

<details>
<summary>Learn more about Runtime ReferenceErrors</summary>

A **ReferenceError** is a runtime error in JavaScript that occurs when you try to use a variable that has not yet been declared or is outside the current scope.

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

---

## 3. Logical Errors

### 3a. Logical Error - Filter
#### `challenge/logical-error-filter`
```bash
git checkout -b challenge/logical-error-filter upstream/challenge/logical-error-filter
```
**Reproduce:** Run `npm run dev`, try searching for terms. Filter doesn't work as expected.

**Details:** Searching for terms doesn't seem to work correctly. Even when you type a known term, it might not appear in the results, or unrelated terms might show up. Examine the filtering logic in `TermList.tsx`. Is it comparing the right things? Is case sensitivity handled correctly?

<details>
<summary>Learn more about Logical Errors</summary>

A **Logical Error** is a bug where the code runs without crashing (no syntax or runtime errors), but it produces incorrect or unexpected results. These are often the hardest errors to find because the computer is doing exactly what you *told* it to do, just not what you *intended* it to do.

**Common Causes:**
- **Incorrect Algorithm/Formula:** The underlying logic used to solve the problem is flawed.
- **Flawed Conditional Logic:** `if`/`else if`/`else` statements are structured incorrectly, leading to the wrong code path being executed.
- **Off-by-One Errors:** Loops iterate one time too many or too few (e.g., using `<` instead of `<=`).
- **Incorrect Operator Usage:** Using the wrong operator (e.g., `+` instead of `-`, `&&` instead of `||`, `=` instead of `===`).
- **Misunderstanding Requirements:** The code correctly implements the wrong logic because the programmer misunderstood the goal.
- **State Management Issues:** In UI frameworks like React, incorrectly updating or reading component state can lead to unexpected UI behavior.
- **Case Sensitivity:** Incorrectly handling uppercase vs. lowercase characters in comparisons or searches.

**How to Find Them:**
- **Testing:** Writing and running tests (unit tests, integration tests) that check for specific expected outputs given certain inputs.
- **Debugging Tools (`console.log`, Debugger):** This is crucial.
    - Print variable values at different stages of the logic (`console.log("Variable X:", x)`).
    - Use a debugger to step through the code line by line, inspecting variable values and the execution flow.
- **Code Review:** Having another person look at your code can often spot flawed logic you missed.
- **Rubber Duck Debugging:** Explaining your code, line by line, to someone (or even an inanimate object like a rubber duck) can force you to see the flaw in your logic.
- **Simplification:** Temporarily remove or simplify parts of the code to isolate the section containing the logical error.

**Debugging Strategy:**
1.  **Reproduce Consistently:** Find inputs or actions that reliably trigger the incorrect behavior.
2.  **Formulate a Hypothesis:** Based on the incorrect output, guess where the logic might be going wrong.
3.  **Test Hypothesis:** Use `console.log` or the debugger to check the values of relevant variables *before* and *after* the suspected faulty code section.
4.  **Analyze Results:** Do the variable values match your expectations? If not, you've likely found the area with the error.
5.  **Refine and Repeat:** If your initial hypothesis was wrong, form a new one based on your observations and repeat the testing process. Focus on understanding the *flow* of data and control through your code.

</details>

---

### 3b. Logical Error - Add
#### `challenge/logical-error-add`
```bash
git checkout -b challenge/logical-error-add upstream/challenge/logical-error-add
```
**Reproduce:** Run `npm run dev`, add a new term. The term doesn't appear in the list without a page refresh.

**Details:** Adding a new term seems to succeed (no errors), but the term doesn't appear in the list immediately. You might need to refresh the page to see it. Check how the new term is added to the state in `TermContext.tsx` and how the list is updated afterwards. Is the local state being updated correctly after the API call?

*(See shared "Learn more about Logical Errors" details under challenge 3a)*

---

## 4. Development Environment Error
#### `challenge/dev-env-error`
```bash
git checkout -b challenge/dev-env-error upstream/challenge/dev-env-error
```
**Reproduce:** Run `npm run dev`. Application fails to load in the browser.

**Details:** The application fails to load in the browser, even though `npm run dev` seems to start without syntax errors. Check the network tab in your browser's developer tools. Is the browser trying to connect to the correct address and port? Review the `vite.config.ts` file for any server configuration issues.

<details>
<summary>Learn more about Development Environment Errors</summary>

**Development Environment Errors** relate to problems with the setup, configuration, or dependencies of your project, rather than the code logic itself. These often prevent the application from starting correctly or connecting properly.

**Common Causes:**
- **Incorrect Port Configuration:** The development server (like Vite) is configured to run on a different port than the one you're trying to access in the browser (as in this challenge!).
- **Missing Dependencies:** Required packages listed in `package.json` haven't been installed (`npm install` or `yarn install` needed).
- **Incorrect Dependency Versions:** Incompatible versions of libraries are installed, causing conflicts.
- **Configuration File Errors:** Mistakes in configuration files (e.g., `vite.config.ts`, `webpack.config.js`, `.env` files) like incorrect paths, typos, or invalid settings.
- **Proxy Issues:** Incorrectly configured server proxies (like the one used here to connect frontend to backend) can prevent API calls from working.
- **Database Connection Problems:** The application cannot connect to the required database (wrong credentials, database server not running).
- **Node.js/npm Version Issues:** Using an incompatible version of Node.js or npm for the project.

**How to Find Them:**
- **Terminal Output:** Carefully read the output in the terminal where you started the development server (`npm run dev`). Errors related to ports, missing modules, or configuration issues often appear here.
- **Browser Developer Console:** Check the Console and Network tabs.
    - Console might show connection errors or JavaScript errors related to failed resource loading.
    - Network tab will show failed requests (e.g., 404 Not Found for assets, connection refused errors).
- **Configuration Files:** Double-check relevant configuration files (`vite.config.ts`, `package.json`, etc.) for typos or incorrect settings.
- **Dependency Checks:** Run `npm list` or check `package-lock.json`/`yarn.lock` for potential version conflicts.

**Debugging Strategy:**
1.  **Check Terminal Output:** Look for any error messages when starting the dev server.
2.  **Check Browser Console/Network:** See if the browser can connect and load initial files. Note any specific errors (e.g., "Connection Refused", 404 errors).
3.  **Verify URLs and Ports:** Ensure the URL you're using in the browser matches the port the server *says* it's running on in the terminal output. Check configuration files (`vite.config.ts`) for explicit port settings.
4.  **Check Dependencies:** Run `npm install` again to ensure all dependencies are present.
5.  **Review Configuration:** Carefully examine configuration files related to the suspected issue (e.g., server config, proxy config).
6.  **Simplify:** Temporarily comment out complex configurations (like proxies) to see if the basic server starts correctly.

</details>

---

## 5. Server-Side Error - Add Term
#### `challenge/server-error-add`
```bash
npm install
npm run dev
```

## Debugging Challenges

This repository contains several branches, each with a specific bug for you to find and fix.

### Getting Started:

1.  **Fork & Clone:** Fork this repository on GitHub, then clone your fork locally.
    ```bash
    git clone <your-fork-repository-url>
    cd jargon-buster
    ```
2.  **Add Upstream:** Add the original repository as a remote named `upstream`.
    ```bash
    git remote add upstream https://github.com/codeWithJV/jargon-buster
    ```
3.  **Fetch Challenges:** Fetch all branches from the upstream repository.
    ```bash
    git fetch upstream
    ```
4.  **Choose a Challenge:** Select a challenge from the Table of Contents below.
5.  **Checkout Branch:** Use the `git checkout -b ...` command provided in the challenge details section to create and switch to the local challenge branch.
6.  **Install & Run:** Install dependencies (`npm install`) and start the development server (`npm run dev`).
7.  **Debug:** Use the specific clue, reproduction steps, and debugging hints for your chosen challenge (found below the Table of Contents) to find and fix the bug.
8.  **Commit & Push:** Commit your solution (`git add .`, `git commit -m "fix: solved <challenge-name>"`) and push it to your fork (`git push origin <challenge-name>`).
9.  **Repeat:** Checkout `main` (`git checkout main`) and go back to step 4 to try another challenge.

---

### Challenge Table of Contents

1.  **[Syntax Error (`challenge/syntax-error`)](#1-syntax-error)**
2.  **Runtime Errors**
    *   2a. **[Type Error (`challenge/runtime-type-error`)](#2a-runtime-type-error)**
    *   2b. **[Reference Error (`challenge/runtime-reference-error`)](#2b-runtime-reference-error)**
3.  **Logical Errors**
    *   3a. **[Filter (`challenge/logical-error-filter`)](#3a-logical-error---filter)**
    *   3b. **[Add (`challenge/logical-error-add`)](#3b-logical-error---add)**
4.  **[Development Environment Error (`challenge/dev-env-error`)](#4-development-environment-error)**
5.  **[Server-Side Error - Add Term (`challenge/server-error-add`)](#5-server-side-error---add-term)**

---

### Challenge Clues Details

## 1. Syntax Error
#### `challenge/syntax-error`
```bash
git checkout -b challenge/syntax-error upstream/challenge/syntax-error
```
**Reproduce:** Run `npm run dev`. The application fails to start.

**Details:** Check the browser's developer console or the terminal where you ran `npm run dev` for clues about a syntax mistake. Look closely at the structure of the `AddTermForm` component.

<details>
<summary>Learn more about Syntax Errors</summary>

A **Syntax Error** occurs when your code violates the grammatical rules of the programming language. The computer cannot understand or parse code that doesn't follow the correct syntax.

**Common Causes:**
- Typos (misspelled keywords, variable names)
- Missing or mismatched punctuation (parentheses `()`, braces `{}`, brackets `[]`, semicolons `;`, commas `,`)
- Incorrect use of operators (`=`, `==`, `===`, `+`, `-`, etc.)
- Improper code structure (e.g., incorrect indentation in Python, misplaced keywords)

**How to Find Them:**
- **Linters & IDEs:** Tools like ESLint (for JavaScript/TypeScript) and your code editor (like VS Code) often highlight syntax errors as you type. Pay attention to red squiggly lines!
- **Compiler/Interpreter Output:** When you try to run or build your code (`npm run dev`, `tsc`, `node script.js`), the error message will usually point directly to the file and line number where the syntax violation occurred. The message might say something like "Unexpected token", "Missing ;", or "Unterminated string constant".

**Debugging Strategy:**
1.  Read the error message carefully. It often tells you exactly what's wrong and where.
2.  Go to the specified file and line number.
3.  Examine the line and the lines immediately before and after it.
4.  Look for common causes like missing punctuation or typos.
5.  If unsure, comment out sections of code to isolate the problematic line.

</details>

---

## 2. Runtime Errors

### 2a. Runtime Type Error
#### `challenge/runtime-type-error`
```bash
git checkout -b challenge/runtime-type-error upstream/challenge/runtime-type-error
```
**Reproduce:** Run `npm run dev`, add a term if needed, ensure it's visible in the list (adjust filters if necessary). App crashes when rendering the term list.

**Details:** The application loads initially, but crashes when trying to display the list of terms. The console likely shows a `TypeError`. Investigate how term data is accessed within the `TermList` component. Is it possible some data is missing or has an unexpected structure?

<details>
<summary>Learn more about Runtime TypeErrors</summary>

A **TypeError** is a common runtime error in JavaScript (and TypeScript) that occurs when you try to perform an operation on a value of an inappropriate type. The most frequent cause is trying to access a property or call a method on `undefined` or `null`.

**Common Causes:**
- Accessing a property of `undefined` or `null` (e.g., `myObject.property` when `myObject` is `undefined`).
- Calling something that is not a function (e.g., `myVariable()` when `myVariable` is a number or string).
- Using operators with incompatible types (though JavaScript often tries type coercion first).
- Incorrect assumptions about data structure (e.g., expecting an object but receiving an array or primitive).
- Asynchronous operations not completing before their results are used.

**How to Find Them:**
- **Browser Developer Console:** This is your primary tool. When a `TypeError` occurs, the console will display:
    - The error message (e.g., "TypeError: Cannot read properties of undefined (reading 'name')").
    - A stack trace showing the sequence of function calls leading to the error.
    - The file name and line number where the error originated.
- **Debugging Tools:** Using `console.log()` or the debugger (`debugger;` statement or IDE debugger) to inspect variable values just before the error occurs.

**Debugging Strategy:**
1.  Read the error message carefully. It often tells you *which property* couldn't be read and *what* it couldn't be read from (usually `undefined` or `null`).
2.  Use the stack trace to find the exact line of code causing the error.
3.  Examine that line. Identify the variable that is likely `undefined` or `null`.
4.  Trace back where that variable gets its value. Why might it be `undefined` or `null` at that point?
    - Was data fetched correctly?
    - Was a function argument missing?
    - Is there a conditional logic path where the variable isn't assigned?
5.  Add checks (`if (variable) { ... }`) or provide default values (`variable?.property` or `variable || defaultValue`) to handle cases where the value might be missing.

</details>

---

### 2b. Runtime Reference Error
#### `challenge/runtime-reference-error`
```bash
git checkout -b challenge/runtime-reference-error upstream/challenge/runtime-reference-error
```
**Reproduce:** Run `npm run dev`, go to "Search Terms" tab, type in the search box. App crashes or search fails.

**Details:** Searching for terms causes the application to crash with a `ReferenceError`. Check the `SearchTerms` component. Is a variable being used that hasn't been properly defined or is misspelled?

<details>
<summary>Learn more about Runtime ReferenceErrors</summary>

A **ReferenceError** is a runtime error in JavaScript that occurs when you try to use a variable that has not yet been declared or is outside the current scope.

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

---

## 3. Logical Errors

### 3a. Logical Error - Filter
#### `challenge/logical-error-filter`
```bash
git checkout -b challenge/logical-error-filter upstream/challenge/logical-error-filter
```
**Reproduce:** Run `npm run dev`, try searching for terms. Filter doesn't work as expected.

**TIP:** try putting capital letters in your terms or search.

**Details:** Searching for terms doesn't seem to work correctly. Even when you type a known term, it might not appear in the results, or unrelated terms might show up. Examine the filtering logic in `TermList.tsx`. Is it comparing the right things? Is case sensitivity handled correctly?

<details>
<summary>Learn more about Logical Errors</summary>

A **Logical Error** is a bug where the code runs without crashing (no syntax or runtime errors), but it produces incorrect or unexpected results. These are often the hardest errors to find because the computer is doing exactly what you *told* it to do, just not what you *intended* it to do.

**Common Causes:**
- **Incorrect Algorithm/Formula:** The underlying logic used to solve the problem is flawed.
- **Flawed Conditional Logic:** `if`/`else if`/`else` statements are structured incorrectly, leading to the wrong code path being executed.
- **Off-by-One Errors:** Loops iterate one time too many or too few (e.g., using `<` instead of `<=`).
- **Incorrect Operator Usage:** Using the wrong operator (e.g., `+` instead of `-`, `&&` instead of `||`, `=` instead of `===`).
- **Misunderstanding Requirements:** The code correctly implements the wrong logic because the programmer misunderstood the goal.
- **State Management Issues:** In UI frameworks like React, incorrectly updating or reading component state can lead to unexpected UI behavior.
- **Case Sensitivity:** Incorrectly handling uppercase vs. lowercase characters in comparisons or searches.

**How to Find Them:**
- **Testing:** Writing and running tests (unit tests, integration tests) that check for specific expected outputs given certain inputs.
- **Debugging Tools (`console.log`, Debugger):** This is crucial.
    - Print variable values at different stages of the logic (`console.log("Variable X:", x)`).
    - Use a debugger to step through the code line by line, inspecting variable values and the execution flow.
- **Code Review:** Having another person look at your code can often spot flawed logic you missed.
- **Rubber Duck Debugging:** Explaining your code, line by line, to someone (or even an inanimate object like a rubber duck) can force you to see the flaw in your logic.
- **Simplification:** Temporarily remove or simplify parts of the code to isolate the section containing the logical error.

**Debugging Strategy:**
1.  **Reproduce Consistently:** Find inputs or actions that reliably trigger the incorrect behavior.
2.  **Formulate a Hypothesis:** Based on the incorrect output, guess where the logic might be going wrong.
3.  **Test Hypothesis:** Use `console.log` or the debugger to check the values of relevant variables *before* and *after* the suspected faulty code section.
4.  **Analyze Results:** Do the variable values match your expectations? If not, you've likely found the area with the error.
5.  **Refine and Repeat:** If your initial hypothesis was wrong, form a new one based on your observations and repeat the testing process. Focus on understanding the *flow* of data and control through your code.

</details>

---

### 3b. Logical Error - Add
#### `challenge/logical-error-add`
```bash
git checkout -b challenge/logical-error-add upstream/challenge/logical-error-add
```
**Reproduce:** Run `npm run dev`, add a new term. The term doesn't appear in the list without a page refresh.

**Details:** Adding a new term seems to succeed (no errors), but the term doesn't appear in the list immediately. You might need to refresh the page to see it. Check how the new term is added to the state in `TermContext.tsx` and how the list is updated afterwards. Is the local state being updated correctly after the API call?

*(See shared "Learn more about Logical Errors" details under challenge 3a)*

---

## 4. Development Environment Error
#### `challenge/dev-env-error`
```bash
git checkout -b challenge/dev-env-error upstream/challenge/dev-env-error
```
**Reproduce:** Run `npm run dev`. Application fails to load in the browser.

**Details:** The application fails to load in the browser, even though `npm run dev` seems to start without syntax errors. Check the network tab in your browser's developer tools. Is the browser trying to connect to the correct address and port? Review the `vite.config.ts` file for any server configuration issues.

<details>
<summary>Learn more about Development Environment Errors</summary>

**Development Environment Errors** relate to problems with the setup, configuration, or dependencies of your project, rather than the code logic itself. These often prevent the application from starting correctly or connecting properly.

**Common Causes:**
- **Incorrect Port Configuration:** The development server (like Vite) is configured to run on a different port than the one you're trying to access in the browser (as in this challenge!).
- **Missing Dependencies:** Required packages listed in `package.json` haven't been installed (`npm install` or `yarn install` needed).
- **Incorrect Dependency Versions:** Incompatible versions of libraries are installed, causing conflicts.
- **Configuration File Errors:** Mistakes in configuration files (e.g., `vite.config.ts`, `webpack.config.js`, `.env` files) like incorrect paths, typos, or invalid settings.
- **Proxy Issues:** Incorrectly configured server proxies (like the one used here to connect frontend to backend) can prevent API calls from working.
- **Database Connection Problems:** The application cannot connect to the required database (wrong credentials, database server not running).
- **Node.js/npm Version Issues:** Using an incompatible version of Node.js or npm for the project.

**How to Find Them:**
- **Terminal Output:** Carefully read the output in the terminal where you started the development server (`npm run dev`). Errors related to ports, missing modules, or configuration issues often appear here.
- **Browser Developer Console:** Check the Console and Network tabs.
    - Console might show connection errors or JavaScript errors related to failed resource loading.
    - Network tab will show failed requests (e.g., 404 Not Found for assets, connection refused errors).
- **Configuration Files:** Double-check relevant configuration files (`vite.config.ts`, `package.json`, etc.) for typos or incorrect settings.
- **Dependency Checks:** Run `npm list` or check `package-lock.json`/`yarn.lock` for potential version conflicts.

**Debugging Strategy:**
1.  **Check Terminal Output:** Look for any error messages when starting the dev server.
2.  **Check Browser Console/Network:** See if the browser can connect and load initial files. Note any specific errors (e.g., "Connection Refused", 404 errors).
3.  **Verify URLs and Ports:** Ensure the URL you're using in the browser matches the port the server *says* it's running on in the terminal output. Check configuration files (`vite.config.ts`) for explicit port settings.
4.  **Check Dependencies:** Run `npm install` again to ensure all dependencies are present.
5.  **Review Configuration:** Carefully examine configuration files related to the suspected issue (e.g., server config, proxy config).
6.  **Simplify:** Temporarily comment out complex configurations (like proxies) to see if the basic server starts correctly.

</details>

---

## 5. Server-Side Error - Add Term
#### `challenge/server-error-add`
```bash
git checkout -b challenge/server-error-add upstream/challenge/server-error-add
```
**Reproduce:** Run `npm run dev`, try adding a new term. Operation fails.

**Details:** When you try to add a new term, the operation fails. Check the browser's developer console, specifically the Network tab, to see the request being made to the backend API (`/api/terms`). What status code is the server returning? Also, check the terminal where the backend server (`node server/index.js` part of `npm run dev`) is running for any error messages originating from `server/index.js`.

<details>
<summary>Learn more about Server-Side Errors</summary>

**Server-Side Errors** occur on the backend system that processes requests from the frontend (client). When the server encounters a problem it cannot handle while processing a request (like interacting with a database or performing business logic), it typically sends an error response back to the client, often with an HTTP status code in the 5xx range (e.g., 500 Internal Server Error).

**Common Causes:**
- **Database Errors:** Problems connecting to the database, invalid SQL queries (like in this challenge!), constraint violations (e.g., trying to insert duplicate primary keys), or database server issues.
- **Unhandled Exceptions:** Errors in the server-side code (like TypeErrors, ReferenceErrors, or custom errors) that are not caught and handled gracefully.
- **Configuration Issues:** Incorrect server configuration, missing environment variables, or wrong file paths.
- **Resource Unavailability:** The server might depend on external services or files that are temporarily unavailable.
- **Logic Errors in API Endpoints:** Flawed logic within the specific API route handler being called.
- **Middleware Errors:** Problems within server middleware functions that process requests before they reach the main route handler.

**How to Find Them:**
- **Browser Developer Console (Network Tab):** This is crucial for identifying *that* a server error occurred. Look for requests with status codes like 500, 502, 503, etc. Examine the "Response" tab for that request; sometimes the server sends back a specific error message in JSON or HTML format.
- **Server Logs:** This is where you find the *details* of the error. Check the terminal window where your backend server process is running (`node server/index.js` in this case). Server frameworks like Express often log detailed error messages and stack traces here when an unhandled error occurs. For production systems, errors are usually written to log files.
- **API Testing Tools:** Tools like Postman or `curl` can be used to send requests directly to the API endpoint, bypassing the frontend, to isolate whether the issue is purely on the server.
- **Server-Side Debugging:** Using `console.log` statements within the server code or attaching a debugger to the Node.js process.

**Debugging Strategy:**
1.  **Confirm the Error:** Use the browser's Network tab to confirm a request is failing with a 5xx status code. Check the response body for any clues.
2.  **Check Server Logs:** Immediately check the terminal output of your running server process for detailed error messages and stack traces. This usually pinpoints the file and line number on the *server* where the error originated.
3.  **Analyze the Server Code:** Based on the server logs, examine the relevant API route handler (`POST /api/terms` in `server/index.js` for this challenge) and any functions it calls.
4.  **Isolate the Issue:** If the error involves a database or external service, check the inputs being sent to it (e.g., the SQL query and parameters). Are they correct?
5.  **Test Directly:** Consider using an API tool like Postman to send the same request directly to the server to rule out frontend issues.
6.  **Add Logging/Debugging:** If the error isn't obvious, add `console.log` statements in the server code to trace the execution flow and inspect variable values just before the error occurs.

</details>

---

## Project Overview

A simple web application for tracking and learning new technical terms, jargon, and concepts. Built with React, TypeScript, and Express, it helps you manage your learning journey by capturing initial thoughts, detailed notes, and simplified explanations.

## Features

### Term Management
- Add new terms with initial thoughts
- Track understanding status (understood/not understood)
- Edit terms with additional context:
  - Definition
  - Notes
  - "Explain Like I'm Five" (ELI5) explanations
- Delete terms when no longer needed

### Search and Discovery
- Real-time search filtering
- Direct links to search terms on Google
- Quick access to Wikipedia articles
- Track when terms were added and understood

### User Interface
- Clean, modern interface with Tailwind CSS
- Responsive design for all devices
- Intuitive status indicators
- Progress tracking dashboard

### Data Persistence
- SQLite database for reliable storage
- Automatic data synchronization
- Timestamp tracking for term management

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Vite (build tool)

### Backend
- Express.js
- SQLite3
- Node.js

## Project Structure

```
├── src/                  # Frontend source code
│   ├── components/       # React components
│   │   ├── AddTermForm.tsx    # New term entry
│   │   ├── SearchTerms.tsx    # Search interface
│   │   ├── Stats.tsx          # Progress dashboard
│   │   └── TermList.tsx       # Terms display
│   ├── context/         # React context
│   │   └── TermContext.tsx    # Term state management
│   └── types/           # TypeScript definitions
├── server/              # Backend code
│   ├── index.js         # Express server
│   └── terms.db         # SQLite database
└── public/              # Static assets
```

## Database Schema

```sql
CREATE TABLE terms (
  id TEXT PRIMARY KEY,
  term TEXT NOT NULL,
  definition TEXT,
  understood BOOLEAN DEFAULT 0,
  dateAdded TEXT NOT NULL,
  dateUnderstood TEXT,
  initialThoughts TEXT,
  notes TEXT,
  eli5 TEXT
);
```

## API Endpoints

### GET `/api/terms`
- Retrieves all terms
- Response: Array of term objects

### POST `/api/terms`
- Creates a new term
- Body: `{ id, term, definition, dateAdded, initialThoughts }`

### PUT `/api/terms/:id`
- Updates an existing term
- Body: `{ term, definition, notes, eli5 }`

### PUT `/api/terms/:id/toggle`
- Toggles term understanding status
- Body: `{ understood, dateUnderstood }`

### DELETE `/api/terms/:id`
- Deletes a term

## Development Setup

1. Prerequisites:
   - Node.js (v18 or higher)
   - npm (included with Node.js)

2. Installation:
   ```bash
   git clone <repository-url>
   cd jargon-buster
   npm install
   ```

3. Start Development Servers:
   ```bash
   npm run dev
   ```
   This starts:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:3000`

## Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm start
   ```

## Environment Variables

The application uses default ports:
- Frontend Dev Server: 5173
- Backend Server: 3000

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- UI styled with [Tailwind CSS](https://tailwindcss.com/)
