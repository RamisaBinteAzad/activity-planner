import React from 'react';
import './App.css';
import ActivitiesPlan from './components/Activities-Plan/ActivitiesPlan';
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
import FrequentlyAskedQuestion from './components/FrequentlyAskedQuestion/FrequentlyAskedQuestion';

function App() {
  const notify = ()=>{
 
    // Calling toast method by passing string
    toast('Hello Geeks')
}
 
  return (
    <div >
      <ActivitiesPlan></ActivitiesPlan>
       <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
      
    </div>

    
  );
}

export default App;
