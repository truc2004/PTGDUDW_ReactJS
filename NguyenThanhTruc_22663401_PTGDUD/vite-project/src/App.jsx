// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Mycomponent from './components/Mycomponent'

// function App() {
//     // const [count, setCount] = useState(0)
//     return (
//       <>
//         <div>
//           {/* Hello world */}
//           <Mycomponent></Mycomponent>
// 	      </div>
//       </>)
// }

// export default App


// exercise 3
import { useState } from 'react';
import ContactList from './exercise-3-class/ContactList.jsx';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
    {
      name: "Chidi Anagonye",
      note: "Anagonye", 
      phone: "555-366-1987",
      address: "St. John's University, Sydney, Australia"
    },
    {
      name: "Eleanor Shellstrop",
      note: "Shellstrop", 
      phone: "555-483-1457",
      address: "335 Avalon St, Apt 20, Phoenix, Arizona"
    },
    {
      name: "Tahani Al Jamil",
      note: "AI-Jamil", 
      phone: "555-276-7991",
      address: "1 Lancaster Terrace, London, England"
    },
    {
      name: "Jason Mendoza",
      note: "Mendoza", 
      phone: "555-113-8388",
      address: "779 William St, Miami, Florida"
    }
  ]);

  const handleDeleteContact = (name) => {
    setContacts(contacts.filter(contact => contact.name !== name));
  };

  const handleDeleteAll = () => {
    setContacts([]);
  };

  return (
    <>
      <h1>Contact List</h1>
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} onDeleteAll={handleDeleteAll} />
    </>
  );
}

export default App;
