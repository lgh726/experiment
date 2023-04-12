let count =0;
let i = 0-1;
let words;
let rowp = 0;
let num = 50;
//var button;
var tb;
let c,a;
var paragraph

function setup() {
  createCanvas(400, 400);
  noStroke();
  textAlign(CENTER, CENTER);
  fill(0);

  words = ["Any one there?","HELLO","Who R you", "THAT IS A LIE"];
 // button = createButton("ANSWER").position(width+100,height-150);
  //button.mousePressed(createpoem);
  tb = createInput("TYPE SOMETHING").position(width+10,rowp+60);
  tb.changed(check);

}

function draw() {  
  textSize(40);
  colorMode(HSL);
  background('rgba(255,255,255,0.02)');
  fill(random(1));

let numbers = ["0","1",";)"];
let grid=6;
  


let v = random(width);
    if (v >width/1.5){
      colorMode(RGB);
      background(255);
      textStyle(ITALIC);
     for (let y = 0; y < 10;y++) {
        for (let x = 0; x < 10;x++) {
      text(numbers[int(random(3))], (x * width) / grid, (y * height) / grid);
        }
      }
    }
    
  
    if (v>width/1.1){
      colorMode(RGB);
      background(0);     
      textSize(50);
      textStyle(BOLD);
      fill(255,0,0);
      for (let y = 0; y < grid; y++) {
        for (let x = 0; x < grid; x++) {
          //fill(255)
      text(numbers[int(random(2))], (x * width) / grid+random(100,500), (y * height) / grid +random(100,500));
        }
      }
      text(numbers[3],random(50,width-50),random(50,height-50));   
      textSize(90);
      text(words[i],random(50,width-100),random(50,height-100));
    }
      
  
  
  if (v<width/5){
    fill(0);
    rect(random(width),random(height),random(50, width),50);
    
  }

  text(words[i],random(width),random(height));

  count = count+1
  if (count==text.length){
   count= 0;
  }
}

function check(){
  
  c=1;
  i = i+1;
  rowp = rowp +50;
if(i+1<words.length && c == 1){
  paragraph = createP("").position(width+200,rowp+50)
  createP(words[i]).position(width+10,rowp+20);
  tb = createInput("").position(width+10,rowp+60);
  tb.changed(check);
  //paragraph.changed(textchange)
  
  }
  
  if(i+1==words.length){
    button = createButton("THAT IS A LIE").position(width+100,height-150);
   noLoop();
 }
}

//function createpoem(){ 

//}

//function textchange(){
//  paragraph.html(tb.value())
//}

function mousePressed(){
 // print(i);
  
}