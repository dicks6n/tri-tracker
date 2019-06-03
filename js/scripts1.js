function result(){
var year=parseInt(document.getElementById('year').value);
var answer=document.getElementById('answer');
if(year%100==0&&year%400==0){
answer.textContent="This is a leap year!";
}
else if (year%4==0&&year%100!=0){
answer.textContent="This is a leap year";
}
else {
answer.textContent="This is not a leap year";
}
}

function reset(){
  var year=parseInt(document.getElementById('year').value);
  var answer=document.getElementById('answer');
}
