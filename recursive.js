function factorialrecursive(num){
    if(num==1){
        console.log(num);
        return 1;
    }
    else{
        console.log(num, num - 1);
        return num * factorialrecursive(num - 1);
    }

}
var result = factorialrecursive(5);
console.log("result ",result);

