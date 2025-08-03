//Using the previous State
import { useState } from 'react';

function ReactVid21() {
    const [todo, setTodo] = useState([
        {id : 1, todos : "Learn"},
        {id : 2, todos : "Code"},
        {id : 3, todos : "Build"},
        {id : 4, todos : "Deploy"}
    ]);

    function handleDelete(id) {
        setTodo((prevTodo) => {
            return prevTodo.filter((todoValues) => {
                return id !== todoValues.id;
            })
        })
    }

    return(
        <div>
            <h2>Deleting Items from the List</h2>
            {todo.map((todoItems, index) => (
                <div key={index}>
                    <li>{todoItems.id} - {todoItems.todos}</li>
                    <button onClick={() => handleDelete(todoItems.id)}>Delete me</button>
                </div>
            ))}
        </div>
    )
}

export default ReactVid21;