var loadImage = require('./loadImage')

let addImg = (src) => {
    let imageElement = document.createElement("img")
    imageElement.src = src
    document.body.appendChild(imageElement)
}

Promise.all([
    loadImage.loadImage('./pics/hq1.jpg')
]).then((images) => {
    console.log('poop')
    console.log(images)
    images.forEach( img => addImg(img.src))
}).catch((err) =>{
    console.log('not poop ' + err)
})


// loadImage.loadImage('pics/joker.jpg').then((img) => {
//     addImg(img)
// }).catch((err) => console.log(err))