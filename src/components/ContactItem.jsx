import { useContext } from "react";
import { MyContext } from "../App";

export default function ContactItem(props) {
    const { setSelectedContact } = useContext(MyContext);
    const { index, name, selected } = props;
    console.log('contact item rendered', name, new Date().toLocaleTimeString())

    return (
        <button onClick={() => setSelectedContact(index)} className={selected? 'selected' : ''} >{name ? name : 'New Contact'}</button>
    )

}