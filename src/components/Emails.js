import {useContext} from 'react'
import { EmailContext } from '../EmailContext'
import Email from './Email';

// const getReadEmails = (emails) => emails.filter((email) => !email.read);
// const getStarredEmails = (emails) => emails.filter((email) => email.starred);

const Emails = () => {
    const emails = useContext(EmailContext);

    let filteredEmails = emails.state;

    return (
        <ul>
            {filteredEmails.map((email, index) => {
                return(<Email key={index} email={email}/>)
            })}
        </ul>
    )
}

export default Emails
