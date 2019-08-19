import React from 'react';

import './App.css';
import SearchBox from './search';
import FunctionClick from './FunctionClick';
import ContactList from './contact_list';


function App() {
  
  return (

    <div className="container">
    <div className="content">
      <div className="header">
        <h2>Contact Management Application</h2>
        <FunctionClick/>
      </div>
      
      <div className="body pa3 tc">
      
      
      <h1 className="mt-5">DEMO</h1>
      
      <SearchBox/> 
      <ContactList/>  
      </div>       
    </div>

    
    </div>
   
  );
  }
  // class App extends React.component{
  //   render(){
  //     return (
    
        
  //          <div className="container">
  //             <h2 class="header">
  //               My Chat Application
  //             </h2>
  //             <div className="body pa3">
  //             <SearchBox/> ;
  //             <contactList/>
  //             <div>
  //             {/* <li> Name </li>
                    
  //                   <li> Number</li><br/>
  //                   <li> Bolaji Olayinka </li> 
                    
  //                   <li> 09035569571</li> */}
  //               </div>  
  //               <MyIcon/>;
  //             <contactList/>
  //           </div>
        
  //           </div>
           
  //         );
  //         }
      
  //   }
  


export default App;
