import {useContext} from 'react'
import {EmailContext} from '../EmailContext'

const LeftMenu = () => {
    const emails = useContext(EmailContext);
    
    const unreadEmails = emails.state.filter(email => !email.read)
    const starredEmails = emails.state.filter(email => email.starred)

    
    // current tab update====================
    const currentTab = (tab) => {
        emails.dispatch({
            type: "updateTab",
            payload: tab,
        });
    };

    // hide read emails====================
    const hideRead = (e) => {
        emails.dispatch({
            type: 'hideReadchecked',
            payload: e.target.checked
        })
    }


    return (
        <nav className="left-menu">
            <ul className="inbox-list">
                <li
                    className={`item ${emails.state.name === 'inbox' ? 'active' : ''}`}
                    onClick={() => currentTab('inbox')}
                >
                    <span className="label">Inbox</span>
                    <span className="count">{unreadEmails.length}</span>
                </li>
                <li
                    className={`item ${emails.state.name === 'starred' ? 'active' : ''}`}
                    onClick={() => currentTab('starred')}
                >
                    <span className="label">Starred</span>
                    <span className="count">{starredEmails.length}</span>
                </li>

                <li className="item toggle">
                    <label htmlFor="hide-read">Hide read</label>
                    <input
                    id="hide-read"
                    type="checkbox"
                    onChange={(e) => hideRead(e)}
                    />
                </li>
            </ul>
      </nav>
    )
}

export default LeftMenu
