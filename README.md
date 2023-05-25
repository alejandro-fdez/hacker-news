# HackerNews UI with Vite React Typescript Tailwind and ReactQuery

<p align="center">
    <img src="https://miro.medium.com/v2/resize:fit:1200/1*A4AhcQBucS8bLpNRq3HCLg.png" alt="vite">
    <br>
    <br>
</p>

This project will show a basic SPA aiming a basic rebranding of [HackerNews website](https://news.ycombinator.com/). 
It only contains 3 main pages to display **Top**, **New** and **Job stories**, with the possibility of clicking
on the jobs on the "Jobs page" when they don't have an external link to link to.

## Technologies

![Vite](https://img.shields.io/badge/build-vite-A855F7?style=flat&logo=vite)
![React](https://img.shields.io/badge/frontend-react-61DBFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/frontend-ts-blue?style=flat&logo=typescript)
![ESLint](https://img.shields.io/badge/linter-eslint-4B32C3?style=flat&logo=eslint)
![Prettier](https://img.shields.io/badge/formatter-prettier-F8BC45?style=flat&logo=prettier)
![Vitest](https://img.shields.io/badge/specs-vitest-yellow?style=flat&logo=vitest)
![Tailwind](https://img.shields.io/badge/frontend-tailwind-00C4C4?style=flat&logo=tailwindcss)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=flat&logo=react%20query&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)

- [Vite](https://vitejs.dev/) to build the project for development and production
- [React](https://reactjs.org/) v.18
- [TypeScript](https://www.typescriptlang.org/) for happy days
- [TailwindCSS](https://tailwindcss.com/) for utility CSS classes
- [ESLint](https://eslint.org/) configured with some initial rules from airbnb conf
- [Prettier](https://prettier.io/) to enforce consistent code style
- [ReactQuery](https://tanstack.com/query/v3/) to handle async cache and statuses
- [ReacRouter](https://reactrouter.com/en/main) to handle routing/navigation within the project
- [Vitest](https://vitest.dev/) for fast unit testing and code coverage
- [Skeleton 💀](https://github.com/dvtng/react-loading-skeleton) for a nicer loading feedback
- [Husky 🐶](https://typicode.github.io/husky/) to make sure the linters are happy on every commit

## Development

### Setup

1. Run `yarn install` to install all of the project's dependencies to use the `yarn.lock` in the project. Otherwise `npm install`
2. Build the project for production: `yarn build` and run a light server with `yarn preview`
3. Run the local development server: `yarn dev`
3. Run tests and watch changes: `yarn test:watch` (`yarn test` no watching)

### Tailwind + CSS Modules

1. Tailwind was an easy win to booster up the UI challenges without almost having to create custom css files.
2. I've followed the naming convention - `<component-name>.module.css`
3. Using `@apply` directive in CSS class definitions will inherit Tailwind's utility classes into your own custom CSS
    
    ```css
    .app-heading {
        @apply text-5xl font-semibold mb-4;
    }
    ```
4. Import the CSS Module file into the React component file


## API Documentation

The project uses a couple of available [API urls from HackerNews]([https://github.com/nrabhiram/vite-react-ts-tailwind-template/issues/new](https://github.com/HackerNews/API)) or create a PR if you'd like to contribute 🙌

## License

The project is available as open source under the terms of the [MIT License](LICENSE).