//XTRA

var attributesArray=[
	"id",
	"onclick",
	"class"
];

//XTRA



//VARS

	var usernameVar
	var timeSeconds
	var timerHeight=100;
	var timerMarginTop=0;
	//var randomWord=words[Math.floor(Math.random()*words.length)];
	var focusVar=1;

//VARS



//ALL ELEMENTS

	var lingoContainer=document.getElementById("lingo-container");
	var startBtn=document.getElementById("startBtn");
	var uitlegBtn=document.getElementById("uitlegBtn");
	var usernameBtn=document.getElementById("usernameBtn");

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

	for (a=1;a<6;a++) {
		for (i=1;i<6;i++) {
			var letter=document.createElement("input");
			letter.setAttribute("id", a+"letter"+i);
			letter.setAttribute("onkeydown", "nextLetter()")
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
	var gameOverText=document.createTextNode("Helaas, je tijd is om. Wil je opnieuw proberen?");
	var timerUitlegText=document.createTextNode("Zodra je op de start knop drukt, gaat de timer af");
	var usernamePText=document.createTextNode(usernameVar);
	var quitBtnText=document.createTextNode("Stop");
	var quitext=document.createTextNode("Weet je zeker dat je wilt stoppen?");
	var quitConfirm=document.createTextNode("Ja");
	var quitCancel=document.createTextNode("Nee");

	var option30sText=30;
	var	option60sText=60;
	var option90sText=90;

//TEXTNODES



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
	quitBtn.setAttribute("onclick", "twoBtnModalStyle('block', quitext, quitConfirm, quitCancel)");

	twoBtnModal.setAttribute("id", "twoBtnModal");
	twoBtnModal.setAttribute("class", "hide");

	twoBtnModalText.setAttribute("id", "twoBtnModalText");

	twoBtnDiv.setAttribute("id", "twoBtnDiv");

	btnOne.setAttribute("id", "btnOne");
	btnOne.setAttribute("onclick", "twoBtnModalStyle('hide')");

	btnTwo.setAttribute("id", "btnTwo");
	btnTwo.setAttribute("onclick", "twoBtnModalStyle('hide')");

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

//APPENDING



//FUNCTIONS

	function reset() {

		document.getElementsByClassName("block").className="hide";
		startLingo();

	}

	function nextLetter() {

		document.getElementById("1letter"+focusVar).focus();
		focusVar++;

	}

	function oneBtnModalStyle(className, text, btnText) {
		
		oneBtnModal.className=className;
		oneBtnModalText.innerHTML=text.textContent;
		backB.innerHTML=btnText.textContent;

	}

	function twoBtnModalStyle(className, text, btnOneText, btnTwoText) {

		twoBtnModal.className=className;
		twoBtnModalText.innerHTML=text.textContent;
		btnOne.innerHTML=btnOneText.textContent;
		btnTwo.innerHTML=btnTwoText.textContent;

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

	function createUsername() {

		if (usernameInput.value=="Enter username"||usernameInput.value=="") {

			oneBtnModalStyle("block", naamFout, backText);

		}

		else {

			usernameVar=usernameInput.value;
			usernameStartDis.innerHTML="succes "+usernameVar;

			usernameStartDis.className="block";
			usernameInput.className="hide";
			usernameCreate.className="hide";
			usernameBtn.className="hide";

			uitlegBtn.style.borderRadius="40px 10px 40px 10px";

		}

	}

	function removeStart(functionName) {
		
		startBtn.className="hide";
		uitlegBtn.className="hide";
		usernameBtn.className="hide";
		usernameInput.className="usernameInputHide";
		usernameCreate.className="usernameInputHide";
		usernameStartDis.className="hide";
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

		shield.className="hide";
		startTimerBtn.className="hide";

		document.getElementById("1letter1").focus();

		var balkInterval=setInterval(

			function() {
				timerHeight=timerHeight-0.1;
				timerMarginTop=timerMarginTop+1.4;

				timerBalk.style.height=timerHeight+'%';
				timerBalk.style.marginTop=timerMarginTop+'%';

				if (timerHeight<0) {
					timerBalk.className="hide";
					twoBtnModalStyle("block", gameOverText, quitCancel, quitConfirm);
					clearInterval(balkInterval);
				}

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
				}


			}
		,
				1000)

	}

	function startLingo() {
		
		console.log(timeSeconds+" second game started");
		
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