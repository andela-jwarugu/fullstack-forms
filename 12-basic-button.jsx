import React, {Component} from 'react';

class BasicButton extends Component {
    constructor(props) {
        super(props);
        this.onGreatClick = this.onGreatClick.bind(this);
        this.onAmazingClick = this.onAmazingClick.bind(this);
    }

    onGreatClick(evt) {
        console.log('User has selected: great', evt)
    }
    
    onAmazingClick(evt) {
        return (evt) => {
            console.log('User has selected: amazing', evt) 
        }
               
    }

    render() {
        return (
            <div>
                <h1> What do you think of React? </h1>
                <button
                    onClick={this.onGreatClick}
                >
                    Great
                </button>
                <button
                    onClick={this.onAmazingClick()}
                >
                    Amazing
                </button>
            </div>
        );
    }
}

export default BasicButton;