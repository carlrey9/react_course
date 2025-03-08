import { useState } from "react";

const NameForm = () => {
    const [name, setNameForm] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(event) => setNameForm(event.target.value)}
            />
            <p>
                Hola, {name || "visitante"}
            </p>


        </div>
    );
}

export default NameForm;