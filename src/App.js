import React, { Component } from 'react';
import Header from './Components/Header';
import characters from "./characters.json";
import Image from "./Components/Image";


class App extends Component {

  state = {
    characters,
    score: 0
  };

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
      const updatedCharacters = 
      this.state.characters.map(character => {
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
          this.setState({
            score: 0,
            // go through all characters and update click property to false
            // shuffle updated characters
            characters: this.shuffleCharacters(updatedCharacters)
          })
          window.location.reload();
        }
      }
      console.log(this.state.score);
        return updatedCharacters

  };

  render() {
    return (
      <div className="App">

        <Header score={this.state.score}/>

        <div className="imageGrid">
          {this.state.characters.map(character => (
            <Image
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              handleClick={this.handleImageClick}
            />
          ))}
        </div>

      </div>

    );
  }
}

export default App;
