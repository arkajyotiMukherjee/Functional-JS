let cats = 
    name =>
        color => 
            cuteness =>
                name + ' is a beautiful cat of ' + color + ' color with a level of ' + cuteness + '% cuteness'

let output = cats('kato-sama')('white')(90)

console.log(output)
