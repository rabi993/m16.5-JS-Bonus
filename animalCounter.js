// 10 mile 50 per mile
// next 10 mile 100 per mile
// next  1000 per mile


// if else
// orrrr
// function  if else


// function animalCount(){
//     return animalCount;
// }
// var count = animalCount();
// console.log(count);

// like as brick count
function brickCalculator(brkPerFeet,kotoTola){
    if(kotoTola < 11){
        totalBrick =kotoTola*15*brkPerFeet;
    }
    if(kotoTola < 21){
        totalBrick =(((kotoTola-10)*12*brkPerFeet)+(10*15*brkPerFeet));
    }
    else{
        totalBrick =(((kotoTola-20)*10*brkPerFeet)+(10*12*brkPerFeet)+(10*15*brkPerFeet));
    }
    return totalBrick;
    }
    var brickPerFeet=1000;
    var kotoTolaBuilding = 21;
    var result = brickCalculator(brickPerFeet , kotoTolaBuilding);
    
    console.log("bricks-per-feet =",brickPerFeet,"  Total bricks = ",result," piece");

