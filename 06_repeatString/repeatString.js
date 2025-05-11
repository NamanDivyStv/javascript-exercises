const repeatString = function(str,num) {
    let i;
    let newstr="";
    for(i=1;i<=num;i++){
        newstr=newstr.concat(str);
    }
    return (newstr);
};

// Do not edit below this line
module.exports = repeatString;
