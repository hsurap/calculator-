var ans=0;
var no1=0;
var op='+';


var acbtn=document.getElementById('ac');
var finalans=document.getElementById('result');
var signbtn=document.getElementById('sign');
var percbtn=document.getElementById('perc');
var equalbtn=document.getElementById('equal');
var zerobtn=document.getElementById('zerobtn')
var onebtn=document.getElementById('one');
var twobtn=document.getElementById('two');
var threebtn=document.getElementById('three');
var fourbtn=document.getElementById('four');
var fivebtn=document.getElementById('five');
var sixbtn=document.getElementById('six');
var sevenbtn=document.getElementById('seven');
var eightbtn=document.getElementById('eight');
var ninebtn=document.getElementById('nine');
var plusbtn=document.getElementById('plus');
var minusbtn=document.getElementById('minus');
var multiplybtn=document.getElementById('multiply');
var dividebtn=document.getElementById('divide');


function makeanszero(){
	ans=0;
	no1=0;
	finalans.innerText="0";
}
function changesign(){
	if(no1!=0)
	{
		ans=no1;
		no1=0;
	}
	ans=ans*-1;
	finalans.innerText=ans;
}
function makeperc(){
	if(no1!=0)
	{
		ans=no1;
		no1=0;
	}
	ans=ans/100;
	finalans.innerText=ans;
}
function printans()
{
	if(op=='+')
	{
		ans+=no1
		finalans.innerText=ans;
	}
	else if(op=='-')
	{
		ans-=no1
		finalans.innerText=ans;
	}
	else if(op=='*')
	{
		if(no1!=0)
			ans*=no1
		finalans.innerText=ans;
	}
	else if(op=='/')
	{
		if(no1!=0)
			ans/=no1
		finalans.innerText=ans;
	}
	no1=0;
}
function makeno(no)
{
	// console.log(no)
	no1=no1*10+no;
	finalans.innerText=no1;
}
function solveno(ch)
{
	// console.log(ch)
	if(ch=='+')
	{
		ans+=no1;
		no1=0
		finalans.innerText="+";
		op='+'
	}
	else if(ch=='-')
	{
		ans-=no1;
		no1=0
		finalans.innerText="-";
		op='-'
	}
	else if(ch=='*')
	{
		if(ans==0)
			ans=no1;
		else if(ans!=0)
		{
			if(no1!=0)
				ans*=no1;
		}
		no1=0
		finalans.innerText="*";
		op='*'
	}
	else if(ch=='/')
	{
		if(ans==0)
			ans=no1;
		else if(ans!=0)
		{
			if(no1!=0)
				ans/=no1;
		}
		no1=0;
		finalans.innerText="/";
		op='/'
	}
}


acbtn.addEventListener('click',makeanszero);
signbtn.addEventListener('click',changesign);
percbtn.addEventListener('click',makeperc);
equalbtn.addEventListener('click',printans);
onebtn.addEventListener('click',makeno.bind(null,1));
twobtn.addEventListener('click',makeno.bind(null,2));
threebtn.addEventListener('click',makeno.bind(null,3));
fourbtn.addEventListener('click',makeno.bind(null,4));
fivebtn.addEventListener('click',makeno.bind(null,5));
sixbtn.addEventListener('click',makeno.bind(null,6));
sevenbtn.addEventListener('click',makeno.bind(null,7));
eightbtn.addEventListener('click',makeno.bind(null,8));
ninebtn.addEventListener('click',makeno.bind(null,9));
zerobtn.addEventListener('click',makeno.bind(null,0));
plusbtn.addEventListener('click',solveno.bind(null,'+'));
minusbtn.addEventListener('click',solveno.bind(null,'-'));
multiplybtn.addEventListener('click',solveno.bind(null,'*'));
dividebtn.addEventListener('click',solveno.bind(null,'/'));