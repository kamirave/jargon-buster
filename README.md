# Jargon Buster

## Installation
Clone the repository and install the dependencies:

```bash
npm install
npm run dev
```

## Debugging Challenges

This repository contains several branches, each with a specific bug for you to find and fix.

**Challenge Branches:**

- `challenge/syntax-error`: A syntax mistake prevents the app from starting.
- `challenge/runtime-type-error`: Accessing data incorrectly causes a `TypeError`.
- `challenge/runtime-reference-error`: Using an undefined variable causes a `ReferenceError`.
- `challenge/logical-error-filter`: The search filter doesn't behave as expected.
- `challenge/logical-error-add`: Adding new terms doesn't update the list correctly.
- `challenge/dev-env-error`: A configuration issue prevents the development server from working properly.
- `challenge/server-error-add`: Adding a new term fails due to a server-side database error.

**Instructions for Students:**

1.  **Fork this Repository:** Create your own copy of this repository on GitHub.
2.  **Clone Your Fork:** Clone your forked repository to your local machine.
    ```bash
    git clone <your-fork-repository-url>
    cd jargon-buster
    ```
3.  **Add Upstream Remote:** Add the original repository (this one) as a remote named `upstream`. This allows you to fetch the challenge branches.
    ```bash
    # Replace <original-repo-url> with the URL of this repository
    git remote add upstream https://github.com/codeWithJV/jargon-buster
    ```
4.  **Fetch Upstream Branches:** Get all the branches from the original repository.
    ```bash
    git fetch upstream
    ```
5.  **List All Branches:** You can see all local and remote branches (including the upstream challenges) using:
    ```bash
    git branch -a
    ```
6.  **Checkout a Challenge Branch:** Choose a challenge branch and check it out locally. This command creates a local branch that tracks the upstream challenge branch. Replace `<challenge-name>` with the specific challenge (e.g., `challenge/syntax-error`).
    ```bash
    git checkout -b <challenge-name> upstream/<challenge-name>
    ```
    *Example:*
    ```bash
    git checkout -b challenge/syntax-error upstream/challenge/syntax-error
    ```
    * **Tip:** To see the exact code changes (the introduced bug) compared to the original `main` branch, you can use `git diff`.
      *   See all differences: `git diff main...<challenge-name>`
      *   See differences for a specific file: `git diff main...<challenge-name> -- <path/to/file>` (e.g., `git diff main...challenge/syntax-error -- src/components/AddTermForm.tsx`)
      *   See differences for a specific folder: `git diff main...<challenge-name> -- <path/to/folder>` (e.g., `git diff main...challenge/server-error-add -- server`)

7.  **Solve the Challenge:** Run `npm install` if needed, then `npm run dev`. Find the bug using the clue in this branch's `README.md` and fix it.
8.  **Commit Your Solution:** Stage and commit your fix.
    ```bash
    git add .
    git commit -m "fix: solved <challenge-name> challenge"
    ```
9.  **Push to Your Fork (Origin):** Push your local challenge branch (with your solution) to your own fork on GitHub (named `origin` by default).
    ```bash
    git push origin <challenge-name>
    ```
10. **Repeat:** To try another challenge, switch back to your main branch (`git checkout main`), and repeat from step 6 with a different `<challenge-name>`.

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
