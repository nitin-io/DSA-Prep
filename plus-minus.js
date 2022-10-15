function plusMinus(arr) {
   let negativeCount = 0;
    let equalCount = 0;
    let positiveCount = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negativeCount++;
        }
        else if(arr[i] > 0){
            positiveCount++;
        }
        else{
            equalCount++;
        }
    }
    
    let negativePortion = (negativeCount / arr.length).toFixed(6);
    let equalPortion = (equalCount / arr.length).toFixed(6);
    let positivePortion = (positiveCount / arr.length).toFixed(6);
    
    console.log(positivePortion);   
    console.log(negativePortion);   
    console.log(equalPortion);  
}

plusMinus([1,1,-1,-2,0,0]);
