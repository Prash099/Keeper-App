import React, { useState } from 'react';


function CreateNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault()
    }

    return (
        <div class="container container1">
            <form>
                <div class="form-group inp">
                    <input type="text" class="form-control" onChange={handleChange} value={note.title} name="title" placeholder="title" required />
                    <textarea type="text" class="form-control" rows="3" onChange={handleChange} value={note.content} name="content" placeholder="write something..." required />
                    <button type="submit" onClick={handleClick} class="btn btn1 btn-warning">+</button>
                </div>
            </form>
        </div>)
};
export default CreateNote;
