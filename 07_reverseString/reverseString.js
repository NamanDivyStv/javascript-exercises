const reverseString = function(str) {
     let len=str.length;
     let newstr="";
     for(let i=len-1;i>=0;i--){
         newstr=newstr+str.charAt(i);
     }
     return(newstr);
};

// Do not edit below this line
module.exports = reverseString;
