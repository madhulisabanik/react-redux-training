import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Enquery() {
  const [enqueryList, setEnqueryList] = useState([])
  
  useEffect(() => {
    getEnqueires();
  }, [])  
  
  function getEnqueires(){
    fetch('http://localhost:8000/enqueries', {
        method: 'GET'
    })
    .then(res => res.json())
    .then((finalResult) => {
        console.log(finalResult)
        setEnqueryList(finalResult);
    })
  }

  const queryList = enqueryList.map((item) => {
    return (
        <div key={item.id}>
            <ul className="listStyle checkbox-group">
                <li>{item.id}</li> - <li>{item.query}</li>
            </ul>
        </div>
    )
});
  
  
  return (
    <div>{queryList}</div>
  )
}
