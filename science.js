define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Maschio', //Will appear in the data.
			title : {
				media : {word : 'Maschio'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            		{word: 'Luca'},
			{word: 'Federico'},
			{word: 'Matteo'},
			{word: 'Alberto'},
			{word: 'Davide'},
			{word: 'Alessandro'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Femmina', //Will appear in the data.
			title : {
				media : {word : 'Femmina'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects 
           		{word: 'Anna'},
			{word: 'Martina'},
			{word: 'Laura'},
			{word: 'Giulia'},
			{word: 'Chiara'},
			{word: 'Alessia'}
      ], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		attribute1 :
			{
				name : 'Scientifico',
				title : {
					media : {word : 'Scientifico'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Matematica'},
					{word: 'Fisica'},
					{word: 'Scienze'},
					{word: 'Chimica'},
					{word: 'Ingegneria'},
          {word: 'Calcolo'}
			],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Umanistico',
				title : {
					media : {word : 'Umanistico'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
          				{word: 'Lettere'},
					{word: 'Italiano'},
					{word: 'Filosofia'},
					{word: 'Letteratura'},
					{word: 'Storia'},
          {word: 'Lingue'}
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
			finalText : 'Premi la barra spaziatrice per continuare alla prossima fase',
			
		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u> Fase blockNum di nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Metti un dito della mano sinistra sul tasto <b>E</b> per le voci che appartengono alla categoria <font color="#336600">leftCategory</font>. ' +
				'<br/>Metti un dito della mano destra sul tasto <b>I</b> per le voci che appartengono alla categoria <font color="#336600">rightCategory</font>.<br/>' +
				'Le voci compariranno una alla volta.<br/><br/>' +
				'Se sbagli apparirà una <font color="#ff0000"><b>X</b></font> rossa. ' +
				'Premi l altro tasto per continuare.<br/>' +
				'<u>Vai più veloce che puoi</u> restando preciso.<br/><br/></p>'+
				'<p align="center">Premi la <b>barra spaziatrice</b> quando sei pronto per continuare.</font></p></div>',
				
		instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Fase blockNum di nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Metti un dito della mano sinistra sul tasto <b>E</b> per le voci che appartengono alla categoria <font color="#0000ff">leftAttribute.</font>' +
				'<br/>Metti un dito della mano destra sul tasto <b>I</b> per le voci che appartengono alla categoria <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
				'Se sbagli apparirà una <font color="#ff0000"><b>X</b></font> rossa. ' +
				'Premi l altro tasto per continuare.<br/>' +
				'<u>Vai più veloce che puoi</u> restando preciso..<br/><br/></p>'+
				'<p align="center">Premi la <b>barra spaziatrice</b> quando sei pronto per continuare.</font></p></div>',		

		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Fase blockNum di nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Usa il tasto <b>E</b> per <font color="#336600">leftCategory</font> e per <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Usa il tasto <b>I</b> per <font color="#336600">rightCategory</font> e per <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Ogni voce appartiene solo a una categoria.<br/><br/>' +
				'Se sbagli apparirà una <font color="#ff0000"><b>X</b></font> rossa. ' +
				'Premi l altro tasto per continuare.<br/>' + 
				'<u>Vai più veloce che puoi </u> restando preciso.<br/><br/></p>' +
				'<p align="center">Premi la <b>barra spaziatrice</b> quando sei pronto per continuare.</font></p></div>',    
		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Fase blockNum di nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Questa fase è uguale alla precedente.<br/>' +
				'Usa il tasto <b>E</b> per <font color="#336600">leftCategory</font> e per <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Usa il tasto <b>I</b> per <font color="#336600">rightCategory</font> e per  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Ogni voce appartiene solo a una categoria.<br/><br/>' +
				'<u>Vai più veloce che puoi</u> restando preciso.<br/><br/></p>' +
				'<p align="center">Premi la <b>barra spaziatrice</b> quando sei pronto per continuare.</font></p></div>',
		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Fase blockNum di nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Attenzione, le categorie hanno cambiato posizione!</b><br/>' +
				'Metti un dito della mano sinistra sul tasto <b>E</b> per <font color="#336600">leftCategory</font>.<br/>' +
				'Metti un dito della mano destra sul tasto <b>I</b> per <font color="#336600">rightCategory</font>.<br/><br/>' +
				'<u>Vai più veloce che puoi</u> restando preciso.<br/><br/></p>' +
				'<p align="center">Premi la <b>barra spaziatrice</b> quando sei pronto per continuare.</font></p></div>',	
		remindErrorText : '<p align="center" style="font-size:"0.6em"; font-family:arial">' +
			'Se sbagli apparirà una <font color="#ff0000"><b>X</b></font> rossa. ' +
		  	'Premi l altro tasto per continuare.<p/>',
	});
});
