export default function UserAvatar(props) {
    const { loggedin, setLoggedin } = props;
    // const [state, setState] = useState(0)
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