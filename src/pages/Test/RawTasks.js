import React, {Component} from 'react'
import ReactDOM from 'react-dom';

const tasks = [
	{
		 text: "Pirmoji užduotis\n",
		 output: "",
		 variables: ["x=5"]
	},
	{
		 text: "Antroji užduotis\n\nPraeitoje užduotyje išmokome kas yra kintamieji,\nšioje užduotyje vieną pabandysime pasirašyti patys.\n\nJavascript kalboje yra daug rūšių kintamųjų, bet \nšioje pamokoje išmoksime du pagrindinius - skaičių\nir tekstą. Jie yra aprašomi taip:\n\nvar skaicius = 1;\nvar tekstas = \"sveikas pasauli\";\n\nIšsirinkite vieną ir pabandykite susikurti dar vieną kintamajį.",
		 output: "",
		 variables: ["x=5", ""]
	},
	{
		 text: "Trečioji užduotis:\n\nŠioje užduotyje mokinsimės išvesti\ninformaciją į ekraną. Tą darysime\npasinudodami console.log() funkcija.\nJą reikia naudoti taip:\n\nconsole.log(\"jūsų tekstas\");\nconsole.log(5);\n\nvar kintamasis = 10;\nconsole.log(kintamasis);\n\nJusų užduotis yra išvesties ekrane\nparodyti tekstą \"Sveikas pasauli!\".\n",
		 output: 'Sveikas pasauli!',
		 variables: []
	},
	{
		text: "<b> Jūs pabaigėte mūsų kursą. Dėkojame, jog naudojatės mūsų paslauga. </b>",
		output: "some random shit",
		variables: ["more=", "random===", "shit=2125="]
	}
];

export default tasks;
