// * BUILDING A CLASS COMPONENT *//

// Step One: import React, { Component } from 'react;
import React, { Component } from 'react';

// Step Two: Build your component with a JS class, and have it extend
// the Component class from React
class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            pictureInput: '',
            nameInput: '',
            friends: []
        }
    }

    handlePictureInput(event){
        this.setState({ pictureInput: event.target.value })
    }

    handleNameInput(event){
        this.setState({ nameInput: event.target.value })
    }

    addFriend(){
        let newFriends = this.state.friends.slice()
        newFriends.push({ picture: this.state.pictureInput, name: this.state.nameInput })

        this.setState({ friends: newFriends, pictureInput: '', nameInput: '' })
    }

    // Step Three: Use render to display some JSX (this is REQUIRED)
    render(){
        // console.log(this.state)
        // console.log(this.state.nameInput)
        // console.log(this.state.friends)

        return (
            <section>
                <span>Picture:</span>
                <input value={this.state.pictureInput} onChange={event => this.handlePictureInput(event)} />
                <span>Name:</span>
                <input value={this.state.nameInput} onChange={event => this.handleNameInput(event)} />
                <button onClick={() => this.addFriend()}>Add Friend</button>
                { this.state.friends.map((element, index) => (
                    <div key={index}>
                        <img src={element.picture} alt={element.name} />
                        <p>{element.name}</p>
                    </div>
                )) }
            </section>
        )
    }
}

// Step Four: Export your component to make it available to your application
export default ClassComponent;

// Mini Project Notes

// Element Structure
// Span, Input, Span, Input, Button

// Track user input for a picture url and a name (through events)

// When user clicks the button, it adds that friend to a friends list
// and displays the friends list on the screen

// Data
// pictureInput - empty string
// nameInput - empty string
// friends - array

// friend - object (contain a picture and name property)