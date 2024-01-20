import React from 'react'
import { Routes,Route } from 'react-router-dom';
import PebModels from './Models/PebModels';

export default function Models() {
  return (
    <div>
      <Routes>
       <Route path="peb-model" element={<PebModels/>} />
 

          
        
      
      </Routes>
    </div>
  )
}
