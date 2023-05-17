import React, { Component } from 'react'
import MyForm from './Form'

class App extends Component {
   state = {
    characters: [],
   }

   removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) =>{
    this.setState({ characters: [...this.state.characters, character]})
  }

  render() {
    const { characters } = this.state

    return (
        <MyForm/>
    )
  }
}

export default App