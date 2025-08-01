import { useState } from 'react';

function OutputtingLists() {
    const [anime, setAnime] = useState([
        {AnimeName : "Attack On Titan"},
        {AnimeName : "Kimetsu No Yaiba"},
        {AnimeName : "Boku no Hero"}
    ]);

    function handleAddAnime() {
        const getAnimeName = document.getElementById('animeName');
        anime.push({AnimeName : getAnimeName.value});
        setAnime([...anime])
        console.log(getAnimeName.value);       
    }

    return(
        <div>
            {anime.map((animeNames, index) => (
                <li key={index}>{index + 1} - {animeNames.AnimeName}</li>
            ))}
            <div>
                <input type="text" name="animeName" id="animeName" placeholder="Enter an Anime Name" />
                <button onClick={handleAddAnime}>Add Anime</button>
            </div>
        </div>
    )
}

export default OutputtingLists;