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
            
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({
            name: e.target.value,
        })
    }
    
    render() {
        return(
            <div>
            Hello, {this.state.name}
            <br/>
            Change name:
                <input
                    type='text'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            </div>
        );
  
    };
    
      
}

// =============== React DOM Render =========================

ReactDOM.render(<UserInfo />, document.getElementById('root'));
registerServiceWorker();
