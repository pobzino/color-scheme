const colorHex = document.getElementById('color-select')
const colorMode = document.getElementById('scheme')
const colorForm = document.getElementById('color-form')
let theColor = ''.substring(1)
let theMode = ''

colorHex.addEventListener('input', function () {
    theColor = colorHex.value.substring(1)
})
colorMode.addEventListener('input', function () {
    theMode = colorMode.value
    console.log(theMode)
})

colorForm.addEventListener('submit', function (e) {
    e.preventDefault()
    fetch(`https://www.thecolorapi.com/scheme?hex=${theColor}&mode=${theMode}&count=5`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('color-1').style.backgroundColor = data.colors[0].hex.value
            document.getElementById('name-1').textContent = data.colors[0].hex.value

            document.getElementById('color-2').style.backgroundColor = data.colors[1].hex.value
            document.getElementById('name-2').textContent = data.colors[1].hex.value

            document.getElementById('color-3').style.backgroundColor = data.colors[2].hex.value
            document.getElementById('name-3').textContent = data.colors[2].hex.value

            document.getElementById('color-4').style.backgroundColor = data.colors[3].hex.value
            document.getElementById('name-4').textContent = data.colors[3].hex.value

            document.getElementById('color-5').style.backgroundColor = data.colors[4].hex.value
            document.getElementById('name-5').textContent = data.colors[4].hex.value
        })
})

/*document.getElementsByClassName('color').addEventListener('click',function(){
    const text = document.getElementById('na')
})*/