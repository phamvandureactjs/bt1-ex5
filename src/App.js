import React, {useState} from "react";
function App() {
  // const [number1, setNumber1] = useState(0);
  // const [number2, setNumber2] = useState(0);

  // const sum = number1 + number2;
  // const multiphy = number1 * number2;

  // return (
  //   <div className='container'>
  //     <input type='number' value = {number1} onChange = {e => setNumber1(parseInt(e.target.value))} />
  //     <input type='number' value = {number2} onChange = {e => setNumber2(parseInt(e.target.value))} />
  //     <p>Tổng của 2 số là {sum}</p>
  //     <p>Tích của 2 số là {multiphy}</p>
  //   </div>
  // );
  // const [number1, setNumber1] = useState(0);
  // const [number2, setNumber2] = useState(0);
  // const [sum, setSum] = useState(number1 + number2);
  // const [mul, setMul] = useState(number1 * number2);
  const [number1, setNumber1] = useState(3);
  const [number2, setNumber2] = useState(2);
  const [sum, setSum] = useState(0);
  const [multiphy, setMultiphy] = useState(0);
  const cal = () => {
    console.log(number1);
    setSum(number1 + number2);
    setMultiphy(number1 * number2);

  }
  return (
    <div className='container'>
      <input type='number' value = {number1} onChange = {e => setNumber1(parseInt(e.target.value))} />
      <input type='number' value = {number2} onChange = {e => setNumber2(parseInt(e.target.value))} />
      <button onClick ={() => {setSum(number1 + number2) } }> Tong</button>
      <button onClick ={() => {setMultiphy(number1 * number2) } }> Tich</button>
      
      {/* <button onClick ={cal}> Tính</button> */}
      <p>Tổng của 2 số là {sum}</p>
      <p>Tích của 2 số là {multiphy}</p>
      
    </div>
  );
  
}

export default App;
