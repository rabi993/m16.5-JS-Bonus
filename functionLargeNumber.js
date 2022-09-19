
// find large number

var marks =[52,25,31,48,67,5,79,52,54,54,67,90,5,47,46];
var max =marks[0];
for (var i=0; i<marks.length; i++){
    var element =marks[i];
    if(element>max){
        max= element;
       
    }
    
}
console.log('max value is:',max);
// find small number
var min = marks[0];
for (var i=0; i<marks.length; i++){
    var element =marks[i];
    if(element<min){
        min= element;
       
    }
    
}
console.log('min value is:',min);