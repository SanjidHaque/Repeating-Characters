var exp = 'btyyddddrjp' ;
var expCounts = {};
var maxKey = '';
for(var i = 0; i < exp.length; i++) {
    var key = exp[i];
    if(!expCounts[key]){
        expCounts[key] = 0;
    }
    expCounts[key]++;
    if(maxKey === '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key;
    }

}

var output = '';
for (let i = 0; i < expCounts[maxKey]; i ++) {
    output +=maxKey
}
console.log(output)
