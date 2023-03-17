export default function ContactItem(props) {
    const { name, selected, setSelectedContact, index } = props;
    console.log('contact item rendered', name, new Date().toLocaleTimeString())

    return (
        <button onClick={() => setSelectedContact(index)} className={selected? 'selected' : ''} >{name ? name : 'New Contact'}</button>
    )

}