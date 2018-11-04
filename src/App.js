import React, { Component } from 'react';
import Header from './Components/Header';
import characters from "./characters.json";
import Image from "./Components/Image";
import Wrapper from "./Components/Wrapper";


class App extends Component {

  // connect this.state.characters to characters.json
  state = {
    characters,
    score: 0
  };

  // did the component mount?
  componentDidMount() {
    this.setState({ characters: this.shuffleCharacters(this.state.characters) });
  };

  // shuffles the characters on page reload
  shuffleCharacters = (data) => {
    let i = data.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  };

  handleImageClick = id => {
    let correctClick = false;
      // iterate through characters
      const updatedCharacters = this.state.characters.map(character => {
        // console.log(character);
        const newCharacter = character;
          if (newCharacter.id === id) {
            console.log(newCharacter);
            // who I clicked on
            if (!newCharacter.clicked) {
              newCharacter.clicked = true;
              correctClick = true;
            }
          }
          return newCharacter;
      })
      if (correctClick) {
        const currentScore = this.state.score;
        this.setState({
          score: currentScore + 1, 
          characters: this.shuffleCharacters(updatedCharacters)
        })
      }
      else {
        if (!correctClick) {
          // update setState
          this.setState({
            // reset game. set score to 0
            score: 0,
            // go through all characters and update click property to false
            // shuffle updated characters
            characters: this.shuffleCharacters(updatedCharacters)
          })
          window.location.reload();
        }
      }
      console.log(this.state.score);
      // console.log(correctClick);
      // console.log(updatedCharacters);
        // assign current character to temporary variable to update if needed
        // detect which character was clicked
        // compare id of current character with id of image clicked
        // use map since already loops through array and returns result of that function
        // was this character clicked already?
        // if character clicked is false, make it true
        // make correctGuess = true
        // return updated character object

      // if correctGuess = true, increase score
      // if false, reset score
  };

  // render goes last
  render() {
    return (
      <Wrapper>

        <Header score={this.state.score}/>

        <div className="imageGrid">
          {this.state.characters.map(character => (
            <Image
              id={character.id}
              key={character.id}
              image={character.image}
              handleClick={this.handleImageClick}
            />
          ))}
        </div>


      </Wrapper>
      // end wrapper


    );
  }
}

export default App;
