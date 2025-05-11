const sumAll = function(start,end) {
    if(start<0||end<0){
        return("ERROR");
    }
    if(((start*10)%10)!=0||((end*10)%10)!=0){
        return("ERROR");
    }
    if(typeof(start)!="number"||typeof(end)!="number"){
        return("ERROR");
    }
    if(start<end){
        let i;
        let sum=0;
        for(i=start;i<=end;i++){
           sum=sum+i;
        }
        return(sum);
    }
    else if(start>end){
        let i;
        let sum=0;
        for(i=end;i<=start;i++){
           sum=sum+i;
        }
        return(sum);
    }
    
};

// Do not edit below this line
module.exports = sumAll;
