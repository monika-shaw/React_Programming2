import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

  //  ReactDOM.render(
  //   <React.StrictMode>
  //      <App />
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 // reportWebVitals();

 //11

    // const fname = 'Tom'

    // const lname = ' cruice'

    // reactDom.render(
    //   <react.Fragment>
    //   {/* <h1>My name is {fname} {lname}</h1>  */}
    //   <h1>name is {fname+ " "+lname}</h1> 

    //   <p>Today is sunny day {2+3}</p>
    //   </react.Fragment>
    //   ,document.getElementById('root')
    // );



    // const fname = 'Tom'

    // const lname = ' cruice'
    
    // template literals example
    //  console.log(`my name is ${fname}`);

    // reactDom.render(
    //   <react.Fragment>
    //   {/* <h1>name is {fname+ " "+lname}</h1>  */}
    //   <h1> {`Hi, my name is ${fname} ${lname}`}</h1> 

    //   <p>Today is sunny day {2+3}</p>
    //   </react.Fragment>
    //   ,document.getElementById('root')
    // );


    //12////////////////////////////////////////


    // const fname='Monika';
    // const lname='Shaw';
    // const currdate= new Date().toLocaleDateString();
    // const currtime = new Date().toLocaleTimeString();

    // reactDom.render(
    //  <react.Fragment>
    //    <h1>My name is {fname+" " +lname}</h1>
    //    <p>Current date is = {currdate}</p>
    //    <p>Current time is = {currtime}</p>

    //  </react.Fragment>
    //  ,document.getElementById('root')

    // );


    //13/////////////////////////


   
       
    // const names ='tom';
    // reactDom.render(
    //    <react.Fragment>
    //      <h1 contentEditable="true">My name is {names}</h1>
    //      <img src="https://picsum.photos/200/300" alt="Random Images"/> 
    //     </react.Fragment>
    //   ,document.getElementById('root')
    // );






    // const names ='tom';

    // const img1="https://picsum.photos/200/300";
    // const img2="https://picsum.photos/250/300";
    // const img3="https://picsum.photos/300/300";
    // const links="https://www.youtube.com";
    
    // reactDom.render(
    //    <React.Fragment>
    //      <h1 contentEditable="true">My name is {names}</h1>
    //             <img src={img1} alt="Random Images"/> 
    //             <img src={img2} alt="Random Images"/> 
    //             <a href={links} target="_blank">
    //             <img src={img3} alt="Random Images"/> 
    //         </a>
    //     </React.Fragment>
    //   ,document.getElementById('root')
    // );

    //14& 15////////////////


    // const names ='tom';

    // const img1="https://picsum.photos/200/300";
    // const img2="https://picsum.photos/250/300";
    // const img3="https://picsum.photos/300/300";
    // const links="https://www.youtube.com";
    
    // reactDom.render(
    //    <React.Fragment>
    //      <h1 contentEditable="true">My name is {names}</h1>
    //      <h2 className="heading">Hello</h2>
    //        <div className='img_div'>
    //             <img src={img1} alt="Random Images"/> 
    //             <img src={img2} alt="Random Images"/> 
    //             <a href={links} target="_blank">
    //             <img src={img3} alt="Random Images"/> 
    //         </a>
    //      </div>
    //     </React.Fragment>
    //   ,document.getElementById('root')
    // );



    //16//////


    // const names ='tom';


    // const heading={
    //   color:'yellow',
    //   textTransform : 'capitalize',
    //   textAlign: 'center'
    // }

    // const img1="https://picsum.photos/200/300";
    // const img2="https://picsum.photos/250/300";
    // const img3="https://picsum.photos/300/300";
    // const links="https://www.youtube.com";
    
    // reactDom.render(
    //    <React.Fragment>
    //      <h1 contentEditable="true">My name is {names}</h1>
    //      <h2 style={
    //        {
    //   color:'yellow',
    //   textTransform : 'capitalize',
    //   textAlign:'center',
    // }
    //      }>Hello</h2>
    //        <div className='img_div'>
    //             <img src={img1} alt="Random Images"/> 
    //             <img src={img2} alt="Random Images"/> 
    //             <a href={links} target="_blank">
    //             <img src={img3} alt="Random Images"/> 
    //         </a>
    //      </div>
    //     </React.Fragment>
    //   ,document.getElementById('root')
    // );







    // const names ='tom';


    // const heading={
    //   color:'yellow',
    //   textTransform : 'capitalize',
    //   textAlign: 'center'
    // }

    // const img1="https://picsum.photos/200/300";
    // const img2="https://picsum.photos/250/300";
    // const img3="https://picsum.photos/300/300";
    // const links="https://www.youtube.com";
    
    // reactDom.render(
    //    <React.Fragment>
    //      <h1 contentEditable="true">My name is {names}</h1>
    //      <h2 style={heading}>Hello, I am Sam</h2>
    //        <div className='img_div'>
    //             <img src={img1} alt="Random Images"/> 
    //             <img src={img2} alt="Random Images"/> 
    //             <a href={links} target="_blank">
    //             <img src={img3} alt="Random Images"/> 
    //         </a>
    //      </div>
    //     </React.Fragment>
    //   ,document.getElementById('root')
    // );

//17//////////////////



// const csstyle = {};


// let cdate = new Date(2021,5,5,15);
// cdate =cdate.getHours();
// let greeting =''

// if(cdate>=1 && cdate < 12){
//  greeting='Good Morning';
//  csstyle.color='green';
// }
// else if(cdate>=12 && cdate<19){
//   greeting='Good Afternoon';
//   csstyle.color='yellow';
// }
// else{
//   greeting='Good night';
//   csstyle.color='red';
// }


// reactDom.render(
//   <React.Fragment>
//   <div>
//   <h1> Hello <span style={csstyle}>{greeting}</span> </h1>
//   </div>
//   </React.Fragment>
//   ,document.getElementById('root')

// );



//18////////////////////
// import Heading from './Heading';
// import Para from './Para';
// import List from './List'

// reactDom.render(
//  <>
//  <Heading/>
//  <Para/>
//  <List/>
  
//  </>,
//  document.getElementById('root')

// )


//app.js///



// import App from './App';

// const a=10,b=20;

// const res=a+b;

// reactDom.render(
//   <>
//   <div>
// <h1>REsult is {res}</h1>
// <App/>  
// </div> 
//   </>,
//   document.getElementById('root')
// )

//19//////////
// import App from './App';

// reactDom.render(
//      <React.Fragment>
//      <App/> 
//      </React.Fragment>
//      ,document.getElementById('root')
  
//    );

   //20
// import utuber, {prog,myname} from './App'


// reactDom.render(
//   <>
//   <ol>
//     <li>Monika</li>
//     <li>{utuber}</li>
//     <li>{prog}</li>
//     <li>{myname()}</li>
//   </ol>
//   </>,
//   document.getElementById('root')
// )


//or

import * as question from './App';


reactDom.render(
  <>
  <ol>
    <li>Monika</li>
    <li>{question.default}</li>
    <li>{question.prog}</li>
    <li>{question.myname()}</li>
  </ol>
  </>,
  document.getElementById('root')
)



