#  Imgur API Version 3

An application to display Imgur gallary images.

## Project Screen Shot

![Imgur Screenshot](/src/img/ImgurApp.png?raw=true "Imgur App")

## Technologies

I used Imgur API Version 3, TypeScript, CSS, React.js(Functional Component), Redux, 

## Approach

To provide more rich client-side experience, React.js framework with TSX and Functional Component, is used.
Divided the app into multiple components like Filter, Result List, Detail Page.
Once new filter is applied, or next page load is needed(Infinite Scroll), Imgur API v3 is called to load new data.
To interact with the data from multiple components, Redux is introduced, resulting no repeated api calls while navigating pages.


## Installation and Setup Instructions
Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`   

To Start Server:

`npm start`  

To Visit App:

`Your Ip Address:3000`  
`e.g x.x.x.x:3000`

Don't use localhost:3000.
Imgur is restricting to access the gallary from localhost. 
However if you access your localhost using IP address, you are able to view images.