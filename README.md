# ReactDex
## About
This is a project aimed at the completion of IronHack's module 2. We use the React Library together with Axios, ChartsJS, MaterialUI, Styled Components.
The API used was [PokeAPI](https://pokeapi.co/)
, a public and free RESTFULL API that compiles all data from all generations of pokemons released. With this data we compile the base data of each pokemon to use in our application.

## Usage
###  Navbar
The Navbar provides links to all components of the application and have the theme switcher button

###  Homepage 
When entering the application this will be the page presented to the user, which has a bar to filter the entire list of pokemons if you want one in particular.
To proceed with the application flow, just click on the desired card
###  Pokemon Details
Here we have the details of the Pokemon, first with its name and a star that selected will take the Pokemon to the user's party. The system has a limit of six pokemons per party (as in the game) and warns the user if his party is full).
Below we have the official presentation figure linked by Nintendo© and to its right the basic details for the user to analyze, such as their height, weight and ID for easy location in memory modification programs such as the Game Engine.
Below we have your passive abilities that can be used in battles.
In the next session we have a chart built via ChartJS with Pokemon data, with its HP, Attack and others, we use a peak of 150 as a maximum for easy visualization, but when the user hovers over the bar he will see the real value of the desired status.
And finally we have the pokemon evolution line, it is navigable so the user doesn't need to go back to Home to see the line's pokemon (if desired) and also warns the user if the pokemon doesn't have any evolution.
###  My Party
Here where the user's Party is located, the data is persisted via localStorage. The cards were constructed and animated to remind the party of a Pokemon game.
If the user wishes to change his party, he can delete it entirely via the "Clear Party" button
###  Generation Details
This page provides details about each pokemon generation. The user will be able to choose between generation I-VIII and will receive all the pokemons released in the selected generation, the types and moves added by that generation.

## Features
- Light and Dark Themes.  
- Error 404 page.
- Charts.
- Data Persistence

## License

Under **LGPL License**

## About Us

Two students very excited about studying web development!  find us at:
[Linkedin (Thiago)](https://www.linkedin.com/in/thsc47)