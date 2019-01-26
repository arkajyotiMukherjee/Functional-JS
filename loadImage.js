function loadImage (url) {
    return new Promise ((resolve, reject) => {
        let image = new Image()

        image.onload = function() {
            resolve(image)
        }

        image.onerror = function(){
            let msg = "Couldnot load image at " + url
            reject(new Error(msg))
        }

        image.src = url
    })
}

module.exports = {
    loadImage : loadImage
}