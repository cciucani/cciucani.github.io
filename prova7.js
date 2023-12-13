define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Carriera', //Will appear in the data.
			title : {
				media : {word : 'Carriera'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'Carriera'},
				{word: 'Azienda'},
				{word: 'Stipendio'},
				{word: 'Ufficio'},
				{word: 'Professionista'},
				{word: 'Management'},
				{word: 'Business'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Famiglia', //Will appear in the data.
			title : {
				media : {word : 'Famiglia'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects 
           	{word: 'Nozze'},
				{word: 'Matrimonio'},
				{word: 'Genitori'},
				{word: 'Parenti'},
				{word: 'Famiglia'},
				{word: 'Casa'}, 
				{word: 'Bambini'} 
      ], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		},
		attribute1 :
			{
				name : 'Maschio',
				title : {
					media : {word : 'Maschio'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
{word: 'Marco'},
				{word: 'Paolo'},
				{word: 'Daniele'},
				{word: 'Giovanni'},
				{word: 'Giuseppe'}
			],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Femmina',
				title : {
					media : {word : 'Femmina'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'Rebecca'},
				{word: 'Michela'},
				{word: 'Francesca'},
				{word: 'Giulia'},
				{word: 'Anna'}
			],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			leftKeyText : 'Premi "E" per', 
			rightKeyText : 'Premi "I" per', 
			keysCss : {'font-size':'0.8em', 'font-family':'courier', color:'#000000'},
			//Text and style for the separator between the top and bottom category labels.
			orText : 'o', 
			orCss : {'font-size':'1.8em', color:'#000000'},
			finalText : 'Premi la barra spaziatrice per iniziare',
			
		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Del blockNum av nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Metti un dito della mano sinistra sul tasto <b>E</b> per le voci che appartengono alla categoria <font color="#336600">leftCategory</font>. ' +
				'<br/>Metti un dito della mano destra sul tasto <b>I</b> per le voci che appartengono alla categoria <font color="#336600">rightCategory</font>.<br/>' +
				'Le voci compariranno una alla volta.<br/><br/>' +
				'Se sbagli apparir una <font color="#ff0000"><b>X</b></font> rossa. ' +
				'Premi l'altro tasto per continuare.<br/>' +
				'<u>Vai pi veloce che puoi </u> cercando di non sbagliare.<br/><br/></p>'+
				'<p align="center">Premi la <b>barra spaziatrice</b> per iniziare.</font></p></div>',
				
		instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Del blockNum av nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Legg venstre finger på <b>E</b> tasten for objekter som tilhører kategorien <font color="#0000ff">leftAttribute.</font>' +
				'<br/>Legg høyre finger på <b>I</b> tasten for objekter som tilhører kategorien <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
				'Hvis du gjør feil vil en rød <font color="#ff0000"><b>X</b></font> vises. ' +
				'Trykk på den andre tasten for å fortsette..<br/>' +
				'<u>Gjennomfør så raskt du kan </u> mens du er så nøyaktig som mulig..<br/><br/></p>'+
				'<p align="center">Trykk på <b>mellomromstasten</b> når du er klar til å starte.</font></p></div>',		
				
		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Del blockNum av nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Bruk <b>E</b> tasten for <font color="#336600">leftCategory</font> og for <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Bruk <b>I</b> tasten for <font color="#336600">rightCategory</font> og for  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Hvert objekt tilhører bare en kategori.<br/><br/>' +
				'Hvis du gjør feil vil en rød <font color="#ff0000"><b>X</b></font> vises. ' +
				'Trykk på den andre tasten for å fortsette.<br/>' + 
				'<u>Gjennomfør så raskt du kan </u> mens du er så nøyaktig som mulig.<br/><br/></p>' +
				'<p align="center">Trykk på <b>mellomromstasten</b> når du er klar til å starte.</font></p></div>',
		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Del blockNum av nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Dette er det samme som den forrige delen.<br/>' +
				'Bruk <b>E</b> tasten for <font color="#336600">leftCategory</font> og for <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Bruk <b>I</b> tasten for <font color="#336600">rightCategory</font> og for  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Hvert objekt tilhører bare en kategori.<br/><br/>' +
				'<u>Gjennomfør så raskt du kan </u> mens du er så nøyaktig som mulig.<br/><br/></p>' +
				'<p align="center">Trykk på <b>mellomromstasten</b> når du er klar til å starte.</font></p></div>',
		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Del blockNum av nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Pass på, kategoriene har byttet posisjon!</b><br/>' +
				'Legg venstre finger på <b>E</b> tasten for <font color="#336600">leftCategory</font>.<br/>' +
				'Legg høyre finger på <b>I</b> tasten for <font color="#336600">rightCategory</font>.<br/><br/>' +
				'<u>Gjennomfør så raskt du kan </u> mens du er så nøyaktig som mulig.<br/><br/></p>' +
				'<p align="center">Trykk på <b>mellomromstasten</b> når du er klar til å starte.</font></p></div>',	
		remindErrorText : '<p align="center" style="font-size:"0.6em"; font-family:arial">' +
			'Hvis du gjør feil så vil en rød <font color="#ff0000"><b>X</b></font> vises. ' +
			'Trykk den andre tasten for å fortsette.<p/>',
	});
});
