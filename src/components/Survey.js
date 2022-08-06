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

      },
      {
        name: "Second",
        title: "How often do you floss? 🦷",
        type: "radiogroup",
        choices: ["2x day", "1x day in evening", "1x day in morning", "Less than once a day"],

      },
      {
        name: "Third",
        title: "Do you go for regular dental checkups? 🔍",
        type: "radiogroup",
        choices: ["Yes", "No"],

      },
      {
        name: "Fourth",
        title: "Do you have a sweet tooth? 🍬",
        type: "radiogroup",
        choices: ["No", "Yes but I control myself", "YES"],

      },
      {
        name: "Fifth",
        title: "Do you have any fillings? 🛠",
        type: "radiogroup",
        choices: ["No", "Yes 1 or 2", "Yes- multiple"],

      }

    ],

  }

  const survey = new Model(surveyJson)
  survey.focusFirstQuestionAutomatic = false

  return (
    <section>
      <div className="container">
        <br />
        <h1 className="title is-1 has-text-centered has-text-success-dark">How likely are you to get tooth decay?</h1>
        <p className="subtitle is-3 has-text-centered has-text-success-dark">Find out your risk of getting decay</p>
        <body>{<Survey model={survey} />}</body>

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