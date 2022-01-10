import { createContext } from "react";
export const EmailContext = createContext();

// Email reducer ===================================
export const EmailReducer = (state, action) => {
    switch (action.type){
        case 'toggleRead':
        const updatedReadEmails = state.map(email => email.id === action.payload.id ? { ...email, read: !email.read } : email)
        return updatedReadEmails

        case 'toggleStar':
        const updatedstarEmails = state.map(email => email.id === action.payload.id ? { ...email, starred: !email.starred } : email);
        return updatedstarEmails

        case 'updateTab':
        const updatedTab = action.payload;
        return updatedTab;
            
        case 'hideReadchecked':
        // if(action.payload === e.target.checked)
        const updatedEmailsRead = state.filter(email => !email.read);
        return updatedEmailsRead;
        
        default:
        return state
    }
}
