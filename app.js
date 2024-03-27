const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
   notesContainer.innerHTML = localStorage.getItem('notes')
}

showNotes()

function updateStorage() {
   localStorage.setItem('notes', notesContainer.innerHTML)
}

createBtn.addEventListener('click', () => {
   const note = document.createElement('div')
   note.classList.add('sub-class')
   note.innerHTML = `
   
   <p contenteditable="true" class="input-box">
   </p>
   <i class="bi bi-trash delete"></i>

  `
  notesContainer.appendChild(note)
})


notesContainer.addEventListener('click', (e) => {
   if (e.target.tagName === 'I') {
      e.target.parentElement.remove()
      updateStorage()
   }  else if (e.target.tagName = 'P') {
      notes = document.querySelectorAll('.input-box');
      notes.forEach(nt => {
         nt.onkeyup = function () {
            updateStorage()
         }
      })
   }
   // console.log(e.target)
})

