import React, {Component} from 'react'
import ReactDOM from 'react-dom';

const tasks = [
	{
		 text: "<h1>Pirmoji užduotis:</h1> <br/><br/>Kairėje matote jau parašytą tekstą - tai komentarai. Komentarai yra linijos prasidedančios dvejais pasviraisiais brūkšniukais. Komentarai programos nekeičia nes kompiuteris juos ignoruoja.  Susipažinkime su kintamaisiais. Kintamieji tai yra tam tikra informacija su kuria kompiuteris gali dirbti. Jie yra rašomi taip:<br/><br/>  <font color='#d35400'> var </font> kintamojoVardas = <font color='#e74c3c'> 42</font>;  <br/><br/> <b>Pabandytike tai parašyti patys ir paspaukite mygtuką \"Vykdyti\". </b>",
		 output: "",
		 variables: ["kintamojoVardas=42"]
	},
	{
		 text: "<h1>Antroji užduotis:</h1><br/><br/>Praeitoje užduotyje išmokome kas yra kintamieji,šioje užduotyje vieną pabandysime pasirašyti patys.Javascript kalboje yra daug rūšių kintamųjų, bet šioje pamokoje išmoksime du pagrindinius - skaičiųir tekstą. Jie yra aprašomi taip:<br/></br><font color='#d35400'> var </font> skaicius = <font color='#e74c3c'> 1</font>;<br/><font color='#d35400'> var </font> tekstas = <font color='#27ae60'>\"sveikas pasauli\"</font>;<b><br/><br/>Išsirinkite vieną ir pabandykite susikurti dar vieną kintamajį.</b>",
		 output: "",
		 variables: [""]
	},
	{
		 text: "<h1>Trečioji užduotis:</h1><br/><br/>Šioje užduotyje mokinsimės išvestiinformaciją į ekraną. Tą darysimepasinudodami <font color='#e67e22'>console.</font><font color='#3498db'>log()</font> funkcija.<br/>Ją reikia naudoti taip:<br/><br/><font color='#e67e22'>console.</font><font color='#3498db'>log(</font><font color='#27ae60'>\"jūsų tekstas\"</font><font color='#3498db'>)</font>;<br/><font color='#e67e22'>console.</font><font color='#3498db'>log(</font><font color='#e74c3c'>5</font><font color='#3498db'>)</font>;<font color='#d35400'><br/><br/> var </font> kintamasis = <font color='#e74c3c'> 10 </font>;<font color='#e67e22'></br>console.</font><font color='#3498db'>log(</font>kintamasis<font color='#3498db'>)</font>;<b></br></br>Jusų užduotis yra išvesties ekrane  parodyti tekstą <font color='#27ae60'>\"Sveikas pasauli!\"</font>.</b>",
		 output: 'Sveikas pasauli!',
		 variables: []
	},
	{
		text: '<b>Jūs pabaigėte mūsų kursą. Dėkojame, jog naudojatės mūsų paslauga. </b><br/><br/> <div class="ui icon mailing" style="color: #27ae60;text-align: center"><i class="massive checkmark icon" style="color: #27ae60"></i></div> ',
		output: "some random shit",
		variables: ["more=", "random===", "shit=2125="]
	}
];

export default tasks;
