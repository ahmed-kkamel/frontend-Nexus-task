# Movie Search App

## Description

The Movie Search App allows users to search for movies using the OMDb API. Users can enter a movie title in the search bar, view matching results, and click on a movie to see detailed information. The app is built with React and styled using TailwindCSS for a modern and responsive UI.

## Features

### Movie Search Functionality

- Users can enter a movie title to fetch and display matching results dynamically.
- API requests are optimized with debouncing to minimize excessive calls.

### Movie Details View

- Clicking on a movie displays its detailed information, including:
  - Title
  - Year
  - Genre
  - Poster
  - Director
  - Runtime
  - Country

### UI & Responsiveness

- Built with TailwindCSS for a clean and modern design.
- Mobile-friendly interface ensuring a smooth experience on all screen sizes.

### Performance Optimization

- Debouncing is implemented to prevent excessive API requests.
- React optimizations such as `useMemo` and `useCallback` are used where necessary to improve performance.

### Error Handling

- Gracefully handles API failures and missing data.
- Displays user-friendly error messages instead of crashing.

### Code Readability & Best Practices

- Uses modular and reusable React components.
- Ensures type safety with TypeScript (or PropTypes if using JavaScript).
- Clean and maintainable code with meaningful variable and function names.

## Installation & Setup

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Steps to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   ```

2. Install dependencies:
   ```bash
   npm install or yarn install
   ```
3. Create an .env file in the root directory and add your OMDb API key:

```bash
  REACT_APP_OMDB_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

```bash
Open http://localhost:3000 in your browser.
```

### Project Structure

```bash
movie-search-app/
│-- src/
│   │-- components/      # Reusable UI components
│   │-- pages/           # Search and movie details pages
│   │-- hooks/           # Custom hooks (e.g., API fetching, debouncing)
│   │-- utils/           # Utility functions
│   │-- App.tsx          # Main app component
│-- public/              # Static assets
│-- .env                 # API key configuration
│-- package.json         # Project dependencies
│-- README.md            # Documentation
```

### Technologies Used

Next.js (Frontend framework)

TailwindCSS (Styling)

TypeScript (Type safety)
