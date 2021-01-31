import './App.css';
import React, { Component } from 'react';
import Result from './components/Result/Result';
import Editor from './components/Editor/Editor';

class App extends Component {
    constructor(props){
      super(props);
      this.state={
          textarea: '',
          screen1: false,
          screen2: false
      };
      this.setMarkdown = this.setMarkdown.bind(this);
      this.setScreen1 = this.setScreen1.bind(this);
      this.setScreen2 = this.setScreen2.bind(this);
    }

    setMarkdown(e) {
      this.setState({
          textarea: e.target.value
      });
    }

    setScreen1() {
      this.setState((state)=>{
        return {screen1: !state.screen1};
      });
    }

    setScreen2() {
      this.setState((state)=>{
        return {screen2: !state.screen2};
      });
    }

    render() {
      return (
          <div className="App">
            <h1 className='header'>
              <div className='border'>Markdown Project</div>
            </h1>
              {
                !this.state.screen1 && !this.state.screen2 
                ? <div id='blocks' className='project'>
                    <Editor  setMarkdown={this.setMarkdown} setScreen={this.setScreen1} screen={this.state.screen2}/>
                    <Result value={this.state.textarea} setScreen={this.setScreen2} screen={this.state.screen1}/>
                  </div> 
                : (
                  this.state.screen1 
                  ? <div id='blocks' className='project'>
                      <Editor  setMarkdown={this.setMarkdown} setScreen={this.setScreen1} screen={this.state.screen1} /> 
                    </div>
                  : (
                    this.state.screen2 
                    ? <div id='blocks' className='project'>
                        <Result value={this.state.textarea} setScreen={this.setScreen2} screen={this.state.screen2}/>
                      </div>
                    : <div></div>
                  )
                )
              }
          </div>
      );
    }
}

export default App;
