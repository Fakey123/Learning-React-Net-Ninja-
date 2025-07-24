import { useState } from "react";

function StateComponent() {
    //Array destructuring to get the state and the setter function
    const [name, setName] = useState("John");

    function handleChangeName() {
        setName("Jane");
        console.log(name);
    }

    return(
        <div className="changeName">
            <h1>Hello I'm, {name}</h1>
            <button onClick={handleChangeName}>Change Name</button>
        </div>
    )
}

export default StateComponent;