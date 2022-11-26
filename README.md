# React Hooks Movie Management Application

React movies application provides a simple list of movies.

----
- React Hooks
- Redux
- Jest Unit Testing
- Typescript


## Main features

- Listing all the movies
- Creating a new movie by filling a form
- Deleting an existing movie
- Rating a movie using stars 1-5

## Application

- each *movie* contains `id`, `title`, `subtitle`, `description`, `imageUrl` and `ratings` fields. See typescript types in the `types.ts` file.
    - `data/movies.json` and `data/testdata.ts` files provide movies for the app and the tests, respectively
- `api/movies.ts` file includes function which retrieves the movies data
- `movies/ratings.ts` file includes functions related to the Movie model (average rate)
- `movies/useMovies.ts` file includes a stub of a react hook which implements state management, used by the `MovieProvider`.

## Setup

Follow these steps for correct application setup:

1. `npm install` – install dependencies
2. `npm test` – run all tests (should fail unless you fix the app)
3. `npm run test:watch` - run all tests in _watch mode_ (optionally, you can use it locally if you prefer)
4. `npm start` – serve the app at [http://localhost:3000/](http://localhost:3000/) (it automatically opens the app in your default browser)

## Good Luck!
