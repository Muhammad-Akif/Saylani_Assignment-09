var images_array = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.png', 'images/5.jpg', 'images/6.jpg', 'images/7.png', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg', 'images/11.jpg', 'images/12.jpg', 'images/13.jpg', 'images/14.png', 'images/15.jpg']
var a,b
for (i in images_array) {
    var a = document.getElementById(i)
    a.src = images_array[i]
    a.height = 250
    a.width = 156
}
function fun(id) {
    console.log(id)
    var modal = document.getElementById('modal')
    b = document.getElementById(id)
    modal.classList.add('modal-open')
    modal.classList.remove('modal-close')
    modal.style.display = "block"
    b.src = images_array[id]
    console.log(images_array[id])

}
function onClosedImagModal() {
    var modall = document.getElementById('modal-close')
    modall.classList.add('modal-close')
    modall.classList.remove('modal-open')
    setTimeout(() => { modal.style.display = "none"; }, 550)
}