import React from 'react'
import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from "survey-react-ui";



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
    completedHTML: "Hello",

  }

  const survey = new Model(surveyJson)
  survey.focusFirstQuestionAutomatic = false


  // survey.onComplete.add(function () {
  //   surveyJson.elements.forEach((question) => {
  //     const scores = []
  //     const position = question.choices.indexOf()
  //     scores.push(question.score[position])
  //     let sum = 0
  //     for (let i = 0; i < scores.length; i++) {
  //       sum += scores[i];
  //     }
  //     // return sum
  //     console.log(sum)
  //   })

  // })


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
    let sum = 0
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    console.log(sum)


  })




  return (
    <section>
      <div className="container">
        <br />
        <h1 className="title is-1 has-text-centered has-text-success-dark">How likely are you to get tooth decay?</h1>
        <p className="subtitle is-3 has-text-centered has-text-success-dark">Find out your risk of getting decay</p>
        <div>{<Survey model={survey} />}</div>

      </div>

    </section>

  )
}

export default Questionnaire

// window.survey = new Survey.Model(json);
// survey.onComplete.add(function (sender) {
//   document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
// });
// ReactDOM.render(<SurveyReact.Survey model={survey} />, document.getElementById("surveyElement"));