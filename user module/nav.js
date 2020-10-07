const nav= document.getElementById('toggled')

document.getElementById('ham-b').addEventListener('click',function () {
nav.style.display='block'
})

document.getElementById('close-b').addEventListener('click', function () {
    nav.style.display="none"
})
