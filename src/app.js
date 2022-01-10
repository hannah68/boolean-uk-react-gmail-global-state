import { useState, useContext, useReducer} from 'react'
import {EmailReducer, EmailContext} from './EmailContext'
import Header from './components/Header'
import Emails from './components/Emails'
import LeftMenu from './components/LeftMenu'
import initialEmails from './data/emails'
import './styles/app.css'


function App() {
  const [state, dispatch] = useReducer(EmailReducer, initialEmails)

  // const [hideRead, setHideRead] = useState(false)
  // const [currentTab, setCurrentTab] = useState('inbox')


  // if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  // if (currentTab === 'starred')
  //   filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header/>
      <EmailContext.Provider value={{state, dispatch}}>
        <LeftMenu/>
        <main className="emails">
            <Emails/>
        </main>
      </EmailContext.Provider>
    </div>
  )
}

export default App
