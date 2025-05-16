const fibonacci = function(position) {
   if(position>0){
   let i;
   let array=[1,1]
   for(i=2;i<position;i++){
     array[i]=array[i-1]+array[i-2];
   }
   return(array[position-1]);
   }
   else if(position==0){
    return(0);
   }
   else if(position<0){
    return("OOPS");
   }
};

// Do not edit below this line
module.exports = fibonacci;
