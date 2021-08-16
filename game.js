 var money = 0;
	  var gems = 0;
	  var orbs = 0;
	  var hasorb = false;
	  var hasgems = false;
	  var addamount = 1;
	  var buy1amount = 50;
	  var buy2amount = 10000;
	  var cps = 0;
	  var autoclicker = false;
	  var autoupgrade = false;
	  var autoupgradethong = '';
	  var audiooi = new Audio('assets/music/background.mp3');
audiooi.play();
	  setInterval(function(){ 
	document.getElementById('money').innerHTML = money;
}, 1);
document.getElementById("cookie").addEventListener("click", function() {
 money = money + addamount;
 document.getElementById('amountmore').innerHTML = `+${addamount}`;
 setTimeout(function(){
 document.getElementById('amountmore').innerHTML = `‏‏‎ ‎`;

 }, 500);
});
setInterval(function(){
var audioo = new Audio('assets/music/background.mp3');
audioo.play();
}, 331000)
setInterval(function() {
money = money + cps;
if(cps > 0) {
	document.getElementById('amountmore1').innerHTML = '+' + cps;
	setTimeout(function(){
 document.getElementById('amountmore1').innerHTML = `‏‏‎ ‎`;
	}, 700);
}
}, 1000)
document.getElementById("increaseclick").addEventListener("click", function() {
 if(money > buy1amount - 1) {
	 money = money - buy1amount;
	 buy1amount = buy1amount + 1000;
	 	document.getElementById('increaseclick').innerHTML = '$' + buy1amount;
		 addamount = addamount + 10;
 }
});
document.getElementById('increasecps').addEventListener("click", function() {
  if(money > buy2amount - 1) {
	  money = money - buy2amount;
	  buy2amount = buy2amount + 100000;
	  cps = cps + 2150;
	  document.getElementById('increasecps').innerHTML = '$' + buy2amount;
  }
 });
 setInterval(function() {
if(autoclicker == true) {
	money = money + addamount;
	
}
 }, 40);
 document.getElementById('autoclicker').addEventListener("click", function(){
	 if(autoclicker == true) {

	 } else {
  if(money > 100000000 - 1) {
	  autoclicker = true;
      money = money - 100000000;
    	 	document.getElementById('autoclicker').innerHTML = 'bought';
  }
	 }
 });
 document.getElementById('autoupgrade').addEventListener("click", function(){
if(money > 500000 - 1) {
	if(autoupgrade == true) {

	} else {
 autoupgrade = true;
 money = money - 500000;
  document.getElementById('autoupgrade').innerHTML = `‏‏‎bought`;
	}
}
 });
 function Change() {
	 var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	if(selectedValue == 'CPC') {
		autoupgradethong = 'CPC';
	} else {
		if(selectedValue == 'CPS') {
	autoupgradethong = 'CPS';
		} else {
			if(selectedValue == 'None') {
             autoupgradethong = 'None';
			}
		}
	}
 }
 
 setInterval(function(){
  if(autoupgrade == true) {
    if(autoupgradethong == 'CPC') {
     if(money > buy1amount - 1) {
		  money = money - buy1amount;
	 buy1amount = buy1amount + 1000;
	 	document.getElementById('increaseclick').innerHTML = '$' + buy1amount;
		 addamount = addamount + 10;
	 }
	}  else {
		if(autoupgradethong == 'CPS') {
			if(money > buy2amount - 1) {
				money = money - buy2amount;
	  buy2amount = buy2amount + 100000;
	  cps = cps + 2150;
	  document.getElementById('increasecps').innerHTML = '$' + buy2amount;
			}
		}
	}
  }
 }, 100);
 setInterval(function(){
   document.getElementById('requiredcookies').innerHTML = 'Cookies: ' + money + '/1000000000';
  //document.getElementById('requiredgems').innerHTML = 'Gems: ' + gems + '/1000000';
  //document.getElementById('requiredorbs').innerHTML = 'Orbs: ' + orbs + '/1000';
 }, 1);
 /*document.getElementById("gemm").addEventListener("click", function() {
		if(hasgems = true) {

		} else {
			if(money > 10000000 - 1) {
	 money = money - 10000000;
	 	document.getElementById('gemtext').innerHTML = 'bought';
		 
 }
 }
});*/
function finish() {
	if(money > 1000000000 - 1) {
		alert('ending coming soon..');
		money = money - 1000000000;
	} else {

	}
}
//Developer options
document.addEventListener("keypress", function(event) {
if(event.key == 'd') {
	window.open('developer.html', '_blank');

}
});