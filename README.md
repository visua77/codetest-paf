# Paf frontend exercise

Deployed version here: https://codetest-paf-frontend.netlify.app/

Note: If I were to work on a production-build, I would of course put the "content" of
app in its own component like <Results /> or similiar.

## Objective

Translate the provided [design mocks](./design/) into a working solution with HTML, CSS, Typescript, and React.  

## Requirements

1. Use modern HTML to produce a semantic information structure.
1. Use modern CSS to produce the layout with a mobile first approach  
   _Should support screen resolutions from small screens (320px+) up to big screens (1920px+)_
1. Fetch JSON-data from the following url: ```/api/games/lists.json```
1. Use React to generate the elements/components based on the fetched JSON-data.
1. Create a search/filter component based upon the JSON-data.
   - Implement your own design for the search/filter component
   - Should be a component
   - Should filter the JSON-data based on user input
   - Should display up to 10 previous searches
   - Should persist search history on reload  
     _**Don't** use autocomplete="on"_

