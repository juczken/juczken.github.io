import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../homeworks/ts1/1_base';
import '../homeworks/ts1/3_write';
import { createRandomOperation, createRandomProduct } from '../homeworks/ts1/3_write';
import { getNumberedArray, toStringArray, transformCustomers } from '../homeworks/ts1/1_base';
import { Layout } from 'src/shared/ui/Layout';
import { TestCart } from 'src/test/TestCart';


function App() {
  return (
    <div className="App">
      {/* <TestCart/> */}
      <Layout/>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>-------------------------------------------------------------</p>
        <p> {JSON.stringify(getNumberedArray([1,2,3,4,5]))} </p>
        <p> {JSON.stringify(toStringArray([{"value":1,"number":0},{"value":2,"number":1},{"value":3,"number":2},{"value":4,"number":3},{"value":5,"number":4}]))} </p>
        <p> {JSON.stringify(toStringArray(getNumberedArray([1,2,3,4,5])))} </p>
        <p> {JSON.stringify(getNumberedArray(['1','2','3','4','5']))} </p>
        <p> {JSON.stringify(toStringArray([{"value":'1',"number":0},{"value":'2',"number":1},{"value":'3',"number":2},{"value":'4',"number":3},{"value":'5',"number":4}]))} </p>
        <p> {JSON.stringify(toStringArray(getNumberedArray(['1','2','3','4','5'])))} </p>
        <p>-------------------------------------------------------------</p>
        <p> {JSON.stringify(transformCustomers([{age:11,id:1,isSubscribed:true,name:'1'},{age:22,id:2,isSubscribed:true,name:'2'},{age:33,id:3,isSubscribed:false,name:'3'}]))} </p>
        <p>-------------------------------------------------------------</p>
        <p> {JSON.stringify(createRandomOperation('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomOperation('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomOperation('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomOperation('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomOperation('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomOperation('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomOperation('2024-09-11T20:20'))} </p>
        <p>-------------------------------------------------------------</p>
        <p> {JSON.stringify(createRandomProduct('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomProduct('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomProduct('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomProduct('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomProduct('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomProduct('2024-09-11T20:20'))} </p>
        <p> {JSON.stringify(createRandomProduct('2024-09-11T20:20'))} </p>
        <p>-------------------------------------------------------------</p>
      </header> */}
    </div>
  );
}

export default App;
