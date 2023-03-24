//format html
function html([first, ...strings], ...values){
    return values.reduce(

        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x !==true || x===0)
    .join("")
}

//save and get data from local storage
function getNote() {
    return JSON.parse(localStorage.getItem('NoteApp')) || []
}
function saveNote(notes) {
    localStorage.setItem('NoteApp', JSON.stringify(notes))
}

const noteList = getNote()

const noteContainer = document.getElementById('note-container');

//html for display a note
function renderNote(note,index){
    note.id = index;
    return html`
        <textarea
            cols="30"
            rows="10"
            class="note"
            placeholder="Empty Note"
            id="${index}"
            onblur="editNote(${index},this.value.trim())"
            ondblclick="deleteNote(${index})"
        >${note.value}</textarea>
    `
}

//html for display note list
function render(){
    noteContainer.innerHTML = html`
        ${noteList.map((note, index) => renderNote(note, index))}
        <button id="btn" onclick="addNote()" >+</button>
    `
}

//add new note
function addNote(){
    noteList.push({value: ""});
    saveNote(noteList);
    render();
}

//edit note
function editNote(index,value){
    noteList[index].value = value;
    saveNote(noteList);
    render();
}

//delete note
function deleteNote(index){
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
        noteList.splice(index,1);
        saveNote(noteList);
        render();
    }
}

render();