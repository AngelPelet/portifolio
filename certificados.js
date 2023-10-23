/*CERTIFICADO 1*/
const openModalButton = document.querySelector(".open-modal")
const closeModalButton = document.querySelector(".close-modal")
const modal = document.querySelector(".modal")
const fade = document.querySelector(".fade")

const toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

[openModalButton, closeModalButton, fade].forEach(function (el) {
    el.addEventListener("click", () => toggleModal())
})


/*CERTIFICADO 2*/
const openModalButton1 = document.querySelector(".open-modal1")
const closeModalButton1 = document.querySelector(".close-modal1")
const modal1 = document.querySelector(".modal1")
const fade1 = document.querySelector(".fade1")

const toggleModal1 = () => {
    modal1.classList.toggle("hide1")
    fade1.classList.toggle("hide1")
}

[openModalButton1, closeModalButton1, fade1].forEach(function (el) {
    el.addEventListener("click", () => toggleModal1())
})


/*CERTIFICADO 3*/
const openModalButton2 = document.querySelector(".open-modal2")
const closeModalButton2 = document.querySelector(".close-modal2")
const modal2 = document.querySelector(".modal2")
const fade2 = document.querySelector(".fade2")

const toggleModal2 = () => {
    modal2.classList.toggle("hide2")
    fade2.classList.toggle("hide2")
}

[openModalButton2, closeModalButton2, fade2].forEach(function (el) {
    el.addEventListener("click", () => toggleModal2())
})

/*CERTIFICADO 4*/
const openModalButton3 = document.querySelector(".open-modal3")
const closeModalButton3 = document.querySelector(".close-modal3")
const modal3 = document.querySelector(".modal3")
const fade3 = document.querySelector(".fade3")

const toggleModal3 = () => {
    modal3.classList.toggle("hide3")
    fade3.classList.toggle("hide3")
}

[openModalButton3, closeModalButton3, fade3].forEach(function (el) {
    el.addEventListener("click", () => toggleModal3())
})


