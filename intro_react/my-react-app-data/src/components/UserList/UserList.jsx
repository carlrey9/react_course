import { useEffect, useState } from "react";

const UserList = () => {

    //useState
    const [users, setUsers] = useState([]);

    //Use effect
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error Fetching data: ", error))
    }, [])

    //return info
    return (
        <div>
            <h1>
                Lista de Usuarios
            </h1>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>

        </div>
    );
}

export default UserList;