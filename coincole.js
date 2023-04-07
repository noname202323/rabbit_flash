img_arr = new Array("gensi01.png","gensi02.png","man.png","tisyo.png","coin.png");
document.write("<img src='map01.png' id='map01' name='map01' style='position:absolute;left:0px;top:0px;'>");
document.write("<img src='man.png' id='man' name='teki1' style='position:absolute;left:330px;top:250px;'>");
document.write("<img src='tisyo.png' id='tisyo' name='teki2' style='position:absolute;left:130px;top:250px;'>");
document.write("<img src='coin.png' id='coin1' name='coin1' style='position:absolute;left:30px;top:30px;'>");
document.write("<img src='coin.png' id='coin2' name='coin2' style='position:absolute;left:230px;top:50px;'>");
document.write("<img src='coin.png' id='coin3' name='coin3' style='position:absolute;left:20px;top:430px;'>");
document.write("<img src='coin.png' id='coin4' name='coin4' style='position:absolute;left:330px;top:420px;'>");
document.write("<img src='gensi01.png' id='player' name='gensi' style='position:absolute;left:130px;top:130px;'>");
document.write("<div id='ura' style='position:absolute;left:0px;top:0px;'></div>");
document.onkeydown = GetKeyCode;
x = 130;
y = 130;
x1 = 330;
y1 = 330;
v = 10;
a1 = 0;
move1 = 0;
x2 = 130;
y2 = 330;
move2 = 0;
x3 = 130;
y3 = 130;
move3 = 0;
x4 = 330;
y4 = 30;
move4 = 0;
x5 = 70;
y5 = 70;
move5 = 0;
x6 = 70;
y6 = 470;
move6 = 0;
x7 = 470;
y7 = 70;
move7 = 0;
timer = 0;
a = 0;

function GetKeyCode(){
if(event.keyCode == 39)//right
{
myMove()
}
if(event.keyCode == 38)//up
{
myMove3()
}
if(event.keyCode == 37)//left
{
myMove2()
}
if(event.keyCode == 40)//down
{
myMove4()
}
}

function myMove()
{
if(coin1atari())
{
atari()
}
if(coin2atari())
{
atari()
}
if(coin3atari())
{
atari()
}
if(coin4atari())
{
atari()
}
x += v;
document.images["player"].style.left = x;
coin1atari()
coin2atari()
coin3atari()
coin4atari()
}

function myMove2()
{
if(coin1atari())
{
atari()
}
if(coin2atari())
{
atari()
}
if(coin3atari())
{
atari()
}
if(coin4atari())
{
atari()
}
x -= v;
document.images["player"].style.left = x;
coin1atari()
coin2atari()
coin3atari()
coin4atari()
}

function myMove3()
{
if(coin1atari())
{
atari()
}
if(coin2atari())
{
atari()
}
if(coin3atari())
{
atari()
}
if(coin4atari())
{
atari()
}
y -= v;
document.images["player"].style.top = y;
coin1atari()
coin2atari()
coin3atari()
coin4atari()
}

function myMove4()
{
if(coin1atari())
{
atari()
}
if(coin2atari())
{
atari()
}
if(coin3atari())
{
atari()
}
if(coin4atari())
{
atari()
}
y += v;
document.images["player"].style.top = y;
coin1atari()
coin2atari()
coin3atari()
coin4atari()
}

function atari()
{
document.getElementById("teki1").src = "man_ura.png";
document.getElementById("map01").src = "map01_ura.png";
document.getElementById("ura").innerHTML = "プッ。コイン集めなんて原始人か池沼並みの知能のゲームやってるなｗ";
}

function coin1atari()
{
return(document.images["player"].style.pixelLeft <
document.images["coin1"].style.pixelLeft + 50 &&
document.images["coin1"].style.pixelLeft <
document.images["player"].style.pixelLeft + 16 &&
document.images["player"].style.pixelTop <
document.images["coin1"].style.pixelTop + 52 &&
document.images["coin1"].style.pixelTop <
document.images["player"].style.pixelTop + 29);
}

function coin2atari()
{
return(document.images["player"].style.pixelLeft <
document.images["coin2"].style.pixelLeft + 50 &&
document.images["coin2"].style.pixelLeft <
document.images["player"].style.pixelLeft + 16 &&
document.images["player"].style.pixelTop <
document.images["coin2"].style.pixelTop + 52 &&
document.images["coin2"].style.pixelTop <
document.images["player"].style.pixelTop + 29);
}

function coin3atari()
{
return(document.images["player"].style.pixelLeft <
document.images["coin3"].style.pixelLeft + 50 &&
document.images["coin3"].style.pixelLeft <
document.images["player"].style.pixelLeft + 16 &&
document.images["player"].style.pixelTop <
document.images["coin3"].style.pixelTop + 52 &&
document.images["coin3"].style.pixelTop <
document.images["player"].style.pixelTop + 29);
}

function coin4atari()
{
return(document.images["player"].style.pixelLeft <
document.images["coin4"].style.pixelLeft + 50 &&
document.images["coin4"].style.pixelLeft <
document.images["player"].style.pixelLeft + 16 &&
document.images["player"].style.pixelTop <
document.images["coin4"].style.pixelTop + 52 &&
document.images["coin4"].style.pixelTop <
document.images["player"].style.pixelTop + 29);
}