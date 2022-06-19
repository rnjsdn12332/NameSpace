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
  //csv2 = loadTable('all.csv', 'csv', 'header');
  extra=createGraphics(1920,1440);
  //vid=createVideo('video/acc2bbbbb.mp4');
vid=createVideo('video/acb.mp4');

  soundFormats('mp3', 'ogg');
 // mySound = loadSound('assets/spaceb5');
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
  input2.position(width/2-250, 2260);
  input2.size(400,60);

  input2.style('background-color', col);
  input2.style('color', '#5FFAED');
  input2.style('textAlign', 'CENTER');
  input2.style('font-size', '40px');
  
  button2 = createButton('S U B M I T');
  button2.position(width/2+50, 2260);
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
 
    //부모 배열   
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


    //중복갯수 찾기 
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


    //result배열 합치기 
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
            //extra.stroke("#00FF9D");  //그린
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
    for(let h=0; h<284; h++){//여기 수정해야됌
       
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

  if(what=="면천복"){usersizonum=0;}
  else if(what=="강릉유"){usersizonum=1;}
  else if(what=="경주김"){usersizonum=2;}
  else if(what=="경주이"){usersizonum=3;}
  else if(what=="광동진"){usersizonum=4;}
  else if(what=="경주정"){usersizonum=5;}
  else if(what=="경주최"){usersizonum=6;}
  else if(what=="고령신"){usersizonum=7;}
  else if(what=="곡부공"){usersizonum=8;}
  else if(what=="광산김"){usersizonum=9;}
  else if(what=="기계유"){usersizonum=10;}
  else if(what=="김녕김"){usersizonum=11;}
  else if(what=="김해김"){usersizonum=12;}
  else if(what=="나주임"){usersizonum=13;}
  else if(what=="예천임"){usersizonum=14;}
  else if(what=="남양홍"){usersizonum=15;}
  else if(what=="안음서문"){usersizonum=16;}
  else if(what=="달성서"){usersizonum=17;}
  else if(what=="담양전"){usersizonum=18;}
  else if(what=="덕산송"){usersizonum=19;}
  else if(what=="동래정"){usersizonum=20;}
  else if(what=="문화류"){usersizonum=21;}
  else if(what=="밀양박"){usersizonum=22;}
  else if(what=="밀양손"){usersizonum=23;}
  else if(what=="삼척심"){usersizonum=24;}
  else if(what=="성주배"){usersizonum=25;}
  else if(what=="성주이"){usersizonum=26;}
  else if(what=="소주가"){usersizonum=27;}
  else if(what=="수원백"){usersizonum=28;}
  else if(what=="순흥안"){usersizonum=29;}
  else if(what=="신안주"){usersizonum=30;}
  else if(what=="안동권"){usersizonum=31;}
  else if(what=="안동장"){usersizonum=32;}
  else if(what=="양천허"){usersizonum=33;}
  else if(what=="연안차"){usersizonum=34;}
  else if(what=="영순태"){usersizonum=35;}
  else if(what=="영월엄"){usersizonum=36;}
  else if(what=="용강팽"){usersizonum=37;}
  else if(what=="원주원"){usersizonum=38;}
  else if(what=="진전송"){usersizonum=39;}
  else if(what=="의령남"){usersizonum=40;}
  else if(what=="목천장"){usersizonum=41;}
  else if(what=="장수황"){usersizonum=42;}
  else if(what=="전주이"){usersizonum=43;}
  else if(what=="전주최"){usersizonum=44;}
  else if(what=="제주고"){usersizonum=45;}
  else if(what=="제주양"){usersizonum=46;}
  else if(what=="진주강"){usersizonum=47;}
  else if(what=="진주정"){usersizonum=48;}
  else if(what=="창녕성"){usersizonum=49;}
  else if(what=="창녕조"){usersizonum=50;}
  else if(what=="천안전"){usersizonum=51;}
  else if(what=="청주한"){usersizonum=52;}
  else if(what=="초계정"){usersizonum=53;}
  else if(what=="태인허"){usersizonum=54;}
  else if(what=="파평윤"){usersizonum=55;}
  else if(what=="평상신"){usersizonum=56;}
  else if(what=="하양허"){usersizonum=57;}
  else if(what=="한양조"){usersizonum=58;}
  else if(what=="함안조"){usersizonum=59;}
  else if(what=="군위오"){usersizonum=60;}
  else if(what=="경주전"){usersizonum=61;}
  else if(what=="남평문"){usersizonum=62;}
  else if(what=="해주오"){usersizonum=63;}
  else if(what=="김해허"){usersizonum=64;}
  else if(what=="능성구"){usersizonum=65;}
  else if(what=="진주하"){usersizonum=66;}
  else if(what=="충주지"){usersizonum=67;}
  else if(what=="강릉김"){usersizonum=68;}
  else if(what=="강릉최"){usersizonum=69;}
  else if(what=="경주배"){usersizonum=70;}
  else if(what=="경주손"){usersizonum=71;}
  else if(what=="고성이"){usersizonum=72;}
  else if(what=="고흥류"){usersizonum=73;}
  else if(what=="곡부공"){usersizonum=74;}
  else if(what=="나주나"){usersizonum=75;}
  else if(what=="나주정"){usersizonum=76;}
  else if(what=="남원양"){usersizonum=77;}
  else if(what=="무안박"){usersizonum=78;}
  else if(what=="단양우"){usersizonum=79;}
  else if(what=="반남박"){usersizonum=80;}
  else if(what=="벽진이"){usersizonum=81;}
  else if(what=="분성배"){usersizonum=82;}
  else if(what=="삼척김"){usersizonum=83;}
  else if(what=="선산김"){usersizonum=84;}
  else if(what=="성산이"){usersizonum=85;}
  else if(what=="성주배"){usersizonum=86;}
  else if(what=="순천박"){usersizonum=87;}
  else if(what=="안동장"){usersizonum=88;}
  else if(what=="여산송"){usersizonum=89;}
  else if(what=="여양진"){usersizonum=90;}
  else if(what=="여흥민"){usersizonum=91;}
  else if(what=="연안김"){usersizonum=92;}
  else if(what=="연안이"){usersizonum=93;}
  else if(what=="연일정"){usersizonum=94;}
  else if(what=="영양천"){usersizonum=95;}
  else if(what=="영천이"){usersizonum=96;}
  else if(what=="온양방"){usersizonum=97;}
  else if(what=="원주원"){usersizonum=98;}
  else if(what=="은진송"){usersizonum=99;}
  else if(what=="의성김"){usersizonum=100;}
  else if(what=="이천서"){usersizonum=101;}
  else if(what=="전의이"){usersizonum=102;}
  else if(what=="정선전"){usersizonum=103;}
  else if(what=="진주류"){usersizonum=104;}
  else if(what=="창원황"){usersizonum=105;}
  else if(what=="청송심"){usersizonum=106;}
  else if(what=="청풍김"){usersizonum=107;}
  else if(what=="풍양조"){usersizonum=108;}
  else if(what=="풍천임"){usersizonum=109;}
  else if(what=="하동정"){usersizonum=110;}
  else if(what=="한산이"){usersizonum=111;}
  else if(what=="함양박"){usersizonum=112;}
  else if(what=="함평이"){usersizonum=113;}
  else if(what=="해주최"){usersizonum=114;}
  else if(what=="현풍곽"){usersizonum=115;}
  else if(what=="화순김"){usersizonum=116;}
  else if(what=="가평간"){usersizonum=117;}
  else if(what=="소주가"){usersizonum=118;}
  else if(what=="청주경"){usersizonum=119;}
  else if(what=="태안경"){usersizonum=120;}
  else if(what=="해주경"){usersizonum=121;}
  else if(what=="수안계"){usersizonum=122;}
  else if(what=="김포공"){usersizonum=123;}
  else if(what=="청주곽"){usersizonum=124;}
  else if(what=="평해구"){usersizonum=125;}
  else if(what=="담양국"){usersizonum=126;}
  else if(what=="예천권"){usersizonum=127;}
  else if(what=="해평길"){usersizonum=128;}
  else if(what=="강화김"){usersizonum=129;}
  else if(what=="행주기"){usersizonum=130;}
  else if(what=="개성김"){usersizonum=131;}
  else if(what=="경산김"){usersizonum=132;}
  else if(what=="칠원김"){usersizonum=133;}
  else if(what=="파평김"){usersizonum=134;}
  else if(what=="풍기김"){usersizonum=135;}
  else if(what=="함창김"){usersizonum=136;}
  else if(what=="풍산김"){usersizonum=137;}
  else if(what=="해주김"){usersizonum=138;}
  else if(what=="해남김"){usersizonum=139;}
  else if(what=="해평김"){usersizonum=140;}
  else if(what=="해풍김"){usersizonum=141;}
  else if(what=="홍주김"){usersizonum=142;}
  else if(what=="희천김"){usersizonum=143;}
  else if(what=="군위나"){usersizonum=144;}
  else if(what=="금성나"){usersizonum=145;}
  else if(what=="의령남"){usersizonum=146;}
  else if(what=="고성남"){usersizonum=147;}
  else if(what=="함열남궁"){usersizonum=148;}
  else if(what=="강화노"){usersizonum=149;}
  else if(what=="개성노"){usersizonum=150;}
  else if(what=="경주노"){usersizonum=151;}
  else if(what=="안강노"){usersizonum=152;}
  else if(what=="광주노"){usersizonum=153;}
  else if(what=="교하노"){usersizonum=154;}
  else if(what=="만경노"){usersizonum=155;}
  else if(what=="신창노"){usersizonum=156;}
  else if(what=="안동노"){usersizonum=157;}
  else if(what=="장연노"){usersizonum=158;}
  else if(what=="풍천노"){usersizonum=159;}
  else if(what=="철강서"){usersizonum=160;}
  else if(what=="평당서"){usersizonum=161;}
  else if(what=="월성석"){usersizonum=162;}
  else if(what=="충주석"){usersizonum=163;}
  else if(what=="홍주석"){usersizonum=164;}
  else if(what=="보성신"){usersizonum=165;}
  else if(what=="태원선우"){usersizonum=166;}
  else if(what=="안동손"){usersizonum=167;}
  else if(what=="일직손"){usersizonum=168;}
  else if(what=="청주손"){usersizonum=169;}
  else if(what=="평해손"){usersizonum=170;}
  else if(what=="김해송"){usersizonum=171;}
  else if(what=="문경송"){usersizonum=172;}
  else if(what=="신평송"){usersizonum=173;}
  else if(what=="야성송"){usersizonum=174;}
  else if(what=="합천송"){usersizonum=175;}
  else if(what=="양주송"){usersizonum=176;}
  else if(what=="연안송"){usersizonum=177;}
  else if(what=="용성송"){usersizonum=178;}
  else if(what=="청주송"){usersizonum=179;}
  else if(what=="홍주송"){usersizonum=180;}
  else if(what=="나주이"){usersizonum=181;}
  else if(what=="김포이"){usersizonum=182;}
  else if(what=="금구이"){usersizonum=183;}
  else if(what=="단양이"){usersizonum=184;}
  else if(what=="단성이"){usersizonum=185;}
  else if(what=="남평이"){usersizonum=186;}
  else if(what=="대흥이"){usersizonum=187;}
  else if(what=="덕산이"){usersizonum=188;}
  else if(what=="광주이"){usersizonum=189;}
  else if(what=="부평이"){usersizonum=190;}
  else if(what=="부안이"){usersizonum=191;}
  else if(what=="봉산이"){usersizonum=192;}
  else if(what=="동성이"){usersizonum=193;}
  else if(what=="사천이"){usersizonum=194;}
  else if(what=="서림이"){usersizonum=195;}
  else if(what=="순천이"){usersizonum=196;}
  else if(what=="벽진이"){usersizonum=197;}
  else if(what=="성산이"){usersizonum=198;}
  else if(what=="양성이"){usersizonum=199;}
  else if(what=="평강전"){usersizonum=200;}
  else if(what=="신평이"){usersizonum=201;}
  else if(what=="수원이"){usersizonum=202;}
  else if(what=="함창전"){usersizonum=203;}
  else if(what=="고성정"){usersizonum=204;}
  else if(what=="덕수이"){usersizonum=205;}
  else if(what=="봉화정"){usersizonum=206;}
  else if(what=="금성정"){usersizonum=207;}
  else if(what=="영성정"){usersizonum=208;}
  else if(what=="야성정"){usersizonum=209;}
  else if(what=="아산이"){usersizonum=210;}
  else if(what=="장기정"){usersizonum=211;}
  else if(what=="의성정"){usersizonum=212;}
  else if(what=="안성이"){usersizonum=213;}
  else if(what=="안산이"){usersizonum=214;}
  else if(what=="온양정"){usersizonum=215;}
  else if(what=="안악이"){usersizonum=216;}
  else if(what=="양산이"){usersizonum=217;}
  else if(what=="진양이"){usersizonum=218;}
  else if(what=="창원정"){usersizonum=219;}
  else if(what=="청산정"){usersizonum=220;}
  else if(what=="청주정"){usersizonum=221;}
  else if(what=="남양제갈"){usersizonum=222;}
  else if(what=="하남정"){usersizonum=223;}
  else if(what=="함평정"){usersizonum=224;}
  else if(what=="양주조"){usersizonum=225;}
  else if(what=="칠원제"){usersizonum=226;}
  else if(what=="배천조"){usersizonum=227;}
  else if(what=="순창조"){usersizonum=228;}
  else if(what=="임천조"){usersizonum=229;}
  else if(what=="옥천조"){usersizonum=230;}
  else if(what=="두릉두"){usersizonum=231;}
  else if(what=="성주도"){usersizonum=232;}
  else if(what=="밀양당"){usersizonum=233;}
  else if(what=="태원안"){usersizonum=234;}
  else if(what=="절강시"){usersizonum=235;}
  else if(what=="신창맹"){usersizonum=236;}
  else if(what=="함평조"){usersizonum=237;}
  else if(what=="상주주"){usersizonum=238;}
  else if(what=="청주좌"){usersizonum=239;}
  else if(what=="태원조"){usersizonum=240;}
  else if(what=="온양이"){usersizonum=241;}
  else if(what=="안악양"){usersizonum=242;}
  else if(what=="연일오"){usersizonum=243;}
  else if(what=="영해이"){usersizonum=245;}
  else if(what=="밀양양"){usersizonum=246;}
  else if(what=="사천목"){usersizonum=247;}
  else if(what=="함평노"){usersizonum=248;}
  else if(what=="함풍노"){usersizonum=249;}
  else if(what=="부계예"){usersizonum=250;}
  else if(what=="의흥예"){usersizonum=251;}
  else if(what=="충주어"){usersizonum=252;}
  else if(what=="광산승"){usersizonum=253;}
  else if(what=="연일승"){usersizonum=254;}
  else if(what=="상산여"){usersizonum=255;}
  else if(what=="파주염"){usersizonum=256;}
  else if(what=="곡산연"){usersizonum=257;}
  else if(what=="하음봉"){usersizonum=258;}
  else if(what=="거제반"){usersizonum=259;}
  else if(what=="밀양변"){usersizonum=260;}
  else if(what=="초계변"){usersizonum=261;}
  else if(what=="의령옥"){usersizonum=262;}
  else if(what=="홍천용"){usersizonum=263;}
  else if(what=="금성범"){usersizonum=264;}
  else if(what=="강화위"){usersizonum=265;}
  else if(what=="옥천육"){usersizonum=266;}
  else if(what=="영천윤"){usersizonum=267;}
  else if(what=="행주은"){usersizonum=268;}
  else if(what=="영순태"){usersizonum=269;}
  else if(what=="성주현"){usersizonum=270;}
  else if(what=="제주부"){usersizonum=271;}
  else if(what=="용강팽"){usersizonum=272;}
  else if(what=="죽산음"){usersizonum=273;}
  else if(what=="전주추"){usersizonum=274;}
  else if(what=="추계추"){usersizonum=275;}
  else if(what=="괴산피"){usersizonum=276;}
  else if(what=="목천상"){usersizonum=277;}
  else if(what=="절강편"){usersizonum=278;}
  else if(what=="곡산한"){usersizonum=279;}
  else if(what=="강릉함"){usersizonum=280;}
  else if(what=="양근함"){usersizonum=281;}
  else if(what=="청주사"){usersizonum=282;}
  else if(what=="신창표"){usersizonum=283;}
  else{usersizonum=-1;}


 // savedata(usersizonum,letters[letters.length-1]); 
    

  for(let h=0; h<284; h++){//여기 수정해야됌

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
         
            //한 세대의 반복되는 갯수
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
    //extra.stroke("#00FF9D");  //그린
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
  
   
  this.move=function(){//페이즈 1

    setInterval(this.Countdown2(),1000);
    
    if(this.position.x < -width/2+200 || this.position.x > width/2-200)//벽에 부딪히면 꺾이게
      this.speed*=-1;

    if(this.position.y <= -height/2+100 || this.position.y >= height/2-100)
      this.speed*=-1;

        
      let s = this.speed * 5;//속도 조절
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
          
          //fill("#00FFFF");  //도착한 글씨 색깔
          fill(this.startColor); //붙으면 반짝거림
          noStroke();
          textFont(koFont,namesize);
          text(this.name,this.position.x,this.position.y);
        }

        else{
          colorMode(HSB);
          fill(this.startColor); //반짝거림
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
