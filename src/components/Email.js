import {useContext} from 'react'
import {EmailContext} from '../EmailContext'

const Email = (props) => {
    const {email} = props;
    const emails = useContext(EmailContext)

    // toggle read==============================
    const toggleRead = (email) => {
        emails.dispatch({
            type: "toggleRead",
            payload: email,
        });
    };

    // toggle star===============================
    const toggleStar = (email) => {
        emails.dispatch({
            type: "toggleStar",
            payload: email,
        });
    };


    return (
        <li className={`email ${email.read ? 'read' : 'unread'}`}>
            <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                />
            </div>
            <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
        </li>
    )
}

export default Email
