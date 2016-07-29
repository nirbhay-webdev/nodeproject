function func1 () {

    var cache = 0;

    return function() {
        cache=cache+20;
        return cache;
    }
}

var func2=func1();

console.log(func2()); 
console.log(func2()); 