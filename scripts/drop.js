// number of drops created.
var nbDrop = 10; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

	i=1;
	var dropLeft = randRange(0,10);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop1" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(0,10);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop8" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(0,10);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop5" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(0,10);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop2" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(10,20);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop3" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(10,20);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop9" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(10,20);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop7" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(10,20);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop4" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(20,30);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop5" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
		var dropLeft = randRange(20,30);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop3" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(20,30);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop6" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(20,30);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop9" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(30,40);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop7" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(30,40);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop10" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(30,40);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop8" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(30,40);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop2" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(40,50);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop9" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(40,50);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop3" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(40,50);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop10" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(40,50);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop5" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(50,60);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop5" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(50,60);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop2" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(50,60);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop6" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(50,60);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop1" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(60,70);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop7" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(60,70);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop9" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(60,70);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop8" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(60,70);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop3" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(70,80);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop9" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(70,80);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop4" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(70,80);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop10" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(70,80);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop8" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(80,90);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop1" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(80,90);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop10" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(80,90);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop2" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(80,90);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop1" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(90,100);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop3" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(90,100);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop4" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;
	i++;
	var dropLeft = randRange(90,100);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop4" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i+=20;
	var dropLeft = randRange(90,100);
	var dropTop = randRange(-1000,1400);
	$('.rain').append('<div class="drop3" id="drop'+i+'">🥚</div>');
	$('#drop'+i).css('left',dropLeft+"%");
	$('#drop'+i).css('top',dropTop);
	i-=20;

}
// Make it rain
createRain();