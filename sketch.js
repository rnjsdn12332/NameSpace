let count=0;
let ss=0;
let csv;
var idarr=[];
var idarr2=[];
let same=[];
let samearr=[]
var parent=[];
var result = [];
var result2 = [];
let ff=[];
let sum=0;
let sumarr=[];
let rresult=[];
let same2=[];
let sumarr2=[];
let idarr3=[];
let parent2=[];
let extra;
let x1=200;
let a=0;
let circles=[];
let memories=[];
let namearr=[];
let namearr2=[];
let a3=2;
let memorynamearr=[];

let letters = [];
let sizotxtarr=[];
let what;
let usersizo;
let usersizonum;
let step;
let first;
let velocity;
let speed=1.5;
let aarr=[];
let steparr=[];
let vid;
let koFont;
let koFont2;
let koFont3;
let minus=[];

var clr2=["#DE9791","#FFD569","#FF596B","#AEE4E4"];
var clr=["#8CD7CF","#F7CDB3","#F7F8F0","#C3D7AD","#FCBEB9"];
let xsizo=[];
let xname=[];
let xcount=[];
var database;



function preload(){
  csv = loadTable('./assets/284_fix.csv', 'csv', 'header');
  extra=createGraphics(1920,1440);
  vid=createVideo('video/acb.mp4');
  soundFormats('mp3', 'ogg');
  mySound2 = loadSound('assets/drip2');
  mySound3 = loadSound('assets/drip3');
  mySound4 = loadSound('assets/drip4');

  koFont = loadFont('font/MapoFlowerIsland.ttf');
  koFont2 = loadFont('font/sss.ttf');
  koFont3 = loadFont('font/space.otf');

  var firebaseConfig = {
    apiKey: "AIzaSyAFPerf0u9gB0mTtvPJbstuLAFX78mTzJI",
    authDomain: "health-clap.firebaseapp.com",
    projectId: "health-clap",
    databaseURL :"https://health-clap-default-rtdb.firebaseio.com/",
    storageBucket: "health-clap.appspot.com",
    messagingSenderId: "903402904974",
    appId: "1:903402904974:web:efc961a9b90c5d0af2d8df",
    measurementId: "G-NE345X7FMK"
  };

  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
  console.log(firebase);
  var ref=database.ref('users');
  ref.on('value',gotData);

}



function setup() {

  createCanvas(1920,1620);
  //setTimeout(greet3,3000);

  vid.volume(0);
  vid.hide();
  vid.speed(0.5);
  vid.loop();
  //canvas.style('z-index','-1');
  
  let col = color("#000000");

  input2 = createInput();
  input2.position(width/2-400, 2360);
  input2.size(400,60);

  input2.style('background-color', col);
  input2.style('color', '#5FFAED');
  input2.style('textAlign', 'CENTER');
  input2.style('font-size', '40px');
  
  button2 = createButton('S U B M I T');
  button2.position(width/2, 2370);
  button2.size(200,50);

  button2.style('background-color', col);
  button2.style('color', 'White');
  button2.style('font-family', 'space');
  button2.style('font-size', '25px');
  
  button2.mousePressed(greet2);

  extra.translate(width/2, height/2);
  

  for(let i=0; i<csv.getRowCount(); i++){
    
    let id=csv.getString(i,"Individula_Id");
    let family_step=csv.getNum(i,"Family_Step");
      
    append(idarr,id);
    idarr[i]=[id];
    append(idarr[i],family_step);

  }

  
  idarr.sort((a,b)=>a-b);


  for(let h1=0; h1<284; h1++){

    for(let d1=0; d1<csv.getRowCount(); d1++){

      let sizo=idarr[d1][0].slice(0,3);
      
      if(sizo==h1){

        let id2=csv.getString(d1,"Individula_Id");
        let family_step=csv.getNum(d1,"Family_Step");
        let name=csv.getString(d1,"Name");    
        let id=idarr[d1][1];
            
        append(namearr,name);
        append(same,id);
        append(idarr2,id2);
     
        same.sort;

        }
      }

      append(same2,same);
      same=[];

      append(idarr3,idarr2);
      idarr2=[];

      append(namearr2,namearr);
      namearr=[];

    }
      
    //print(idarr3);
    //print(steparr);
    //print(aarr);
 
    //?????? ??????   
    for(let h=0; h<284; h++){

      for(let a=0; a < idarr3[h].length; a++){
         
        let id3=idarr3[h][a].slice(0,-2);
        append(parent,id3);
      }

      append(parent2,parent);
      parent=[];
      append(steparr,h);
      append(aarr,h);
      aarr[h]=[-1];
      steparr[h]=[0];

    }


    //???????????? ?????? 
    for(let h=0; h<284;h++){

      for(let c=0; c<same2[h].length; c++){

        var index = same2[h][c];
        result[index] = result[index] == undefined ? 1 : result[index] += 1;

      }        

      append(result2,result);
      result=[];

    }


    for(let h=0; h<284; h++){

      result2[h].splice(0,1);
    
    }


    //result?????? ????????? 
    for(let h2=0; h2<284; h2++){
      
      for(let f=0; f < result2[h2].length; f++){
       
        sum=sum+result2[h2][f];
        append(sumarr,sum);
      }

      append(sumarr2,sumarr);
      sumarr=[];
      sum=0;

    }


    for(let h=0; h<284; h++){
      x=0;
      y=0;
      x2=0;
      y2=0;
      let b=0.2;
             
      for(let d=0; d<idarr3[h].length; d++){

        let fs=same2[h][d];
        let name2=namearr2[h][d];
        let id4=parent2[h][d];


        for(let s=0; s<=result2[h].length; s++){

          if(fs==s){

            var a=result2[h][s-1];
            var textscale=map(a,1,40,4,1.5);
            var pos=d-sumarr2[h][s-1];
            var pp=map(pos,0,a,2*Math.PI*h/284,2*Math.PI*(h+1)/284);
            let radius=map(s,0,100,28,1);
            var x=s*1.2*radius*cos(pp);
            var y=s*1.2*radius*sin(pp);
            let size=random(5,8);
            let scale=random(3.5,4)
            //let scale=size+sin(random(TAU));
               
            extra.colorMode(RGB);   
            extra.textAlign(CENTER);
            
            extra.fill(120);
            extra.stroke("#5FFAED");
            //extra.stroke("#00FF9D");  //??????
            extra.strokeWeight(0.07);
            extra.textFont(koFont,textscale);
            extra.text(name2,x,y);
           
         


            var ip=idarr3[h].indexOf(id4);
            var a2=result2[h][s-2];
            var pos2=ip-sumarr2[h][s-2];

            var pp2=map(pos2,0,a2,2*Math.PI*h/284,2*Math.PI*(h+1)/284);
           
            let radius2=map(s-1,0,100,28,1);
            var x2=(s-1)*1.2*radius2*cos(pp2);
            var y2=(s-1)*1.2*radius2*sin(pp2);
                
            extra.line(x,y,x2,y2);


                extra.noStroke();
                extra.fill(95, 250, 237,2)
                extra.circle(x+0.5,y,10);
                extra.fill(95, 250, 237,1)
               extra.circle(x+0.5,y,15);
               extra.fill(95, 250, 237,1)
               extra.circle(x+0.5,y,20);

          }
        }
      }
    }

    print(result2);

    setTimeout(xdrawing,3000);
    setTimeout(draw,3000);

  }
   
  //print(xsizo[2]);
  //xdrawing();
 
      
        

function draw(){
  
  colorMode(RGB);
  background(0);
  //print(xname);
  
  image(vid,0,0,1920,1440);
  translate(width/2, height/2);
  rotate(frameCount/3800);
  image(extra,-width/2,-height/2);
 
  for(let i2=0; i2<memories.length; i2++){
    memories[i2].show();
  }

  if(count>0){
    for(let h=0; h<284; h++){//?????? ???????????????
       
        x=0;
        y=0;
        x2=0;
        y2=0;
        let b=0.2;
           
        for(let d=0; d<idarr3[h].length; d++){

          let fs=same2[h][d];
          let id4=parent2[h][d];
          let name2=namearr2[h][d];
          
          if(h==usersizonum){
            
            for(let s=0; s<=result2[h].length; s++){
              
              if(fs==s){
                    var textscale=map(a,1,40,4,1.5);
                var a=result2[h][s-1];
                var pos=d-sumarr2[h][s-1];
                var pp=map(pos,0,a,2*Math.PI*h/284,2*Math.PI*(h+1)/284);
                let radius=map(s,0,100,28,1);
                var x=s*1.2*radius*cos(pp);
                var y=s*1.2*radius*sin(pp);
                let size=random(5,8);
                let scale=size+sin(random(TAU));
                let size2=random(0.05,0.3);   
                let scale2=size2+sin(random(TAU));
                var colorscale=random(clr2);//2?3?,6
                noStroke();

                textAlign(CENTER);
                colorMode(HSB);
              
                fill("#00FF9D");
                textFont(koFont,textscale);
                textSize(7);
                text(name2,x,y);

                
                var ip=idarr3[h].indexOf(id4);
                var a2=result2[h][s-2];
                var pos2=ip-sumarr2[h][s-2];

                var pp2=map(pos2,0,a2,2*Math.PI*h/284,2*Math.PI*(h+1)/284);
           
                let radius2=map(s-1,0,100,28,1);
                var x2=(s-1)*1.2*radius2*cos(pp2);
                var y2=(s-1)*1.2*radius2*sin(pp2);
                
                colorMode(HSB);
                stroke("#00FF9D");
                strokeWeight(0.2);
                line(x,y,x2,y2);

              }
            }
          }
        }
      }
    }             

    //fill(255);

    for (var i=0;i<circles.length;i++){
   
      circles[i].show();

      if(circles[i].iscloser()){
        circles[i].update();
      } 

      else{
        circles[i].move();
      }
    }
  }



function gotData(data){
  var users=data.val();
  var keys=Object.keys(users);
  console.log(keys);
  for(let i=0; i<keys.length; i++){
    let k=keys[i];
    let memoryname=users[k].username;
    let memorysizo=users[k].usersizo;
    let memorycount=users[k].count;

    //console.log(memoryname,memorysizo,memorycount);
    append(xname,memoryname);
    append(xsizo,memorysizo);
    append(xcount,memorycount);
    }
    
    //print(xname);
  }



function xdrawing(){
  
  print(xsizo);
  print(xname);
  print(xcount);
  
  for(let i=0; i<xsizo.length; i++){
       
    for(let j=0; j<284; j++){
      
      if(j==xsizo[i]-1){

        append(aarr[j],aarr[j][aarr[j].length-1]+1);
        let xpos=xcount[i];
        let steppos=((xpos-(xpos%a3))/a3)+1;
        let xpos2=xpos%a3;

        // var a3=5;
        // print(a3);     
        // print(aarr[h][i]);

        var xpp=map(xpos2,0,a3,2*Math.PI*(j)/284,2*Math.PI*(j+1)/284);
        let xs=same2[j+1][same2[j+1].length-1]+steppos;
        //print(steparr[h][d]);
        let xradius=map(xs,0,100,28,1);
        
        var x=xs*1.2*xradius*cos(xpp);
        var y=xs*1.2*xradius*sin(xpp);
        
        memories.push(new Memory(x,y,xname[i]));

      }
    }
  }
  
  //print(aarr);

}



function countdown(){

  setInterval(function(){

    if(count>0){
      count--;
    
    }
  },20000)

}

/*

function greet3(){

  if (mySound.isPlaying())
  {
    mySound.stop();
  }
  else
  {
   mySound.loop();
   mySound.setVolume(0.4);
 }

}
*/


function greet2(){
  count=1;
  countdown();

  let usersizo=input2.value().slice(0,-2);
  let textname=input2.value().slice(-2);

  append(sizotxtarr,usersizo);
  append(letters,textname);
 // usersizonum=-1;

  input2.value('');

  //print(usersizo);
  //print(textname);


  if(ss == 0){
    random(mySound2.play());
    mySound2.setVolume(0.7);
    ss++;
  }

  else if(ss == 1){
    random(mySound3.play());
    mySound3.setVolume(0.7);
    ss++;
  }

  else if(ss == 2){
    random(mySound4.play());
    mySound4.setVolume(0.7);
    ss=0;
  }

  let what=usersizo;

  if(what=="?????????"){usersizonum=0;}
  else if(what=="?????????"){usersizonum=1;}
  else if(what=="?????????"){usersizonum=2;}
  else if(what=="?????????"){usersizonum=3;}
  else if(what=="?????????"){usersizonum=4;}
  else if(what=="?????????"){usersizonum=5;}
  else if(what=="?????????"){usersizonum=6;}
  else if(what=="?????????"){usersizonum=7;}
  else if(what=="?????????"){usersizonum=8;}
  else if(what=="?????????"){usersizonum=9;}
  else if(what=="?????????"){usersizonum=10;}
  else if(what=="?????????"){usersizonum=11;}
  else if(what=="?????????"){usersizonum=12;}
  else if(what=="?????????"){usersizonum=13;}
  else if(what=="?????????"){usersizonum=14;}
  else if(what=="?????????"){usersizonum=15;}
  else if(what=="????????????"){usersizonum=16;}
  else if(what=="?????????"){usersizonum=17;}
  else if(what=="?????????"){usersizonum=18;}
  else if(what=="?????????"){usersizonum=19;}
  else if(what=="?????????"){usersizonum=20;}
  else if(what=="?????????"){usersizonum=21;}
  else if(what=="?????????"){usersizonum=22;}
  else if(what=="?????????"){usersizonum=23;}
  else if(what=="?????????"){usersizonum=24;}
  else if(what=="?????????"){usersizonum=25;}
  else if(what=="?????????"){usersizonum=26;}
  else if(what=="?????????"){usersizonum=27;}
  else if(what=="?????????"){usersizonum=28;}
  else if(what=="?????????"){usersizonum=29;}
  else if(what=="?????????"){usersizonum=30;}
  else if(what=="?????????"){usersizonum=31;}
  else if(what=="?????????"){usersizonum=32;}
  else if(what=="?????????"){usersizonum=33;}
  else if(what=="?????????"){usersizonum=34;}
  else if(what=="?????????"){usersizonum=35;}
  else if(what=="?????????"){usersizonum=36;}
  else if(what=="?????????"){usersizonum=37;}
  else if(what=="?????????"){usersizonum=38;}
  else if(what=="?????????"){usersizonum=39;}
  else if(what=="?????????"){usersizonum=40;}
  else if(what=="?????????"){usersizonum=41;}
  else if(what=="?????????"){usersizonum=42;}
  else if(what=="?????????"){usersizonum=43;}
  else if(what=="?????????"){usersizonum=44;}
  else if(what=="?????????"){usersizonum=45;}
  else if(what=="?????????"){usersizonum=46;}
  else if(what=="?????????"){usersizonum=47;}
  else if(what=="?????????"){usersizonum=48;}
  else if(what=="?????????"){usersizonum=49;}
  else if(what=="?????????"){usersizonum=50;}
  else if(what=="?????????"){usersizonum=51;}
  else if(what=="?????????"){usersizonum=52;}
  else if(what=="?????????"){usersizonum=53;}
  else if(what=="?????????"){usersizonum=54;}
  else if(what=="?????????"){usersizonum=55;}
  else if(what=="?????????"){usersizonum=56;}
  else if(what=="?????????"){usersizonum=57;}
  else if(what=="?????????"){usersizonum=58;}
  else if(what=="?????????"){usersizonum=59;}
  else if(what=="?????????"){usersizonum=60;}
  else if(what=="?????????"){usersizonum=61;}
  else if(what=="?????????"){usersizonum=62;}
  else if(what=="?????????"){usersizonum=63;}
  else if(what=="?????????"){usersizonum=64;}
  else if(what=="?????????"){usersizonum=65;}
  else if(what=="?????????"){usersizonum=66;}
  else if(what=="?????????"){usersizonum=67;}
  else if(what=="?????????"){usersizonum=68;}
  else if(what=="?????????"){usersizonum=69;}
  else if(what=="?????????"){usersizonum=70;}
  else if(what=="?????????"){usersizonum=71;}
  else if(what=="?????????"){usersizonum=72;}
  else if(what=="?????????"){usersizonum=73;}
  else if(what=="?????????"){usersizonum=74;}
  else if(what=="?????????"){usersizonum=75;}
  else if(what=="?????????"){usersizonum=76;}
  else if(what=="?????????"){usersizonum=77;}
  else if(what=="?????????"){usersizonum=78;}
  else if(what=="?????????"){usersizonum=79;}
  else if(what=="?????????"){usersizonum=80;}
  else if(what=="?????????"){usersizonum=81;}
  else if(what=="?????????"){usersizonum=82;}
  else if(what=="?????????"){usersizonum=83;}
  else if(what=="?????????"){usersizonum=84;}
  else if(what=="?????????"){usersizonum=85;}
  else if(what=="?????????"){usersizonum=86;}
  else if(what=="?????????"){usersizonum=87;}
  else if(what=="?????????"){usersizonum=88;}
  else if(what=="?????????"){usersizonum=89;}
  else if(what=="?????????"){usersizonum=90;}
  else if(what=="?????????"){usersizonum=91;}
  else if(what=="?????????"){usersizonum=92;}
  else if(what=="?????????"){usersizonum=93;}
  else if(what=="?????????"){usersizonum=94;}
  else if(what=="?????????"){usersizonum=95;}
  else if(what=="?????????"){usersizonum=96;}
  else if(what=="?????????"){usersizonum=97;}
  else if(what=="?????????"){usersizonum=98;}
  else if(what=="?????????"){usersizonum=99;}
  else if(what=="?????????"){usersizonum=100;}
  else if(what=="?????????"){usersizonum=101;}
  else if(what=="?????????"){usersizonum=102;}
  else if(what=="?????????"){usersizonum=103;}
  else if(what=="?????????"){usersizonum=104;}
  else if(what=="?????????"){usersizonum=105;}
  else if(what=="?????????"){usersizonum=106;}
  else if(what=="?????????"){usersizonum=107;}
  else if(what=="?????????"){usersizonum=108;}
  else if(what=="?????????"){usersizonum=109;}
  else if(what=="?????????"){usersizonum=110;}
  else if(what=="?????????"){usersizonum=111;}
  else if(what=="?????????"){usersizonum=112;}
  else if(what=="?????????"){usersizonum=113;}
  else if(what=="?????????"){usersizonum=114;}
  else if(what=="?????????"){usersizonum=115;}
  else if(what=="?????????"){usersizonum=116;}
  else if(what=="?????????"){usersizonum=117;}
  else if(what=="?????????"){usersizonum=118;}
  else if(what=="?????????"){usersizonum=119;}
  else if(what=="?????????"){usersizonum=120;}
  else if(what=="?????????"){usersizonum=121;}
  else if(what=="?????????"){usersizonum=122;}
  else if(what=="?????????"){usersizonum=123;}
  else if(what=="?????????"){usersizonum=124;}
  else if(what=="?????????"){usersizonum=125;}
  else if(what=="?????????"){usersizonum=126;}
  else if(what=="?????????"){usersizonum=127;}
  else if(what=="?????????"){usersizonum=128;}
  else if(what=="?????????"){usersizonum=129;}
  else if(what=="?????????"){usersizonum=130;}
  else if(what=="?????????"){usersizonum=131;}
  else if(what=="?????????"){usersizonum=132;}
  else if(what=="?????????"){usersizonum=133;}
  else if(what=="?????????"){usersizonum=134;}
  else if(what=="?????????"){usersizonum=135;}
  else if(what=="?????????"){usersizonum=136;}
  else if(what=="?????????"){usersizonum=137;}
  else if(what=="?????????"){usersizonum=138;}
  else if(what=="?????????"){usersizonum=139;}
  else if(what=="?????????"){usersizonum=140;}
  else if(what=="?????????"){usersizonum=141;}
  else if(what=="?????????"){usersizonum=142;}
  else if(what=="?????????"){usersizonum=143;}
  else if(what=="?????????"){usersizonum=144;}
  else if(what=="?????????"){usersizonum=145;}
  else if(what=="?????????"){usersizonum=146;}
  else if(what=="?????????"){usersizonum=147;}
  else if(what=="????????????"){usersizonum=148;}
  else if(what=="?????????"){usersizonum=149;}
  else if(what=="?????????"){usersizonum=150;}
  else if(what=="?????????"){usersizonum=151;}
  else if(what=="?????????"){usersizonum=152;}
  else if(what=="?????????"){usersizonum=153;}
  else if(what=="?????????"){usersizonum=154;}
  else if(what=="?????????"){usersizonum=155;}
  else if(what=="?????????"){usersizonum=156;}
  else if(what=="?????????"){usersizonum=157;}
  else if(what=="?????????"){usersizonum=158;}
  else if(what=="?????????"){usersizonum=159;}
  else if(what=="?????????"){usersizonum=160;}
  else if(what=="?????????"){usersizonum=161;}
  else if(what=="?????????"){usersizonum=162;}
  else if(what=="?????????"){usersizonum=163;}
  else if(what=="?????????"){usersizonum=164;}
  else if(what=="?????????"){usersizonum=165;}
  else if(what=="????????????"){usersizonum=166;}
  else if(what=="?????????"){usersizonum=167;}
  else if(what=="?????????"){usersizonum=168;}
  else if(what=="?????????"){usersizonum=169;}
  else if(what=="?????????"){usersizonum=170;}
  else if(what=="?????????"){usersizonum=171;}
  else if(what=="?????????"){usersizonum=172;}
  else if(what=="?????????"){usersizonum=173;}
  else if(what=="?????????"){usersizonum=174;}
  else if(what=="?????????"){usersizonum=175;}
  else if(what=="?????????"){usersizonum=176;}
  else if(what=="?????????"){usersizonum=177;}
  else if(what=="?????????"){usersizonum=178;}
  else if(what=="?????????"){usersizonum=179;}
  else if(what=="?????????"){usersizonum=180;}
  else if(what=="?????????"){usersizonum=181;}
  else if(what=="?????????"){usersizonum=182;}
  else if(what=="?????????"){usersizonum=183;}
  else if(what=="?????????"){usersizonum=184;}
  else if(what=="?????????"){usersizonum=185;}
  else if(what=="?????????"){usersizonum=186;}
  else if(what=="?????????"){usersizonum=187;}
  else if(what=="?????????"){usersizonum=188;}
  else if(what=="?????????"){usersizonum=189;}
  else if(what=="?????????"){usersizonum=190;}
  else if(what=="?????????"){usersizonum=191;}
  else if(what=="?????????"){usersizonum=192;}
  else if(what=="?????????"){usersizonum=193;}
  else if(what=="?????????"){usersizonum=194;}
  else if(what=="?????????"){usersizonum=195;}
  else if(what=="?????????"){usersizonum=196;}
  else if(what=="?????????"){usersizonum=197;}
  else if(what=="?????????"){usersizonum=198;}
  else if(what=="?????????"){usersizonum=199;}
  else if(what=="?????????"){usersizonum=200;}
  else if(what=="?????????"){usersizonum=201;}
  else if(what=="?????????"){usersizonum=202;}
  else if(what=="?????????"){usersizonum=203;}
  else if(what=="?????????"){usersizonum=204;}
  else if(what=="?????????"){usersizonum=205;}
  else if(what=="?????????"){usersizonum=206;}
  else if(what=="?????????"){usersizonum=207;}
  else if(what=="?????????"){usersizonum=208;}
  else if(what=="?????????"){usersizonum=209;}
  else if(what=="?????????"){usersizonum=210;}
  else if(what=="?????????"){usersizonum=211;}
  else if(what=="?????????"){usersizonum=212;}
  else if(what=="?????????"){usersizonum=213;}
  else if(what=="?????????"){usersizonum=214;}
  else if(what=="?????????"){usersizonum=215;}
  else if(what=="?????????"){usersizonum=216;}
  else if(what=="?????????"){usersizonum=217;}
  else if(what=="?????????"){usersizonum=218;}
  else if(what=="?????????"){usersizonum=219;}
  else if(what=="?????????"){usersizonum=220;}
  else if(what=="?????????"){usersizonum=221;}
  else if(what=="????????????"){usersizonum=222;}
  else if(what=="?????????"){usersizonum=223;}
  else if(what=="?????????"){usersizonum=224;}
  else if(what=="?????????"){usersizonum=225;}
  else if(what=="?????????"){usersizonum=226;}
  else if(what=="?????????"){usersizonum=227;}
  else if(what=="?????????"){usersizonum=228;}
  else if(what=="?????????"){usersizonum=229;}
  else if(what=="?????????"){usersizonum=230;}
  else if(what=="?????????"){usersizonum=231;}
  else if(what=="?????????"){usersizonum=232;}
  else if(what=="?????????"){usersizonum=233;}
  else if(what=="?????????"){usersizonum=234;}
  else if(what=="?????????"){usersizonum=235;}
  else if(what=="?????????"){usersizonum=236;}
  else if(what=="?????????"){usersizonum=237;}
  else if(what=="?????????"){usersizonum=238;}
  else if(what=="?????????"){usersizonum=239;}
  else if(what=="?????????"){usersizonum=240;}
  else if(what=="?????????"){usersizonum=241;}
  else if(what=="?????????"){usersizonum=242;}
  else if(what=="?????????"){usersizonum=243;}
  else if(what=="?????????"){usersizonum=245;}
  else if(what=="?????????"){usersizonum=246;}
  else if(what=="?????????"){usersizonum=247;}
  else if(what=="?????????"){usersizonum=248;}
  else if(what=="?????????"){usersizonum=249;}
  else if(what=="?????????"){usersizonum=250;}
  else if(what=="?????????"){usersizonum=251;}
  else if(what=="?????????"){usersizonum=252;}
  else if(what=="?????????"){usersizonum=253;}
  else if(what=="?????????"){usersizonum=254;}
  else if(what=="?????????"){usersizonum=255;}
  else if(what=="?????????"){usersizonum=256;}
  else if(what=="?????????"){usersizonum=257;}
  else if(what=="?????????"){usersizonum=258;}
  else if(what=="?????????"){usersizonum=259;}
  else if(what=="?????????"){usersizonum=260;}
  else if(what=="?????????"){usersizonum=261;}
  else if(what=="?????????"){usersizonum=262;}
  else if(what=="?????????"){usersizonum=263;}
  else if(what=="?????????"){usersizonum=264;}
  else if(what=="?????????"){usersizonum=265;}
  else if(what=="?????????"){usersizonum=266;}
  else if(what=="?????????"){usersizonum=267;}
  else if(what=="?????????"){usersizonum=268;}
  else if(what=="?????????"){usersizonum=269;}
  else if(what=="?????????"){usersizonum=270;}
  else if(what=="?????????"){usersizonum=271;}
  else if(what=="?????????"){usersizonum=272;}
  else if(what=="?????????"){usersizonum=273;}
  else if(what=="?????????"){usersizonum=274;}
  else if(what=="?????????"){usersizonum=275;}
  else if(what=="?????????"){usersizonum=276;}
  else if(what=="?????????"){usersizonum=277;}
  else if(what=="?????????"){usersizonum=278;}
  else if(what=="?????????"){usersizonum=279;}
  else if(what=="?????????"){usersizonum=280;}
  else if(what=="?????????"){usersizonum=281;}
  else if(what=="?????????"){usersizonum=282;}
  else if(what=="?????????"){usersizonum=283;}
  else{usersizonum=-1;}


 // savedata(usersizonum,letters[letters.length-1]); 
    

  for(let h=0; h<284; h++){//?????? ???????????????

    if(h==usersizonum-1){

      append(aarr[h],aarr[h][aarr[h].length-1]+1);
      let aarrnum=aarr[h][aarr[h].length-1];
      let stepnum=(aarrnum-(aarrnum%a3))/a3+1;
      append(steparr[h],stepnum);


      for(let i=0; i<aarr[h].length; i++){
        
        for(let d=0; d<steparr[h].length; d++){
   
          x=0;
          y=0;
          let b=0.2;
          
          if(steparr[h][d]==steparr[h][steparr[h].length-1]){
         
            //??? ????????? ???????????? ??????
            // print(a3);
             var pos=aarrnum%a3;
            // print(aarr[h][i]);
             var pp=map(pos,0,a3,2*Math.PI*(h)/284,2*Math.PI*(h+1)/284);
             let s=same2[h+1][same2[h+1].length-1]+steparr[h][d];
             //print(steparr[h][d]);
             let radius=map(s,0,100,28,1);
             var x=s*1.2*radius*cos(pp);
             var y=s*1.2*radius*sin(pp);

          }
        }
      }
    }
  }

  print(steparr);
  print(aarr);
  if(usersizonum>=0){
  saveData(usersizonum,letters[letters.length-1],aarr[usersizonum-1][aarr[usersizonum-1].length-1]);
  circles.push(new Circle(x,y,10,letters[letters.length-1]));

}else{
  saveData(-1,letters[letters.length-1],-1);
  circles.push(new Circle(-3,0,13,letters[letters.length-1]));


}


}


function saveData(sizo,name,count){
  
  let data={
    usersizo : sizo,
    username : name,
    count : count
  }

  let ref=database.ref('users');

  ref.push(data);

}



function Memory(x,y,name){

  this.x=x;
  this.y=y;
  this.name=name;

  this.show=function(){
    noStroke();
    colorMode(RGB);
    fill(0, 255, 213,5);
    circle(this.x+8,this.y-2,20);
    fill(0, 255, 213,3)
    circle(this.x+8,this.y-2,25);
    fill(0, 255, 213,2)
    circle(this.x+8,this.y-2,35);
    fill(120);
    stroke(255);
    //extra.stroke("#00FF9D");  //??????
    strokeWeight(0.07);
    //let scale=5+sin(random(TAU));
    let scale=15;
    textFont(koFont,scale);
    text(this.name,this.x,this.y);
  

  }
}

function Circle(x,y,r,name){
  
  this.position = createVector(random(-width/2+200,width/2-200),random(-height/2+100,height/2-100));
  this.findpos=createVector(x,y);
  this.firstdistance=this.findpos.dist(this.position);
  this.velocity = createVector();
  this.acceleration = createVector();
  this.topspeed = 1;

  this.x=x;
  this.y=y;
  this.r=r;

  this.speed = Math.random() * .2 + .5;
  this.angle = Math.random() * 360;

  this.tail=[];
  this.tailLength=90;

  this.startColor = random(clr);
  this.endColor = [255, 255, 255, 0];

  this.angleposx=1;
  this.angleposy=1;

  this.name=name;
  this.count2=500000;
  this.count=500;
  
   
  this.move=function(){//????????? 1

    setInterval(this.Countdown2(),1000);
    
    if(this.position.x < -width/2+200 || this.position.x > width/2-200)//?????? ???????????? ?????????
      this.speed*=-1;

    if(this.position.y <= -height/2+100 || this.position.y >= height/2-100)
      this.speed*=-1;

        
      let s = this.speed * 5;//?????? ??????
      this.angle += Math.random() * 4-2.5;
      this.position.x += this.angleposx*s * Math.cos(this.angle * Math.PI / 180);
      this.position.y += this.angleposy*s * Math.sin(this.angle * Math.PI / 180);
    }


    this.history = function() {

      if(this.tail.length > this.tailLength) {this.tail.shift();}
      
      this.tail.push({x: this.position.x, y: this.position.y, r: this.r});
    }


    this.removetail=function(){this.tail=[];}


    this.drawTail = function(){
    
      const colorScale = chroma
      .scale([this.endColor, this.startColor])
      .mode("lch")
      .colors(this.tail.length);

      //draw each circle for the tail
      for(i = this.tail.length - 1; i > 0; i--){
        
        textFont(koFont, this.tail[i].r);
        text(this.name,this.tail[i].x, this.tail[i].y);
        fill(colorScale[i]);
        noStroke();
      
        //calculate the proper numer to reduce radius to 0
        const radiusReducer = this.tail[i].r / this.tailLength;
        this.tail[i].r -= radiusReducer;

      }
    }


    this.update=function() {
    
    // Compute a vector that points from position to mouse
    let target=createVector(x,y);

    this.acceleration = p5.Vector.sub(target,this.position);
    this.acceleration.setMag(0.6);  // Set magnitude of acceleration

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);

    this.position.add(this.velocity);

  }


  this.show=function() {

    var clrr=["#8CD7CF","#F7CDB3","#F7F8F0","#C3D7AD","#FCBEB9"];
    let target=createVector(x,y);
    var distance=target.dist(this.position);
    
    //if(this.correct()){
    if(distance<2){
      this.tail=[];
      setInterval(this.Countdown(),400000000);
        
        if(this.count>0){
          colorMode(HSB);
          
          let namesize=map(this.count,500000,3,500,15);
          
          //fill("#00FFFF");  
          fill(this.startColor); 
          noStroke();
          textFont(koFont,namesize);
          text(this.name,this.position.x,this.position.y);
        }

        else{
          colorMode(HSB);
          fill(this.startColor); //????????????
          //fill("#00FFFF");
          noStroke();
          textFont(koFont,15);
          text(this.name,this.x,this.y);
        }
      }

      else{
        //var textsize=map(distance,this.firstdistance,5,30,this.r);
        colorMode(HSB);

        //fill("#00FFFF");
        fill(this.startColor);
        noStroke();

        textFont(koFont,this.r);
        text(this.name,this.position.x,this.position.y);

        this.history();
        this.drawTail();  

      }
    }

  this.iscloser=function(){
    
    let target=createVector(x,y);
    var distance=target.dist(this.position);
    return distance<350;

  }


  this.iscloser2=function(){

    let target=createVector(x,y);
    var distance=target.dist(this.position);
    
    return distance<2;
  
  }


  this.tailcloser=function(){

    let target=createVector(x,y);
    var distance=target.dist(this.position);
    
    return distance<5;

  }


  this.correct=function(){

    let target=createVector(x,y);
    var distance=target.dist(this.position);
    
    return distance==0;

  }


  this.reduce=function(){

    colorMode(HSB);
    fill("#00FFFF");
    noStroke();
    
    textFont(koFont,5);
    text(this.name,this.x,this.y);

  }


  this.Countdown=function(){
  
    if(this.count>=0){
      this.count--;
      
      print(this.count);
    }
  }
 


  this.Countdown2=function(){
    if(this.count2>=0){
      this.count2--;
      
      print(this.count2);
    }
  }
}
