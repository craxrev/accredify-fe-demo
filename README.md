# Accordify techincal assignment app

A simple version SPA for the technical assignment.

## Tech stack

- React
  - TanStack Router
  - TanStack Query
  - Radix UI
- Vite
- Tailwind
- JSdoc (I prefer TypeScript)
- ESLint
- Prettier

## Installation

```bash
git clone https://github.com/Accordify/techincal-assignment-app.git
cd techincal-assignment-app
pnpm i
```

## Usage

```bash
pnpm run dev
```

## Tests (Unit)

```bash
pnpm run test
```

## Tests (coverage)

```bash
pnpm run test:coverage
```

## Tests (E2E)

```bash
pnpm run test:e2e ( for the e2e tests to work, you need to run the server first on port 3001 )

```

## API

The API in this app was simply fetching mock data directly from JSON files hosted on GitHub (Gone with 2nd Options).

## Folder structure

```
.
├── README.md                         # This file
├── ROADMAP.md                        # Roadmap
└── src
    ├── assets                        # Assets
    ├── components                    # Components
    ├── features                      # Features specific files
    │   └── (auth | dashboard)
    │       ├── api                   # API related files: where we fetch data from external sources
    │       ├── components            # Components specific to the feature
    │       ├── utils                 # Utility specific to the feature
    │       └── hooks                 # Hooks specific to the feature
    ├── hooks                         # Global hooks
    ├── lib                           # Files that may have utility functions, constants, etc.
    └── routes                        # Routes files, this can only be specific for when using TanStack Router


## License

null
```
