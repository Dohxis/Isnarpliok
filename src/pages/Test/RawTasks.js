import React, {Component} from 'react'
import ReactDOM from 'react-dom';

const tasks = [
	{
		 text: "Pirmoji užduotis:<br /><br />Kairėje matote jau parašytą tekstą - tai<br />komentarai. Komentarai yra linijos<br />prasidedančios dvejais pasviraisiais<br />brūkšniukais. Komentarai programos<br />nekeičia nes kompiuteris juos ignoruoja.<br /><br />Susipažinkime su kintamaisiais. Kintamieji<br />tai yra tam tikra informacija su kuria<br />kompiuteris gali dirbti. Jie yra rašomi taip:<br /><br />var kintamojoVardas = 42;<br /><br />Pabandytike tai parašyti patys<br />ir paspaukite mygtuką \"Vykdyti\"<br />",
		 output: "",
		 variables: ["kintamojoVardas=42"]
	},
	{
		 text: "Antroji užduotis:<br /><br />Praeitoje užduotyje išmokome kas yra<br />kintamieji, šioje užduotyje vieną<br />pabandysime pasirašyti patys.<br /><br />Javascript kalboje yra daug rūšių<br />kintamųjų, bet šioje pamokoje išmoksime<br />du pagrindinius - skaičių ir tekstą.<br />Jie yra aprašomi taip:<br /><br />var skaicius = 1;<br />var tekstas = \"sveikas pasauli\";<br /><br />Išsirinkite vieną ir pabandykite<br />susikurti dar vieną kintamajį.",
		 output: "",
		 variables: ["x=5", ""]
	},
	{
		 text: "Trečioji užduotis:<br /><br />Šioje užduotyje mokinsimės išvesti<br />informaciją į ekraną. Tą darysime<br />pasinudodami console.log() funkcija.<br />Ją reikia naudoti taip:<br /><br />console.log(\"jūsų tekstas\");<br />console.log(5);<br /><br />var kintamasis = 10;<br />console.log(kintamasis);<br /><br />Jusų užduotis yra išvesties ekrane<br />parodyti tekstą \"Sveikas pasauli!\".<br />",
		 output: 'Sveikas pasauli!',
		 variables: []
	},
	{
		text: "Sveikiname! Jūs baigėte mūsų įvadinį<br />kursą į Javascript. Grįžkite į savo<br />profilį norėdami pasirinkti kitą kursą.",
		output: "some random shit",
		variables: ["more=", "random===", "shit=2125="]
	}
];

export default tasks;
