import React, { useEffect, useState } from 'react';
import './App.scss';

import Card from './Card/Card';
import Header from './Header/Header';

function App() {
  const [appartments, setAppartments] = useState({});

  useEffect(() => {
    fetch(`/api.json`).then(response => {
      return response.json();
    }).then(data => {
      setAppartments(data.response);
    }).catch(err => {
      return err;
    });
      
  }, []);
  
  const estimate = (index, likeValue) => {
    setAppartments((prevState) => {
      const data = [...prevState];
      data[index].like = !likeValue;
      
      return data;
    });
  }


  return (
    <>
    <Header/>
    <div className="appartments-container">
      {appartments.length && appartments.map((appartment, index) => {
        return <Card
                  key={appartment.id} 
                  info={appartment} 
                  estimate={() => estimate(index, appartment.like)}
                />
      })} 
    </div>
    </>
  );
}

export default App;
