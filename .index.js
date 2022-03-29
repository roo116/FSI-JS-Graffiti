let header = document.querySelector('#page-header')
console.log(header)
header.style.textAlign = "left"
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.lenght; i++){
    dogImages[i].style.borderRadius = '50px'   
}

let dogName = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogName.length; i++) {
 dogName[i].style.textAlign = "left"
}
