import logo from './logo.svg';
import React from 'react';
import Heading from './Heading';
import Para from './Para';
import List from './List';
import './App.css';

//18
// function App() {
//   return (
//     <>
//      <Heading/>
//       <Para/>
//      <List/>
//      <Para/>
//     </>
//   );
// }

// export default App;

//19
// function App(){
//   const csstyle = {};


//  let cdate = new Date(2021,5,5,15);
//  cdate =cdate.getHours();
//  let greeting =''

//  if(cdate>=1 && cdate < 12){
//   greeting='Good Morning';
//   csstyle.color='green';
//  }
//  else if(cdate>=12 && cdate<19){
//    greeting='Good Afternoon';
//    csstyle.color='yellow';
//  }
//  else{
//    greeting='Good night';
//    csstyle.color='red';
//  }

//  return(
//    <>
//     <div>
//         <h1> Hello <span style={csstyle}>{greeting}</span> </h1>
//   </div>
// </>
//  )
// }
// export default App;

const utuber='My channel';
const prog='methods';

function myname(){
  let name='tom';
  return name;
}
export default utuber;
export {prog,myname};

