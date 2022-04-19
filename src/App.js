import { React, useState } from 'react';






export default function App() {

  const [item, setItem] = useState('')
  const [price, setprice] = useState('')
  const [result, setResult] = useState('')
  const [costbiriyani, setCostbiriyani] = useState('')
  const totalPrice = () => {

    let biriyani = 250
    let dress = 2500
    let GoaTrip = 25000
    let Computer = 250000
    let shirt=200

    if (item === "Dress") {
      let result = dress * price
      setResult(result)

      let costofbiriyani =  result / biriyani
      setCostbiriyani(costofbiriyani)
    }
    if (item ==="GoaTrip") {
      let result = GoaTrip * price
      setResult(result)
      let costofbiriyani =  result / biriyani
      setCostbiriyani(costofbiriyani)

    }
    if (item ==="Computer") {
      let result = Computer * price
      setResult(result)
      let costofbiriyani =  result / biriyani
      setCostbiriyani(costofbiriyani)

      if (item ==="shirt") {
        let result = shirt * price
        setResult(result)
        let costofbiriyani =  result / biriyani
        setCostbiriyani(costofbiriyani)
  
      }
    }

  }
  console.log(result)

  return (
    <div>
      <div>
      <label  for="Item"> Choose a Item : </label>

      <select onChange={(event) => setItem(event.target.value)} name="Items" id="Items">
        <option disabled="true" selected>SELECT ITEM</option>
        <option value="Dress" >Dress</option>
        <option value="GoaTrip">GoaTrip</option>
        <option value="Computer">Computer</option>
        <option value="shirt">shirt</option>
      </select>
      </div>
      <div>

      <label for="Item"> Qantity </label>




      <select onChange={(event) => setprice(event.target.value)} name="Items" id="Items">
      <option disabled="true" selected>SELECT Quantity</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      </div>
      <div class="d-grid gap-2 col-4 d-md-block"> 
  
      <button className='text-left'type="submit" class="btn btn-sm btn-success"onClick={() => totalPrice()}> CONFIRM </button>
      </div>
     
    
     
      <h2 className='text-left' >TOTAL:{result === '' ? 0 : result}</h2>

      <h4 className='text-left'><p>Cost of {costbiriyani} biriyani</p></h4>
    </div>
  )
}


