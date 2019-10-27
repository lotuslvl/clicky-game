import React, { Component } from "react";
import AvatarCard from "./components/AvatarCard";
import Wrapper from "./components/Wrapper/index.js";
import Title from "./components/Title";
import characters from "./characters.json";
import Score from "./components/Score";
import Message from "./components/Message";

class App extends Component {

  state = {
    characters,
    marked : 2,
    resultMessage: "Click on each character once. If you click on one twice, you lose!",
    score : 0,
    topScore: 0
  };

//once everything is all locked & loaded, we gotta roll the dice!
componentDidMount(){
  this.setState({characters: this.randomize(this.state.characters)});
}

//randomize an array to shuffle the order of the cards.
randomize = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

    //On each click of a card...
  markCharacter = id => {

  
        if (this.state.marked % id === 0) {
    
          this.setState({
          marked : 2, 
          score : 0, 
          resultMessage: "You guessed wrong."})
   

        this.randomize(this.state.characters);  

  
      } else {

         if (this.state.score === this.state.topScore) {
          this.setState({
            topScore: this.state.score + 1
          })
        }       
       
        this.setState({
    
          marked: this.state.marked * id,
   
          score: this.state.score + 1,
    
          resultMessage: "You got it right!"
        })

 
        this.randomize(this.state.characters);  

    }
  };

 
  render() {
    return (
      <Wrapper>
        <Title>Avatar Memory Game</Title>
        <Message>{this.state.resultMessage}</Message>
        <Score>Your Score: {this.state.score}  || Best Score: {this.state.topScore}</Score>
        {this.state.characters.map(character => (
          <AvatarCard
            markCharacter={this.markCharacter}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
