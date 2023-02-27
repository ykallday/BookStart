#BookStart - find the next book you won't want to put down!
##Overall Concept
My overall goal for this application was to create a book search application utilizing the *Open Library API*. A search bar is the main point of contact, and receives author or title based searches. There is a browse function which currently features a selection of common book genres and themes, and books may also be found via those links. 
I created an initial mockup of the visual of the app using Figma. 
A screenshot of the homepage is below!
![General idea for landing page](https://file%2B.vscode-resource.vscode-cdn.net/Users/yaelkaufman/Downloads/IMG_5BFA53FCDC1F-1.jpeg?version%3D1677507243082)
###The Open Library API
The open library API features thousands of books and book editions. I chose this API for the multitude of information it provided for each book. I am using Axios to pull this information in to my project.
##MVP
1. Make a successful API call to the OpenLibrary API and get information to properly render / display on screen
2. Create a search bar
3. Landing page that routes and links to the home screen, search bar, browse page, and wishlist
4. Create a browse page. This page features topics/subject-matter/genres commonly searched for. It requires a separate base URL, and the contents of this API's json file are laid out differently.
5. Create an 'add to wishlist' button which collects the selected books and places them in a separate, navagable wishlist page, from which you can also remove an item.
6. Make each book found from the search page clickable to a detail page, which features more information

##Stretch Goals
1. Because the Search version of this API is limited and does not properly display 'genres', create a drop down menu to select type of search. If author or book, will trigger the appropriate URLs. If Genre will trigger a separate URL for the axios call.
2. Create a book detail view for the genre search function.
3. Create export options for the wishlist.

Description: Describe at a high level what your project is and the motivation for the project (i.e., what problem(s) your projects solves) and includes a screenshot of the application in the browser.
 Technologies Used: A list of the languages, libraries and frameworks used in your application.
 Getting Started/Installation Instructions: This would likely describe how to use the application and the steps to fork, clone and run the application.
 Contribution Guidelines: This section should offer guidance on where and how users can contribute to your code, identify bugs, and propose improvements.