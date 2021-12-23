# Hackathon Club Website Development

## To test: 

On your local IDE simply download and open this file and enter command "npm install" and then "npm start" into your terminal. 

## Structure

All pages to be included (about, archive, events) are in separate folders within the src folder. Individual components of each page are in components folder, and any data that regularly needs updated (information about upcoming events, hackathon archives, etc. will dwell in the data folder for easy updating. 

### about

About, join the club, and officers buttons load the content for these pages. 

### archive

Contains the archival information about past hackathons, to be generated dynamically from the data folder information. When a user selects the hackathon information that they want to retrieve, it will load that page. 

### events

Contains the current hackathon's information, generated from the stored data (this hackathon's theme, judges, schedule, etc.) and also statically (basic faq info that is the same across hackathons). Buttons for schedule, registration, and faq generate the content on this page.

### navbar

Pretty self-explanatory, this will mostly be styling work and a navigation component.

### data 

All data for current and past events will be stored in these three js files which correspond to the events, about, and archive pages. 

## Figma prototype

https://www.figma.com/file/RBj3T8CMvdqhnw3zEYxez1/beaverhacks-website?node-id=0%3A1


## TBD:

Responsive and mobile responsive
Archive page
Update content
