import React, {useEffect, useState} from "react";
import getSpase from "./Components/Space/getSpase";
import Spase from "./Components/Space/Spase";

function App() {
    let [spase, setSpase] = useState([]);
    useEffect(() => {
        getSpase().then(value => setSpase(value));
    },[])
    return (
        <div>
            {
                spase.map(value => <Spase
                key={value.mission_name}
                item={value}
                />)
            }
        </div>
    );
}

export default App;
