function checkPrime(num){
    let factor=0;
    for(let i=10;i<=num;i++){
      if(i%2==0){
        factor++;
      }
    }
    if(factor==2){
      console.log("Yes")
    }
    else{
      console.log(" ")
    }
  
  }
  checkPrime(7)
  