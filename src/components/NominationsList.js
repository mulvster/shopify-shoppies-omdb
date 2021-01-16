import React from 'react'; 
import { useState ,useCallback } from 'react';
import ResultsList from './ResultsList';

export default function NominationsList(props) {

  console.log("NOMINATIONS LIST", props.nominationsList)
  
  
  return (
    <div>{props.nominationsList.map(movie =>
      <div>A nomination</div>
    )
    
    }
    </div>

  )
}