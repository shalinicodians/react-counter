import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter'  

function App() {
  const bucketArr=[
    {
      id:'1',
      name:'first',
      
    },
    {
      id:'2',
      name:'second'
    },
    {
      id:'3',
      name:'third'
    },
    {
      id:'4',
      name:'fourth'
    }
  ]
  const bucketlistarr=bucketArr.map((bucket_arr,i)=>{
    return (
      <div>
        <Counter total='0' id={bucketArr[i].id}/><br/>
      </div>
    );
  });
  return (
    <div>
      <h1>first task</h1>
      <div>{bucketlistarr}</div>
  
    </div>
  )
  
}

export default App;
