

var popupover =document.querySelector(".popup-over")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("addpopup")

addpopupbutton.addEventListener("click",function(){
    popupover.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
     popupover.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add")
var booktitle=document.getElementById("booktitle-input")
var bookauthor=document.getElementById("bookathor-input")
var bookscript=document.getElementById("bookdescribtion-input")
addbook.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookscript.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupover.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
