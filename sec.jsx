import React from 'react'; 
import ReactDOM from 'react-dom'; 

const name = "Learner"; 

const element = <h1>Hello, 
{ name }.Welcome to GeeksforGeeks.</h1>; 

ReactDOM.render( 
	element, 
	document.getElementById("root") 
); 
