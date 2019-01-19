


//IMPORTANT VARS

	var usernameVar
	var timeSeconds
	var timerHeight=100;
	var timerMarginTop=0;
	var randomWord=words[Math.floor(Math.random()*words.length)];
	var randomSplit=randomWord.split('');
	var randomSplitCheck;
	var good=0;
	var focusVar=1;
	var row=1;
	var timerPause=true;
	var letters=[
	 "a",
	 "b",
	 "c",
	 "d",
	 "e",
	 "f",
	 "g",
	 "h",
	 "i",
	 "j",
	 "k",
	 "l",
	 "m",
	 "n",
	 "o",
	 "p",
	 "q",
	 "r",
	 "s",
	 "t",
	 "u",
	 "v",
	 "w",
	 "x",
	 "y",
	 "z"
];
	var chance=1;

//IMPORTANT VARS



//ALL ELEMENTS

	var lingoContainer=document.getElementById("lingo-container");
	var startBtn=document.getElementById("startBtn");
	var uitlegBtn=document.getElementById("uitlegBtn");
	var usernameBtn=document.getElementById("usernameBtn");
	var info=document.getElementById("info");
	var audio=document.getElementById("audio");
	var volumeslider=document.getElementById("volume");
	var chances=document.getElementById("chances");

	var oneBtnModal=document.createElement("div");
	var oneBtnModalText=document.createElement("p");
	var backB=document.createElement("button");
	var usernameInput=document.createElement("input");
	var usernameCreate=document.createElement("button");
	var usernameStartDis=document.createElement("p");
	var chooseTime=document.createElement("p");
	var option30s=document.createElement("button");
	var option60s=document.createElement("button");
	var option90s=document.createElement("button");
	var timer=document.createElement("div");
	var timerBalk=document.createElement("div");
	var secondsLeft=document.createElement("p");
	var lingoBox=document.createElement("div");
	var startTimerBtn=document.createElement("button");
	var shield=document.createElement("div");
	var usernameP=document.createElement("p");
	var quitBtn=document.createElement("button");
	var twoBtnModal=document.createElement("div");
	var twoBtnModalText=document.createElement("p");
	var twoBtnDiv=document.createElement("div");
	var btnOne=document.createElement("button");
	var btnTwo=document.createElement("button");
	var infoModal=document.createElement("div");
	var infoXpText=document.createElement("p");
	var closeInfo=document.createElement("button");

	for (a=1;a<6;a++) {
		for (i=1;i<6;i++) {
			var letter=document.createElement("input");
			letter.setAttribute("id", a+"letter"+i);
			letter.setAttribute("maxlength", "1");
			letter.setAttribute
			lingoBox.appendChild(letter);
		}
	}

//ALL ELEMENTS



//TEXTNODES

	var naamFout=document.createTextNode("Dit is niet een geldige username.")
	var uitlegText=document.createTextNode("In Lingo krijg je 5 kansen om een woord te raden binnen een tijd. Als dat lukt heb je gewonnen, zoniet dan heb je verloren.");
	var backText=document.createTextNode("Terug");
	var okText=document.createTextNode("Oke");
	var userCreatext=document.createTextNode("Maak aan");
	var confirm=document.createTextNode("weet je zeker dat je wilt beginnnen?")
	var chooseTimeText=document.createTextNode("Kies hoeveel tijd in seconden je wilt om een woord te raden.");
	var startTimerBtnText=document.createTextNode("Start");
	var gameOverText=document.createTextNode("Helaas, je tijd is om. Het woord was "+randomWord+". Wil je opnieuw proberen?");
	var timerUitlegText=document.createTextNode("Zodra je op de start knop drukt, gaat de timer af");
	var quitBtnText=document.createTextNode("Stop");
	var quitext=document.createTextNode("Weet je zeker dat je wilt stoppen?");
	var quitConfirm=document.createTextNode("Ja");
	var quitCancel=document.createTextNode("Nee");
	var loseText=document.createTextNode("Je hebt geen kansen meer. Het woord was "+randomWord+". Probeer nog eens!");
	var wintextUsername=document.createTextNode("Gefeliciteerd je hebt gewonnen. Wil je opnieuw spelen?");
	var winonchance=document.createTextNode("Whoa je hebt de woord in een keer geraden! Doe dat is nog een keer.");
	var bestXperience=document.createTextNode("Voor de beste ervaring zou ik je aanraden om in te zoomen totdat de lingo jouw scherm vult, het is klein gemaakt omdat de lingo dan in alle schermen past. Ik zou ook aanraden om in fulscreen te spelen (druk op F11), dan staan de URL en al je tabbladen niet in de weg, en deze Lingo is geoptimaliseerd voor Google Chrome web browser, dus werkt het niet goed bij andere browsers.");

	var option30sText=30;
	var	option60sText=60;
	var option90sText=90;

//TEXTNODES



//EVENTLISTERNERS

volumeslider.addEventListener("change", volumeChange);

//EVENTLISTERNERS



//ATTRIBUTES

	oneBtnModal.setAttribute("id", "oneBtnModal");
	oneBtnModal.setAttribute("class", "hide");

	backB.setAttribute("id", "backB");
	backB.setAttribute("class", "block");
	backB.setAttribute("onclick", "oneBtnModalStyle('hide')");

	oneBtnModalText.setAttribute("id", "oneBtnModalText");

	usernameInput.setAttribute("id", "usernameInput");
	usernameInput.setAttribute("class", "usernameInputHide");
	usernameInput.setAttribute("value", "Enter username");
	usernameInput.setAttribute("onclick", "usernameInput.value=null; usernameInput.style.fontSize='30px'");

	usernameCreate.setAttribute("id", "usernameCreate");
	usernameCreate.setAttribute("class", "usernameInputHide");
	usernameCreate.setAttribute("onclick", "createUsername()");

	usernameStartDis.setAttribute("id", "usernameStartDis");
	usernameStartDis.setAttribute("class", "hide");

	chooseTime.setAttribute("id", "chooseTime");
	chooseTime.setAttribute("class", "hide");

	option30s.setAttribute("id", "option30s");
	option30s.setAttribute("class", "hide");
	option30s.setAttribute("onclick", "sendTime(option30sText)");

	option60s.setAttribute("id", "option60s");
	option60s.setAttribute("class", "hide");
	option60s.setAttribute("onclick", "sendTime(option60sText)");

	option90s.setAttribute("id", "option90s");
	option90s.setAttribute("class", "hide");
	option90s.setAttribute("onclick", "sendTime(option90sText)");

	timer.setAttribute("id", "timer");
	timer.setAttribute("class", "hide");

	timerBalk.setAttribute("id", "timerBalk");

	secondsLeft.setAttribute("id", "secondsLeft");
	secondsLeft.setAttribute("class", "hide");

	lingoBox.setAttribute("id", "lingoBox");
	lingoBox.setAttribute("class", "hide");

	startTimerBtn.setAttribute("id", "startTimerBtn");
	startTimerBtn.setAttribute("class", "hide");
	startTimerBtn.setAttribute("onclick", "startTimer()");

	shield.setAttribute("id", "shield");
	shield.setAttribute("class", "hide");

	usernameP.setAttribute("id", "usernameP");
	usernameP.setAttribute("class", "hide");

	quitBtn.setAttribute("id", "quitBtn");
	quitBtn.setAttribute("class", "hide");
	quitBtn.setAttribute("onclick", "twoBtnModalStyle('block', quitext.textContent, quitCancel.textContent, quitConfirm.textContent)");

	twoBtnModal.setAttribute("id", "twoBtnModal");
	twoBtnModal.setAttribute("class", "hide");

	twoBtnModalText.setAttribute("id", "twoBtnModalText");

	twoBtnDiv.setAttribute("id", "twoBtnDiv");

	btnOne.setAttribute("id", "btnOne");
	btnOne.setAttribute("onclick", "twoBtnModalStyle('hide')");

	btnTwo.setAttribute("id", "btnTwo");
	btnTwo.setAttribute("onclick", "location.reload()");

	infoModal.setAttribute("id", "infoModal");
	infoModal.setAttribute("class", "hide");

	infoXpText.setAttribute("id", "infoXpText");

	closeInfo.setAttribute("id", "closeInfo");
	closeInfo.setAttribute("onclick", "infoShow('hide')")

//ATTRIBUTES



//APPENDING

	lingoContainer.appendChild(oneBtnModal);
	lingoContainer.appendChild(usernameInput);
	lingoContainer.appendChild(usernameCreate);
	lingoContainer.appendChild(usernameStartDis);
	lingoContainer.appendChild(chooseTime);
	lingoContainer.appendChild(option30s);
	lingoContainer.appendChild(option60s);
	lingoContainer.appendChild(option90s);
	lingoContainer.appendChild(secondsLeft);
	lingoContainer.appendChild(timer);
	lingoContainer.appendChild(lingoBox);
	lingoContainer.appendChild(startTimerBtn);
	lingoContainer.appendChild(shield);
	lingoContainer.appendChild(usernameP);
	lingoContainer.appendChild(quitBtn);
	lingoContainer.appendChild(twoBtnModal);
	lingoContainer.appendChild(infoModal);

	oneBtnModal.appendChild(oneBtnModalText);
	oneBtnModal.appendChild(backB);
	backB.appendChild(backText);
	usernameCreate.appendChild(userCreatext);
	chooseTime.appendChild(chooseTimeText);
	timer.appendChild(timerBalk);
	startTimerBtn.appendChild(startTimerBtnText);
	quitBtn.appendChild(quitBtnText);
	twoBtnModal.appendChild(twoBtnModalText);
	twoBtnDiv.appendChild(btnOne);
	twoBtnModal.appendChild(twoBtnDiv);
	twoBtnDiv.appendChild(btnTwo);
	infoModal.appendChild(infoXpText);
	infoModal.appendChild(closeInfo);

//APPENDING



//FUNCTIONS

	function locateLetter(evt) {

		var letter=document.getElementById(row+"letter"+focusVar);

		if (letters.indexOf(evt.key)==-1&&evt.keyCode!="8"&&evt.keyCode!="13") {

			focusVar--;

		}

		if (evt.keyCode=="8") {

			if (evt.keyCode=="8"&&focusVar==0) {

				evt.preventDefault();

			}

			if (focusVar<=6){
				document.getElementById(row+"letter"+focusVar).focus();
				focusVar--;
			}

		}

		else if (evt.keyCode=="13") {

			if (chance==5) {
			
				timerPause=false;
				timeSeconds++;
				audio.src="audio/lost.mp3";
				twoBtnModalStyle("block", loseText.textContent, quitCancel.textContent, quitConfirm.textContent);
				document.removeEventListener("keydown", locateLetter);
				document.getElementById(row+"letter"+focusVar).blur();

			}

				check();
				chances.className="block";
				chances.innerHTML=chance++;
				row++;
				focusVar=0;
				document.getElementById(row+"letter"+focusVar).focus();

			}
			
		 else {

			if(focusVar<=4) {
				focusVar++;
				document.getElementById(row+"letter"+focusVar).focus();
			}

		}

	}


	
	function check() {

		randomSplitCheck=randomSplit.slice(0);
		var nogTeGaan=[];
		for (i=1;i<6;i++) {

			var letter=document.getElementById(row+"letter"+i);

			if (letter.value==randomSplit[i-1]) {

				letter.style.backgroundColor="rgb(0,255,0)";
				letter.style.textShadow="0 0 0 black";
				randomSplitCheck[i-1]=false;
				good++;

			}

			else {

				nogTeGaan.push(letter);

			}

		}

		for (a=0;a<nogTeGaan.length;a++) {

			var letter=nogTeGaan[a];
			var position=randomSplitCheck.indexOf(letter.value);

			if (position>-1&&letter.value!="") {

				letter.style.backgroundColor="rgb(255,200,0)";
				letter.style.textShadow="0 0 0 black";
				randomSplitCheck[position]=false;

			}

			else {

				letter.style.backgroundColor="rgb(255,0,0)";
				letter.style.textShadow="0 0 0 black";

			}

		}

		if (good==5) {

			if (chance==1) {
				
				timerPause=false;
				timeSeconds++;
				audio.src="audio/win.mp3";
				twoBtnModalStyle("block", winonchance.textContent, quitCancel.textContent, quitConfirm.textContent);
				document.removeEventListener("keydown", locateLetter);
				document.getElementById(row+"letter"+focusVar).blur();
				chances.style.color="gold";
				chances.style.zIndex="3";

			}

			else {

				timerPause=false;
				timeSeconds++;
				twoBtnModalStyle("block", wintextUsername.textContent, quitCancel.textContent, quitConfirm.textContent);
				audio.src="audio/sax.mp3";
				document.getElementById(row+"letter"+focusVar).blur();
				document.removeEventListener("keydown", locateLetter);
				chances.style.color="gold";
				chances.style.zIndex="3";

			}

		}

		good=0;

	}

	function oneBtnModalStyle(className, text, btnText) {
		
		oneBtnModal.className=className;
		oneBtnModalText.innerHTML=text;
		backB.innerHTML=btnText;

	}

	function twoBtnModalStyle(className, text, btnOneText, btnTwoText) {

		twoBtnModal.className=className;
		twoBtnModalText.innerHTML=text;
		btnOne.innerHTML=btnOneText;
		btnTwo.innerHTML=btnTwoText;

	}

	function usernameDisplay() {

		if (usernameInput.className=="usernameInputHide") {

			usernameInput.className="usernameInputShow";
			usernameCreate.className="usernameInputShow";

		}

		else {

			usernameInput.className="usernameInputHide";
			usernameCreate.className="usernameInputHide";

		}
		
	}

	function volumeChange() {
		
		audio.volume=volumeslider.value/100;

	}

	function createUsername() {

		if (usernameInput.value=="Enter username"||usernameInput.value=="") {

			oneBtnModalStyle("block", naamFout.textContent, backText.textContent);

		}

		else {

			usernameVar=usernameInput.value;
			usernameStartDis.innerHTML="succes "+usernameVar;
			usernameP.innerHTML=usernameVar;
			usernameP.style.color="white";

			usernameStartDis.className="block";
			usernameInput.className="hide";
			usernameCreate.className="hide";
			usernameBtn.className="hide";

			uitlegBtn.style.borderRadius="40px 10px 40px 10px";

		}

	}

	function infoShow(classname, text, btn) {

		infoModal.className=classname;
		infoXpText.innerHTML=text;
		closeInfo.innerHTML=btn;

	}

	

	function removeStart(functionName) {
		
		startBtn.className="hide";
		uitlegBtn.className="hide";
		usernameBtn.className="hide";
		usernameInput.className="usernameInputHide";
		usernameCreate.className="usernameInputHide";
		usernameStartDis.className="hide";
		info.className="hide";

		functionName

	}

	function chooseTimeFun() {

		if (usernameInput.value=="Enter username"||usernameInput.value=="") {
			usernameP.style.color="black";
			usernameVar="Gast";
		}
		
		chooseTime.className="block";
		option30s.className="block";
		option60s.className="block";
		option90s.className="block";

		option30s.innerHTML=option30sText;
		option60s.innerHTML=option60sText;
		option90s.innerHTML=option90sText;

	}

	function sendTime(time) {

		timeSeconds=time;
		startLingo();
	}

	function startTimer() {

		audio.src="audio/suspense.mp3";
		shield.className="hide";
		startTimerBtn.className="hide";

		document.getElementById("1letter2").focus();
		document.addEventListener("keydown", locateLetter);	
		var letter=document.getElementById(row+"letter"+focusVar).value;
		document.getElementById("1letter1").value=randomSplit[0];

		timerPause=true;

		var balkInterval=setInterval(

			function() {
				timerHeight=timerHeight-0.1;
				timerMarginTop=timerMarginTop+1.4;

				timerBalk.style.height=timerHeight+'%';
				timerBalk.style.marginTop=timerMarginTop+'%';
			}
		,
			timeSeconds)

		timeSeconds-=1;
		var countdownInterval=setInterval(

			function() {

				secondsLeft.innerHTML=timeSeconds--+':';

				if (timeSeconds<10) {
					timerBalk.style.backgroundColor='rgb(200,0,0)';
					secondsLeft.style.color='rgb(200,0,0)';
				}

				if (timeSeconds<0) {

					clearInterval(countdownInterval);
					timerBalk.className="hide";
					twoBtnModalStyle("block", gameOverText.textContent, quitCancel.textContent, quitConfirm.textContent);
					clearInterval(balkInterval);
					audio.src="audio/lost.mp3";
					document.removeEventListener("keydown", locateLetter);
				}

				if (timerPause!=true) {
					clearInterval(balkInterval);
					clearInterval(countdownInterval);
					
				}


			}
		,
				1000)

	}

	function startLingo() {
		
		console.log(timeSeconds+" second game started");
		audio.src="";

		chooseTime.className="hide";
		option30s.className="hide";
		option60s.className="hide";
		option90s.className="hide";
		usernameInput.className="hide";

		timer.className="block";
		secondsLeft.className="block";
		lingoBox.className="block";
		startTimerBtn.className="block";
		quitBtn.className="block";
		shield.className="block";
		usernameP.className="block";

		shield.innerHTML=timerUitlegText.textContent;
		secondsLeft.innerHTML=timeSeconds+':';
		usernameP.innerHTML=usernameVar;

	}

//FUNCTIONS