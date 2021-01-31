import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import './Result.css';
import zoom from './zoom.png';
import exit from './exit.png';

class Result extends Component {
    getButtonStyle = () => {
        let img;
        if(!this.props.screen){
            img=zoom;
        }
        else{
            img=exit;
        }
        return {
            border: "none",
            backgroundColor: "#c3f7dc",
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "15px",
            width: "15px",
            position: "absolute",
            right: 0,
            outline: "none",
            marginTop: "5px",
            marginRight: "5px",
        };
    }
    getContainerStyle = () => {
        let width;
        if(!this.props.screen){
            width="50%";
        }
        else{
            width="100%";
        }
        return {
            border: "1px solid black",
            width: width,
            margin: "40px 40px",
            position: "relative",
            resize: "both",
            overflow: "auto",
            background: "#aef0ce"
        };
    }
    render() {
        const buttonStyle = this.getButtonStyle();
        const containerStyle = this.getContainerStyle();
        return (
           <div className='container' style={containerStyle}>
               <button className='resize' style={buttonStyle} onClick={this.props.setScreen} ></button>
               <h2>Result</h2>
               <div className='text'>
                   <ReactMarkdown plugins={[gfm]} children={this.props.value} />
               </div>
           </div>
        )
    }
}

export default Result;