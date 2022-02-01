let flag = true;

function setup() {
  createCanvas(windowWidth, 600);
  
  
}


function draw() {
  
  
  strokeWeight(0);
  
  
  
  let colorArr = ["red", 'orange', 'yellow',
                  '#39FF14', 'cyan', 'blue', 
                  'magenta', '#76472d', '#ffffff', '#000000'];
  
  if(flag){
    currentColor = color(colorArr[colorArr.length - 1]);  
  }
  
  
  createPallete(colorArr);
  
  paint(currentColor);
  
   let squareSize = height / colorArr.length;
  
  if(mouseX < squareSize && mouseIsPressed){
    
    currentColor = selectColor(squareSize, colorArr);
    flag = false;
    
  }
  
}

function createPallete(colorArray){
  
  let y = 0;
  let squareSize = height / colorArray.length;
  let currentColor = color(0);
  
  for(let i = 0; i < colorArray.length; i++){
    
    currentColor = color(colorArray[i]);
    fill(currentColor);
    square(0, y, squareSize);
    y = y + squareSize;
    
  }
   
}

function paint(colorSelected){
    
    strokeWeight(5);
    stroke(colorSelected);
    if(mouseIsPressed){
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }

function selectColor(squareSize, colorArr){
  
  let hoveredSquare = floor(mouseY / squareSize);
  
  let chosenColor = colorArr[hoveredSquare];
  
  console.log(chosenColor);
  
  let c = color(chosenColor);
  
  return c;
  
}


