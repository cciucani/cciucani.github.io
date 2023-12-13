define(['pipAPI', 'https://'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Carriera', //Will appear in the data.
			title : {
				media : {word : 'Carriera'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
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
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
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
    
    leftKeyText : 'Premi <b>E</b> per', 
			rightKeyText : 'Premi <b>I</b> per', 
			keysCss : {'font-size':'0.8em', 'font-family':'courier', color:'#000000'},
			//Text and style for the separator between the top and bottom category labels.
			orText : 'o', 
			orCss : {'font-size':'1.8em', color:'#000000'},
			finalText : 'Premi la <b>barra spaziatrice<b> per continuare alla prossima fase',
			
		instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Metti un dito della mano sinistra sul tasto <b>E</b> per le voci che appartengono alla categoria <font color="#0000ff">leftAttribute.</font>' +
				'<br/>Metti un dito della mano destra sul tasto <b>I</b> per le voci che appartengono alla categoria <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
				'Se sbagli apparirà una <font color="#ff0000"><b>X</b></font> rossa. ' +
				'Premi l'altro tasto per continuare.<br/>' +
				'<u>Vai più veloce che puoi</u> restando preciso.<br/><br/></p>'+
				'<p align="center">Premi la <b>barra spaziatrice</b> quando sei pronto per continuare.</font></p></div>',
				
		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Metti un dito della mano sinistra sul tasto <b>E</b> per le voci che appartengono alla categoria <font color="#336600">leftCategory</font>. ' +
				'<br/>Metti un dito della mano destra sul tasto <b>I</b> per le voci che appartengono alla categoria <font color="#336600">rightCategory</font>.<br/>' +
				'Le voci compariranno una alla volta.<br/><br/>' +
				'Se sbagli apparirà una <font color="#ff0000"><b>X</b></font> rossa.' +
				'Premi l'altro tasto per continuare.<br/>' +
				'<u>Vai più veloce che puoi</u> restando preciso.<br/><br/></p>'+
				'<p align="center">Premi la <b>barra spaziatrice</b> quando sei pronto per continuare.</font></p></div>',
	
		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Usa il tasto <b>E</b> per <font color="#336600">leftCategory</font> e per <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Usa il tasto <b>I</b> per <font color="#336600">rightCategory</font> e per <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Ogni voce appartiene solo a una categoria.<br/><br/>' +
		 		'Se sbagli apparirà una <font color="#ff0000"><b>X</b></font> rossa.' +
				'Premi l'altro tasto per continuare.<br/>' +
				'<u>Vai più veloce che puoi</u> restando preciso.<br/><br/></p>'+
				'<p align="center">Premi la <b>barra spaziatrice</b> quando sei pronto per continuare.</font></p></div>',
		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Questa fase è uguale alla precedente.<br/>' +
				'Usa il tasto <b>E</b> per <font color="#336600">leftCategory</font> e per <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Usa il tasto <b>I</b> per <font color="#336600">rightCategory</font> e per <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Ogni voce appartiene solo a una categoria.<br/><br/>' +
				'<u>Vai più veloce che puoi</u> restando preciso.<br/><br/></p>'+
				'<p align="center">Premi la <b>barra spaziatrice</b> quando sei pronto per continuare.</font></p></div>',
		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Attenzione, le categorie hanno cambiato posizione!</b><br/>' +
				'Metti un dito della mano sinistra sul tasto <b>E</b> per <font color="#336600">leftCategory</font>.<br/>' +
				'Metti un dito della mano destra sul tasto <b>I</b> per <font color="#336600">rightCategory</font>.<br/><br/>' +
				'<u>Vai più veloce che puoi</u> restando preciso.<br/><br/></p>'+
				'<p align="center">Premi la <b>barra spaziatrice</b> quando sei pronto per continuare.</font></p></div>',
		remindErrorText : '<p align="center" style="font-size:"0.6em"; font-family:arial">' +
			 	'Se sbagli apparirà una <font color="#ff0000"><b>X</b></font> rossa. ' +
				'Premi l'altro tasto per continuare.<br/>' +
	});
});
