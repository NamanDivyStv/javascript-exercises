const palindromes = function (string) {
   let i,length=string.length,character,word="",newstring="",string1="";
   let array=["!",".",","," "]
   for(i=length-1;i>=0;i--){
    character=string.charAt(i);
    if((array.indexOf(character)==-1)&&(typeof(character)!="number")){
        word=word+character;
    }
    if(character==" "){
        newstring=newstring+word;
        word="";
    }
   }
      for(i=0;i<length;i++){
    character=string.charAt(i);
    if((array.indexOf(character)==-1)&&(typeof(character)!="number")){
        word=word+character;
    }
    if(character==" "){
        string1=string1+word;
        word="";
    }
   }
   if(newstring===string1){
    return(true);
   }
   else{
    return(false);
   }
};

// Do not edit below this line
module.exports = palindromes;
