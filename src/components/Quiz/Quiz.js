import React, { Component } from "react";
import data from "./quiz.json";
import Endscreen from "./Endscreen";
import "./Quiz.css";
import whale from "./whale.png";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      gal: 0,
      right: 0
    };
  }

  onAlternativeClick(alternative) {
    console.log("alternative", alternative);
    const { gal, right, current } = this.state;
    const n = current + 1;

    this.setState({
      response: alternative.response,
      gal: calculateAverage({ last: gal, current: alternative.gal, n }),
      right: calculateAverage({ last: right, current: alternative.right, n })
    });
  }

  onNextClick() {
    const { current } = this.state;

    this.setState({
      current: current + 1,
      response: undefined
    });
  }

  render() {
    const { current, response, gal, right } = this.state;
    const question = data.questions[current];
    let Inner;
    if (!question) {
      Inner = <Endscreen gal={gal} right={right} />;
    } else if (response !== undefined) {
      Inner = (
        <QuestionContainer {...question}>
          <p className="QuizResponse">{response}</p>
          <button className="QuizAlternative" onClick={_ => this.onNextClick()}>
            Exakt!
          </button>
        </QuestionContainer>
      );
    } else {
      Inner = (
        <QuestionContainer {...question}>
          <p className="QuizQuestion">{question.text}</p>
          {/* <div>
            Gal: {gal}, right: {right}
          </div> */}
          {question.alternatives.map(alternative => {
            return (
              <button
                className="QuizAlternative"
                key={alternative.text}
                onClick={_ => this.onAlternativeClick(alternative)}
              >
                {alternative.text}
              </button>
            );
          })}
        </QuestionContainer>
      );
    }
    return (
      <article className="Quiz">
        <h2 className="QuizHeading">
          Valkompisen
          <img src={whale} className="QuizLogo" />
        </h2>
        {Inner}
      </article>
    );
  }
}

const QuestionContainer = props => {
  return (
    <div className="QuizQuestionContainer">
      <img className="QuizImage" src={props.image} alt="" />
      {props.children}
    </div>
  );
};

export function calculateAverage({ last, current, n }) {
  return (last * (n - 1) + current) / n;
}

export default Quiz;
