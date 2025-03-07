import { useState } from 'react';

const TooggleButton = () => {
    const [isActive, setIsActive] = useState(0);
    return (

        <button onClick={() => setIsActive(!isActive)} >
            {isActive ? "Activo" : "Inactivo"}
        </button>
    )
}

export default TooggleButton;