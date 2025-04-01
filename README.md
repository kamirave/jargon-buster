## Challenge Clue: Runtime Type Error

The application loads initially, but crashes when trying to display the list of terms. The console likely shows a `TypeError`. Investigate how term data is accessed within the `TermList` component. Is it possible some data is missing or has an unexpected structure?

**Note on reproducing the error:**
*   The error occurs when the application tries to render *any* term in the list.
*   If you start with an empty database, you'll need to add a term first (e.g., "API").
*   By default, new terms are "Not Understood". If the "Understood" filter is active, you might need to click the "Not Understood" filter button to make the newly added term visible, which will then trigger the error. Once a term is visible in the list (regardless of the filter), the `TypeError` should occur.

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

# Jargon Buster

## Installation
Clone the repository and install the dependencies:

```bash
npm install
npm run dev
```

A simpleweb application for tracking and learning new technical terms, jargon, and concepts. Built with React, TypeScript, and Express, it helps you manage your learning journey by capturing initial thoughts, detailed notes, and simplified explanations.

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
