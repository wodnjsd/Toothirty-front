# GA Project-4 Toothirty

## Overview 
A Python Flask API and React app

***The app has been deployed with Heroku and is available [here](https://toothirty.netlify.app/)***

My 4th and final project for the Software Engineering Immersive course is a full-stack application built with Flask and React.

Since the pandemic it has become increasingly more difficult to get especially NHS dental appointments, with minimum weeks of waiting in average.
Toothirty is a digital health app to provide people with advice for dental pain whilst waiting for a dental appointment.

## Technologies used:
* Python
* Flask
* PostgreSQL
* React
* JavaScript
* Axios
* Survey-js
* CSS
* Figma


## Brief:
* Build a full-stack application** by making your own backend and your own front-end
* Use a Python Flask API using a Flask REST Framework to serve your data from a Postgres database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
* Have a visually impressive design
* Be deployed online so it's publicly accessible


## Functionality:
Users can:  
- **View the list of advice for their spefic symptoms**
- Take the survey to see their risk of developing tooth decay 

Admin can: 
- Login and create a new problem within the existing types and link it to existing advice via front-end

## Demonstration of App Flow:
**Homepage**

![Homepage](/src/img/homepage.png)

**Categories**

![What's hurting](/src/img/types.png)

**Symptoms**

**Advice page**

![Advice](/src/img/advice.png)

**Survey page**

![Survey page](/src/img/survey.png)

**Survey result page**

![Survey result](/src/img/survey-result.png)

**Creating new problem and advice**
![Create page](/src/img/create.png)

## Approach:
* First I started planning the database architecture by sketching out an Entity Relationship Diagram
* When I was happy with this I moved on to building my models, views and serializers on the back-end in a Flask framework to create a SQL databse 
* I used TablePlus to visualise my PostgreSQL database and Insomnia to test my backend requests.
* Once I was happy with my back-end I moved on to the front-end, woking on the main components 
* Once I had reached my MVP I worked on the Survey as a stretch goal using a Survey js library
* Styling- I took inspiration from the Babylon website which is a well known digital healthcare app and used CSS to create my desired design 



## Challenges/ known bugs:
* The free version of Heroku I used to deploy was deleted soon after so had to redeploy
* Bug with useEffecct on the main Problems page causing re-rendering
* Survey page needs refreshing to start again 

## Future improvements:
* Sort out dependency array of useEffect on problems page 
* Complete other pages on the navbar and footer such as "About Us" and "FAQ" and on the footer 
* Expand the database to include more problems and advice for users 
* Create a start again button after completing survey 
* Responsive design for mobile 

## Lessons learned:
* Saw benefits of collaborative work, sharing ideas and fresh eyes for debugging 
* Confidence boost building full-stack app on my own
* 
