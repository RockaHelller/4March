let drapElems = document.querySelectorAll(".item")
let dropElem = document.querySelector(".drop-div")


for (const elem of drapElems) {
    elem.ondragstart = (e) => {
        e.dataTransfer.setData("id", e.target.getAttribute("id"))
    }
}

dropElem.ondragover = (e) => {
    e.preventDefault()
}

dropElem.ondrop = (e) => {
    let id = e.dataTransfer.getData("id")

    document.getElementById(id).style = "position:absolute"

    let elem = document.getElementById(id)
    dropElem.append(elem)

}


/////////////////////Icon Click


let iconBox = document.querySelector("box-icon")
let icon = document.querySelector(".box-icon i")
let input = document.querySelector(".box-icon input")
let tableBody = document.querySelector("table tbody")

function inputTrigger(e) {
    e.target.nextElementSibling.click()
}

icon.addEventListener("click", inputTrigger)

input.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();

        reader.onloadend = (event) => {
            let base64 = event.currentTarget.result;

            tableBody.innerHTML += `<tr>
            <td><img src = "${base64}">Image</td>
            <td>${file.name}</td>
            <td>${file.size / 1024}</td>
            <td><i class="fa-solid fa-xmark deleteElement"></i></td>
        </tr>`
            let deleteElement = document.querySelectorAll(".deleteElement")

            for (let i = 0; i < deleteElement.length; i++) {

                deleteElement[i].addEventListener("click", function (e) {
                    deleteElement[i].parentElement.parentElement.style.display = "none"
                })
            }


        }

        reader.readAsDataURL(file);

    }
}

)



















































