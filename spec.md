# API Consumption Checkpoint: User List

## Overview
Build a React app using Create React App that fetches and displays a list of users from the JSONPlaceholder API using Axios.

## Goals
- Scaffold with `create-react-app`
- Install and use `axios` to perform HTTP GET
- Create `UserList.js` to fetch data inside `useEffect` and store in `useState`
- Map over `users` state to render list of user cards or items
- Style the list in `App.css`

## Technical Stack
- React
- Axios for HTTP requests
- Hooks: `useEffect`, `useState`
- CSS for styling

## Requirements
1. **UserList.js**:
   - Import `React`, `useState`, `useEffect`, and `axios`
   - Fetch from `https://jsonplaceholder.typicode.com/users` inside `useEffect`
   - Store response data in `users` state
   - Handle loading and error states
   - Map `users` to display each user's name, email, and company in styled cards
2. **App.js**: import and render `UserList`
3. **App.css**: include basic styling for user cards and layout

## Open Questions
- Additional user details? (future enhancement)
- Use React Bootstrap or plain CSS? (plain CSS here)
``` ```

---

### 2. README.md
```markdown
# User List App

A React application that fetches and displays users from JSONPlaceholder using Axios.

## Setup & Run

1. Clone this repo:
   ```bash
   git clone https://github.com/<username>/user-list-app.git
   cd user-list-app
