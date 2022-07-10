import React from 'react'
import One from '../Capture1.PNG';
import Two from '../Capture2.PNG';


export const About = () => {
    let myStyle = {
        color: "white",
        backgroundColor: "#404286",
        padding: "10px",
        fontFamily: "Georgia ",
      };
    let imgStyle = {
        margin: "30px",
        borderRadius: "10px",
        border: "2px solid black"
      }
    return (
        <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
         backgroundSize: 'cover',
         backgroundRepeat  : 'no-repeat' }}> 
            <p style={myStyle}>A list that consists of everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. By keeping such a list, you make sure that your tasks are written down all in one place so you don't forget anything important.</p>
            <img style={imgStyle} src={One} alt="" width="80%"/>
            <img style={imgStyle} src={Two} alt="" width="80%"/>

        </div>
    )
}


// style = {{ backgroundImage: `url(${imgUrl})`,
//                 backgroundSize: 'cover', 
//                 backgroundPosition: 'center center',
//                 backgroundRepeat: 'no-repeat',
//               }}