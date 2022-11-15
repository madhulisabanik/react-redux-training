import React from 'react';
import Header from './Header';
import { useState, useEffect } from 'react';

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
    <>
      <Header />
      <div className="checkbox-container">
        <h3><strong>List of Enqueries</strong></h3>
        {queryList}
      </div>
    </>
  )
}
