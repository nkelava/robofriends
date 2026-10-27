# RoboFriends

A small React + Redux single-page app for browsing a list of robot "friends" and filtering them by name as you type. Each robot gets a unique avatar from [RoboHash](https://robohash.org/), and the user data comes from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) fake REST API.

It started as a learning project and covers the basics most real front-end apps need: component composition, global state with Redux, async data fetching, CSS modules and a responsive layout.

**Live demo:** https://nkelava.github.io/robofriends/

## Features

- Fetches users from `https://jsonplaceholder.typicode.com/users` and renders them as cards with RoboHash avatars
- Live, case-insensitive search by robot name
- Redux Toolkit store with a thunk for the API request and `redux-logger` for logging actions in the console
- Sign in and register screens with simple client-side view switching (UI only, there is no backend or real authentication)
- "Add to friends" button that picks up the avatar's prominent color on hover (via `color.js`)
- Error boundary around the card list
- Responsive layout for mobile, tablet and desktop, styled with Tachyons and CSS modules

## Tech stack

| Tool                                                                         | Purpose                           |
| ---------------------------------------------------------------------------- | --------------------------------- |
| [React 19](https://react.dev/)                                               | UI                                |
| [Redux Toolkit](https://redux-toolkit.js.org/) + [React Redux](https://react-redux.js.org/) | State management       |
| [Vite](https://vite.dev/)                                                    | Dev server and production build   |
| [Tachyons](https://tachyons.io/)                                             | Functional CSS utility classes    |
| [gh-pages](https://github.com/tschaub/gh-pages)                              | Deploying the build to GitHub Pages |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (required by Vite 8)
- npm (comes with Node.js)
- An internet connection, since robot data and avatars are loaded from public APIs

### Installation

```bash
git clone https://github.com/nkelava/robofriends.git
cd robofriends
npm install
```

### Run in development

```bash
npm start
```

This starts the Vite dev server at http://localhost:5173 and opens it in your browser. The app opens on the sign-in screen; click **ENTER** (no credentials needed) to get to the robot list.

### Build and preview

```bash
npm run build   # production build into ./build
npm run serve   # preview the production build locally
```

The production build uses `/robofriends/` as its base path (see `vite.config.js`) so it works on GitHub Pages. When previewing, open the URL Vite prints, which includes that path.

## Available scripts

| Script           | What it does                                                          |
| ---------------- | --------------------------------------------------------------------- |
| `npm start`      | Starts the Vite dev server with hot reload                            |
| `npm run build`  | Creates an optimized production build in `build/`                     |
| `npm run serve`  | Serves the production build locally with `vite preview`               |
| `npm run deploy` | Builds the app (via `predeploy`) and publishes `build/` to the `gh-pages` branch |

## Configuration

No environment variables or `.env` file are needed. The only settings live in `vite.config.js`:

- `base`: `/robofriends/` for production builds, `/` in development. Change it if you deploy under a different path or repository name.
- `build.outDir`: `build`, which is also the folder `npm run deploy` publishes.
- `build.cssMinify`: `esbuild`, used instead of the default minifier to avoid errors with Tachyons' CSS.

## Project structure

```text
robofriends/
├── index.html                  # HTML entry point loaded by Vite
├── vite.config.js              # Vite config (base path, build output, dev server)
├── package.json                # Dependencies and npm scripts
├── public/                     # Static files copied as-is (favicon, manifest, robots.txt)
└── src/
    ├── index.jsx               # Mounts <App /> inside the Redux <Provider>
    ├── index.css               # Global styles
    ├── assests/icons/          # Image assets (sign-out icon)
    ├── containers/
    │   ├── App.jsx             # Root component: routing between screens, search and robot list
    │   ├── App.module.css
    │   └── Gumball.ttf         # Font used for the brand title
    ├── components/
    │   ├── auth/               # SignIn and Register forms with shared styles
    │   ├── card/               # Card (single robot) and CardList
    │   ├── header/             # Header layout and SearchBox
    │   └── errors/             # ErrorBoundry component
    └── state/
        ├── store.js            # Redux store (Redux Toolkit + redux-logger)
        ├── constants.js        # Action type constants
        ├── action-creators/    # setSearchField and the requestRobots thunk
        └── reducers/           # searchRobots and requestRobots reducers
```

## How it works

1. On load, `App` dispatches `requestRobots`, which fetches the users from JSONPlaceholder and stores them in Redux.
2. Typing in the search box dispatches `setSearchField`; `App` filters the robots by name and passes the result to `CardList`.
3. Each `Card` builds its avatar URL from the user's id, e.g. `https://robohash.org/1?200x200`.

## Deployment

The app is deployed to GitHub Pages from the `gh-pages` branch:

```bash
npm run deploy
```

This runs the production build and pushes the `build/` folder to `gh-pages`. If you fork the project under a different repository name, update `base` in `vite.config.js` to match.

## Credits

- Robot avatars by [RoboHash](https://robohash.org/)
- User data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
