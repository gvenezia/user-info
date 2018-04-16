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
            friendsList: ['J T', 'X A', 'C T'],
        }
        
        this.addFriend = this.addFriend.bind(this);
    }
    
    addFriend(friend){
        this.setState( (state) => ({
            friendsList: state.friendsList.concat([friend])
        }));
    }
    
    render() {
        return(
            <div>
                <Greeting name={this.state.name} />
                <br/>
                <AddFriend addFriend={this.addFriend} />
                <ShowFriends friendsList={this.state.friendsList} />
            </div>
        );
  
    };
} // End UserInfo

class AddFriend extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            newFriend: ''
        }
        
        this.updateNewFriend = this.updateNewFriend.bind(this);
        this.handleAddFriend = this.handleAddFriend.bind(this);
        
    }
    
    updateNewFriend(e){
        // Update the newFriend value at every keystroke
        this.setState({
            newFriend: e.target.value
        })
    }
    
    handleAddFriend(){
        // pass the newFriend input to the method on UserInfo 
        this.props.addFriend(this.state.newFriend);
        
        // Clear the input for the next newFriend
        this.setState({
            newFriend: '',
        });
    }
    
    render() {
        return (
            <div>Add a friend name:
                <input
                    type='text'
                    value={this.state.newFriend}
                    onChange={this.updateNewFriend}
                />
                <button onClick={this.handleAddFriend}> Add Friend!</button>
                <br/>
                
            </div>
        );
    }
} // End FriendsContainer

class ShowFriends extends React.Component{
    render() {
        return (
            <div>
                <h3>Friends</h3>
                <ul>
                    {this.props.friendsList.map((currName) => {return <li>{currName}</li>} )}
                </ul>
            </div>
        )
    }
}

function Greeting(props){
    return <h2>Hello, {props.name}!</h2> ;
}

// =============== React DOM Render =========================

ReactDOM.render(<UserInfo />, document.getElementById('root'));
registerServiceWorker();
