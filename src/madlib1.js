import React from "react";

const MadLibForm = (props) => (
  <form>
    <label for="noun">Noun: </label>
    <input type="text" id="noun" placeholder="enter a noun"
      value={props.noun}
      onChange={props.onChangeForStateKey("noun")} />
    <br />
    <label for="verb">Verb: </label>
    <input type="text" id="verb" placeholder="enter a verb"
      value={props.verb}
      onChange={props.onChangeForStateKey("verb")} />
    <br />
    <label for="adjective">Adjective: </label>
    <input type="text" id="adjective" placeholder="enter an adjective"
      value={props.adjective}
      onChange={props.onChangeForStateKey("adjective")} />
    <br />
    <button type="button" disabled>Randomize</button>
    <button onClick={props.onSubmit}> Submit </button>
  </form>
);

const MadLibStory = (props) => (
  <div>
    Sally {props.verb} to the {props.noun}<br /> 
    while feeling {props.adjective}
    <br />
    <button onClick={props.onTryAgain}> try again </button>
  </div>
);

class MadLib1 extends React.Component {
  constructor() {
    super();
    this.state = {
      isInputMode: true,
      noun: "",
      adjective: "",
      verb: "",
    };
  }

  onChangeForStateKey = stateKey => e => {
      this.setState({[stateKey]: e.target.value});
  };

  onSubmit = e => {
    this.setState({
      isInputMode: false,
    })
  }

  onTryAgain = e => {
    this.setState({
      isInputMode: true,
      verb: "",
      adjective: "",
      noun: "",
    })
  }
  
  render() {
    const { noun, verb, adjective } = this.state
    return (
      <div>
      {this.state.isInputMode ? (
        <MadLibForm
          onSubmit={this.onSubmit}
          onChangeForStateKey={this.onChangeForStateKey}
          noun={noun}
          verb={verb}
          adjective={adjective}
        /> 
      ) : (
        <MadLibStory
          verb={verb}
          noun={noun}
          adjective={adjective}
          onTryAgain={this.onTryAgain}
        />
      )}
      </div>
    )
  }
}

export default MadLib1