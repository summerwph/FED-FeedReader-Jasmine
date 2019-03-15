# Project Overview

It is a web-based application that reads RSS feeds created by Udacity. I'll add the followng test cases to complete the project criteria.

##### Review the Feed Reader Testing  [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

RSS Feeds
1. allFeeds variable has been defined and that it is not empty.
2. loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
3. loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

The Menu
1. ensures the menu element is hidden by default
2. the menu changes visibility when the menu icon is clicked

Initial Entries
1. the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

New Feed Selection
1. a new feed is loaded by the `loadFeed` function that the content actually changes.

** No test should be dependent on the results of another.
** Callbacks should be used to ensure that feeds are loaded before they are tested.

### How to run the project
1. Clone the code or download the zip file to your local machine.
2. Go to "FED-FeedReader-Jasmine" folder
3. Open the index.html file in your browser.

### Testing tools: Jasmine
Documentation: https://jasmine.github.io/
