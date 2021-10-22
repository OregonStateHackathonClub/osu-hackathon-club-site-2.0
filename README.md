# Hackathon Club Website Development

## Structure

All pages to be included (about, archive, events) are in separate folders within the src folder. Then, each page and ever section of that page has its own file as well for generating components of that page, mostly for organizational purposes. 

### about

About, join the club, and officers buttons load the static content for these pages. 

### archive

Contains the archival information about past hackathons, to be generated dynamically from the database. When a user selects the hackathon information that they want to retrieve, it will load that page. 

### events

Contains the current hackathon's information, generated from the database (this hackathon's theme, judges, schedule, etc.) and also statically (basic faq info that is the same across hackathons). Buttons for schedule, registration, and faq generate the content on this page.

### navbar

Pretty self-explanatory, this will mostly be styling work and a navigation component.

### data 

All data for current and past events will be stored in some sort of database, depending on what is learned in 290 (MongoDB?). I'd like to have one universal format for storing data on hackathons, so that we can easily convert the information on the "upcoming events" page into archival information. For example, for each hackathon we will store information on the theme, judges, schedule, winners, etc.

## Figma prototype

https://www.figma.com/file/RBj3T8CMvdqhnw3zEYxez1/beaverhacks-website?node-id=0%3A1


## Other goals:

Mobile-responsive! 
Develop alongside 290 curriculum (MERN stack) as much as possible. 

