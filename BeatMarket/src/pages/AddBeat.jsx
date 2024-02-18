import React from 'react'

const AddBeat = () => {
    const handleAddBeat = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <h2>Add a Beat</h2>
            <form onSubmit={handleAddBeat}>
                <label>Add Album Cover</label>
                <input type="file"></input>
                <label>Add Beat Title</label>
                <input name='title' type="text"></input>
                <label>Add Producer name</label>
                <input name='producer' type="text"></input>
                <label>Price</label>
                <input name = "price" type="number"></input>
                <label>Add Beat</label>
                <input name = "audio" type="file"></input>
                <button type="submit">Add Beat</button>
            </form>
        </div>
    )
}

export default AddBeat