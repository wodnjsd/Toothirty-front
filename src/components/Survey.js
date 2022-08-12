import React from 'react'
import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from "survey-react-ui";
import Footer from './Footer'


StylesManager.applyTheme("modern");

function Questionnaire() {

  const surveyJson = {
    elements: [
      {
        name: "First",
        title: "How often do you brush your teeth? 🪥",
        type: "radiogroup",
        choices: ["2x day or more", "1x day in evening", "1x day in morning", "Less than once a day"],
        score: [0, 1, 2, 3],

      },
      {
        name: "Second",
        title: "How often do you floss? 🦷",
        type: "radiogroup",
        choices: ["Everyday", "Occasionally", "When something is stuck", "Never"],
        score: [0, 1, 2, 3],

      },
      {
        name: "Third",
        title: "Do you go for regular dental checkups? 🔍",
        type: "radiogroup",
        choices: ["Yes", "No"],
        score: [0, 2],

      },
      {
        name: "Fourth",
        title: "Do you have a sweet tooth? 🍬",
        type: "radiogroup",
        choices: ["No", "Yes but I control myself", "YES"],
        score: [0, 1, 3],

      },
      {
        name: "Fifth",
        title: "Do you have any fillings? 🛠",
        type: "radiogroup",
        choices: ["No", "Yes 1 or 2", "Yes- multiple"],
        score: [0, 1, 2],
      }
    ],
    completedHtml: `Find out your results below!`,
  }

  const survey = new Model(surveyJson)
  survey.focusFirstQuestionAutomatic = false
  survey.completeText = "Show my results"
  survey.showCompletedPage = false

  let sum = 0
  let risk = ''
  let comment = ''

  survey.onComplete.add(function (sender) {


    const scores = []
    const position1 = surveyJson.elements[0].choices.indexOf(sender.data.First)
    const position2 = surveyJson.elements[1].choices.indexOf(sender.data.Second)
    const position3 = surveyJson.elements[2].choices.indexOf(sender.data.Third)
    const position4 = surveyJson.elements[3].choices.indexOf(sender.data.Fourth)
    const position5 = surveyJson.elements[4].choices.indexOf(sender.data.Fifth)
    scores.push(surveyJson.elements[0].score[position1])
    scores.push(surveyJson.elements[1].score[position2])
    scores.push(surveyJson.elements[2].score[position3])
    scores.push(surveyJson.elements[3].score[position4])
    scores.push(surveyJson.elements[4].score[position5])
    console.log(scores)

    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    console.log(sum)
    if (sum > 10) {
      risk = "high";
      comment = "Better get brushing!"
    } else if (sum < 4) {
      risk = "low";
      comment = "Keep it up!"
    } else {
      risk = "medium"
      comment = "Not too bad"
    }
    console.log(risk)

    document.querySelector('#result').textContent = `You are at a ${risk} risk. ${comment}`
    document.querySelector('#result').appendChild(document.createElement('hr'))
    const image = document.createElement('img')
    image.src = 'https://res.cloudinary.com/djuip85dc/image/upload/c_scale,w_463/v1660129187/Toothbags_gur2ec.png'
    document.querySelector('#result').appendChild(image)

  })


  return (
    <section className="index-page">
      <div className="header">
        <h3 className="header-title">How likely are you to get tooth decay?</h3>
        <p className="survey-subtitle">Complete the quiz below and find out!</p>
      </div>
      <div>{<Survey model={survey} />}
        <div id="result"> 
          <div></div>
          
        </div>
      </div>

      <Footer />
    </section>
  )
}



export default Questionnaire
