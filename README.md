# SQL Practical Exam

A browser-based PostgreSQL/SQL practical exam built with HTML, CSS, JavaScript, and SQL.js.

## Files
- `index.html` — page structure
- `style.css` — design and layout
- `script.js` — SQL engine, question bank, scoring, timer, and leaderboard

## Exam configuration
- **Practice Mode:** Students can choose `All`, `Easy`, `Medium`, or `Hard`. The selected difficulty filters the practice questions.
- **Exam Mode:** The difficulty selector is hidden. Students cannot choose a difficulty; the exam uses the full question bank.
- The `difficulty` field remains in each question so the teacher can organize and maintain the question bank.

## Run locally
Open `index.html` in a browser. For the most reliable local testing, use VS Code with the Live Server extension.

## GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, and `script.js`.
3. Go to **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save and open the generated GitHub Pages URL.

## Important
The exam currently uses SQL.js in the browser, so it does not connect to a live PostgreSQL server. The CDN for SQL.js must be reachable by the student's browser.
