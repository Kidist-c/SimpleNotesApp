const noteCon=document.querySelector('.notesContainer');
const createBtn=document.querySelector('.btn');
let notes=document.querySelectorAll('.input-box');

createBtn.addEventListener('click',()=>{
    const inpuyBox=document.createElement('p');
    const deleteIm=document.createElement('img');
    inpuyBox.className='input-box';
    inpuyBox.setAttribute('contenteditable','true');
    deleteIm.src='images/delete.png';
    noteCon.appendChild(inpuyBox).appendChild(deleteIm);

})
noteCon.addEventListener('click', (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
        updateNote();
    }
    }
)
noteCon.addEventListener('input',updateNote)
function updateNote(){
    localStorage.setItem('notes', noteCon.innerHTML);
}
/*function showNotes(){
    noteCon.innerHTML=localStorage.getItem('notes');
}
showNotes();*/

document.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})