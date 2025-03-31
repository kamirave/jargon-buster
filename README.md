## Challenge Clue: Syntax Error

The application fails to start. Check the browser's developer console or the terminal where you ran `npm run dev` for clues about a syntax mistake. Look closely at the structure of the `AddTermForm` component.

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

# Jargon Buster

## Installation
Clone the repository and install the dependencies:

```bash
npm install
npm run dev
```

## Debugging Challenges

Test your debugging skills! Each of the following branches contains a specific bug. Check out a branch and try to fix it using the clues in its `README.md`.

- `challenge/syntax-error`: A syntax mistake prevents the app from starting.
- `challenge/runtime-type-error`: Accessing data incorrectly causes a `TypeError`.
- `challenge/runtime-reference-error`: Using an undefined variable causes a `ReferenceError`.
- `challenge/logical-error-filter`: The search filter doesn't behave as expected.
- `challenge/logical-error-add`: Adding new terms doesn't update the list correctly.
- `challenge/dev-env-error`: A configuration issue prevents the development server from working properly.

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
