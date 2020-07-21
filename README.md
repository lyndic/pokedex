# Pokédex

## Development

To run the app in development mode.<br />
```
$ cd to pokedex
$ npm i
$ npm run start
```
Pokédex will open at [http://localhost:3000](http://localhost:3000)

## Testing

To test, simply run the development server and follow the steps below.<br />
```
$ Use keyboard arrow keys or click on arrows to browse Pokémon

$ Type in Pokémon name or ID in the search and hit "Enter" or click "Find" to search for specific Pokémon

$ Mispelled names or Pokémon that don't exist in the PokéAPI will not be found and user will be redirected to the starting screen on Pokédex
```

## Codebase

File structure

```
pokedex/
├── public                      # Static assets
├── src                         # All of the source code for the app
├── src/PokedexBottom           # Components comprising bottom half of Pokédex
├── src/PokedexTop              # Components comprising top half of Pokédex
├── src/hooks                   # Custom hooks
├── src/PokedexContainer.js     # Contains all components, 
├── src/index.js                # Starting point for the frontend
└── src/Pokedex.css             # Top level styles for Pokédex
```

Technologies
- [create-react-app](https://create-react-app.dev/)
- [React](https://reactjs.org/)
- [pokeapi-js-wrapper](https://github.com/PokeAPI/pokeapi-js-wrapper#pokeapi-js-wrapper-)

