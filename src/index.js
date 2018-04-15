// Built with the Tyler McGinnis tutorial found at https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class UserInfo extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: 'Gae',
            friendsList: ['J T', 'X A', 'C T']
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({
            friendsList: this.state.friendsList.push(e.target.value),
        })
    }
    
    render() {
        return(
            <div>
                Hello, {this.state.name}!
                <br/>
                <FriendsContainer 
                    name={this.state.name}
                    friendsList={this.state.friendsList}
                />
            </div>
        );
  
    };
} // End UserInfo

class FriendsContainer extends React.Component {
    render() {
        return (
            <div>Add a friend name:
                <input
                    type='text'
                    value={this.props.name}
                    onChange={this.handleChange}
                />
                <button 
                    type='submit'
                > Add Friend!
                </button>
                <br/>
                <h3>Friends</h3>
                <ul>
                    {this.props.friendsList.map((currName) => {<li>{currName}</li>})}
                    
                    <Friend
                        // key={}
                        friendsList={this.props.friendsList}
                    />
                </ul>
                
            </div>
        );
    }
} // End FriendsList

function Friend(props) {
    return(
        <li></li>
    );
};

// =============== React DOM Render =========================

ReactDOM.render(<UserInfo />, document.getElementById('root'));
registerServiceWorker();
