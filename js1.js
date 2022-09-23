shownotes()
console.log('hello javascript')
let btn = document.getElementById('addbtn')
//function to add notes
btn.addEventListener("click", function (e) {

    let txt = document.getElementById('addText')
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(txt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    txt.value = ""
    console.log(notesObj)
    shownotes()
})
//functiontoshownotes
function shownotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = ""
    notesObj.forEach((element, index) => {
        html += `<div class="myCard my-2 mx-2 card" style="width: 18rem;">
                 
      <div class="card-body">
        <h5 class="card-title">${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button id= "${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
  </div>
  `
    }

    );
    let notesElem = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElem.innerHTML = html
    }
    else {
        notesElem.innerHTML = `you dont have any notes please use "Add Note" in above section`
    }
}
//function to delete the notes
function deleteNote(index) {
    console.log('I am deleting', index)
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))


    shownotes()
}
let search = document.getElementById('searchTxt')
search.addEventListener("input", function () {
    let inputval = search.value
    console.log('you are typing', inputval)
    let allCards = document.getElementsByClassName('myCard')
    Array.from(allCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText
        if (cardTxt.includes(inputval)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }
    })
})