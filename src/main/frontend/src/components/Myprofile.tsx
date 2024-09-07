import {useEffect, useState} from "react";

export function Myprofile() {
    const [user, setUser] = useState<string>("");

    useEffect(() => {
        fetch("/api/users/me", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }) .then(response => response.text())
            .then(data => setUser(data));
    }, []);


    return (
        <div className={"container"}>
            <h4>Current Logged In user : {user}</h4>
        </div>
    )
}

export default Myprofile;

