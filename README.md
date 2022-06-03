# Heroes App

## Description

The project shows a list of 20 Heroes with basic information about them. Includes a filter composed of a search bar, where it is possible to filter the heroes by name, a checkbox to filter them by description, and a dropdown where it is possible to filter them by year. Also is possible to navigate to a detailed hero page to get more information about the hero.

### `Install the project`

Clone, add an environment file (.env) in the root folder (inside the .env add the environment variable + token). Go to root folder and run `npm install`.
Environment variables names: REACT_APP_HEROES_BASE_URL, REACT_APP_APIKEY, REACT_APP_HASH

### `Run the project`

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

### `Run test`

Run `npm test`

## Future Improvements

- Filter heroes in the backend or API if allowed in order to bring the real amount of heroes from the server.
- Use typeScript
- Use graphQL when allowed.
- Better UX/UI.
- Infinite scrolling/pagination (Lazy loading).
- Use styled components.

## Production site link

https://zippy-chebakia-f13639.netlify.app/

## Notes

I have tried to use polyfills, different packages, and react versions, among other approaches, to make the app work for IE11, but I wasn't successful. I would be happy if you could give me some suggestions on how to archive it.
