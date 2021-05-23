import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyToggleComp extends React.Component{

    constructor(props){
      super(props);
      this.state = {isOn:true};
      this.myHandler = this.myHandler.bind(this);
      
    }

    myHandler(){
      this.setState( state => ({
        isOn: !state.isOn
      }
      )
      );
      console.log("yes state is on.");
    }

    render(){
      return(
        <div class="effect">
          
          {
            this.state.isOn ?
            <div><img src="./Happy.jpg"/></div>
            : <div><img src="./Sad.jpg"/></div>
          }
        <button onClick={this.myHandler}>{this.state.isOn ? 'Feeling Sad ?' : 'Feeling Happy ?'}</button>
        </div>
      );
    }
}

ReactDOM.render(
  <MyToggleComp />, document.getElementById('root')
);