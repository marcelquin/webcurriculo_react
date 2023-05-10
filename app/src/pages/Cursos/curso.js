import './Index'

const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonfechar = document.querySelector("dialog button")

button.onclick = function() {
    modal.showModal()
}

buttonfechar.onclick = function() {
    modal.close()
}

const buttonudemy = document.getElementById('btn_udemy')
const modaludemy = document.getElementById('dialog_udemy')
const buttonfecharudemy = document.getElementById('buttonfecharudemy')

button.onclick = function() {
    modaludemy.showModal()
}

buttonfechar.onclick = function() {
    modaludemy.close()
}