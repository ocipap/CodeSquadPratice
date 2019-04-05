var form = document.getElementById('guestbook-form')
var result = document.getElementById('result')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    var name = document.getElementById("name")
    var content = document.getElementById("content")
    var nameVal = name.value
    var contentVal = content.value

    if (name == "" || content == "") {
        alert("require!")
        return
    }
    addResult(nameVal, contentVal)

    name.value = ""
    content.value = ""
})

function addResult(name, content) {
    var result = document.getElementById("result").innerHTML

    var html = 
    `<div class="result-el">
        <div class="result-name">${name}</div>
        <div class="result-content">${content}</div>
    </div>`
    
    document.getElementById("result").innerHTML = result + html
}