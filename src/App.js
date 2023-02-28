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
                spase.filter(value => value.launch_year !== '2020').map(value => <Spase
                key={value.flight_number}
                item={value}
                />)
            }
        </div>
    );
}

export default App;
