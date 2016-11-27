import React, {Component} from 'react'
import ReactDOM from 'react-dom';

const tasks = [
	{
		 text: "<div> works </div>",
		 output: "",
		 variables: ["x=5"]
	},
	{
		 text: "Ayyyyy, Antra pamoka",
		 output: "",
		 variables: ["x=5", ""]
	},
	{
		 text: "Ayyyy, Trecia pamoka",
		 output: 'lhs',
		 variables: []
	},
	{
		text: "<b> Jūs pabaigėte mūsų kursą. Dėkojame, jog naudojatės mūsų paslauga. </b>",
		output: "some random shit",
		variables: ["more=", "random===", "shit=2125="]
	}
];

export default tasks;
