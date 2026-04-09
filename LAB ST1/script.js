function cal(){
    let num = document.getElementById("number").value;
    let fact = 1;
    if(num < 0){
        document.getElementById("result").innerHTML="Invalid Input" ;
        return;
    }
    for(let i=1; i <= num; i++){
        fact = fact * i;
    }
    document.getElementById("result").innerHTML="Factorial : " + fact ;
    
}