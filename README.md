# BookStart - find your next favorite book!
## Overall Concept
My overall goal for this application was to create a book search application utilizing the *Open Library API*. A search bar is the main point of contact, and receives author or title based searches. There is a browse function which currently features a selection of common book genres and themes, and books may also be found via those links. 
I created an initial mockup of the visual of the app using Figma. 
A screenshot of the homepage is below!
![General idea for landing page](https://file%2B.vscode-resource.vscode-cdn.net/Users/yaelkaufman/Downloads/IMG_5BFA53FCDC1F-1.jpeg?version%3D1677507243082)

## The Open Library API
The open library API features thousands of books and book editions. I chose this API for the multitude of information it provided for each book. I am using Axios to pull this information in to my project via multiple API calls, as this API features different information 

## Technologies Used:
This project was built using React, Javascript, and HTML/CSS and uses a variety of React Hooks, including useState, useContext, and useEffect, along with Routes and Links from the React Router DOM.

## MVP
- [x] Make a successful API call to the OpenLibrary API and get information to properly render / display on screen 
2. Create a search bar - [x]
3. Landing page that routes and links to the home screen, search bar, browse page, and wishlist - [x]
4. Create a browse page using the "subject" endpoint. This page features topics/subject-matter/genres commonly searched for. - [x]
5. Create an 'add to wishlist' button which collects the selected books and places them in a separate wishlist page, from which you can also remove an item. - [x]
6. Make each book found from the search page clickable to a detail page, which features more information - [x]

## Stretch Goals
1. Create a drop down menu for search which either triggers a genre or subject/author search - [x]
2. Create a book detail view for the genre search function.- [x]
3. Create export options for the wishlist.- [ ]
4. Create a 'more by this author' link within book details- [x]
5. Add ratings from ratings endpoint or reviews from the book endpoint- [ ]

##
Getting Started/Installation Instructions: 

Contribution Guidelines: 