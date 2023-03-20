import { useContext } from "react";
import { AuthContext } from "../App";

export default function UserAvatar(props) {
    const { loggedin, setLoggedin } = useContext(AuthContext);

    console.log('avatar rendered!', new Date().toLocaleTimeString())
    return (
        <div className="auth">
        {
            loggedin ?
            <>
            <p>NAME</p>
            <button onClick={() => setLoggedin(false)}>Log Out</button>
            </>
            : <button onClick={() => setLoggedin(true)}>Log in</button>
        }
        </div>
    )

}