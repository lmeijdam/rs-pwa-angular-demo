# scraper 

A small scraper to load the top 10 (default) deals of games, books and toys from https//www.bol.com/.

## Getting started
To get started using the scraper you need to have NodeJS installed.

- Install the packages needed for scraping
````
npm install
````

- Execute file
````
node bolTopDeals.js
````

## Output
As output we'll receive a JSON file with the following structure;
````
{
books: [
    {
        id: ID of Product
        name: name of Product
        url: url of Product
        price: price of Product in Euro
        image: image loaded from Product details page.
    }
],
games: [
    ... same object as books    
],
toys: [    
    ... same object as books
]
}
````