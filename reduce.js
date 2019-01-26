var fs = require('fs')

var output = fs.readFileSync('make_array.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.trim().split('\t'))
    .reduce((animals , line) => {
        
        animals[line[0]] = animals[line[0]] || []
        animals[line[0]].push({
            name : line[1],
            price : line[2],
            happy : line[3]
        })
        return animals

    }, {})

console.log(JSON.stringify(output, null, 2))