import { useState } from 'react'
import { collection, addDoc, } from "firebase/firestore"; 
import './App.css'

import { database } from './firebase/config';



function Form (){
    const [register] = useState('ajouter')


    const createDocument = async (collectionName, documentData) => {
      try {
        const docregister = await addDoc(collection(database, collectionName), documentData);

      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }




    const [Name, setName] = useState('');
    const [Price, setPrice] = useState('');
    const [Color, setColor] = useState('');
// le formulaire de création qui inporte des donner vers firebase
    return(
        <div>
  
        <form>
      <div className="form">
          <div className="form-body">

              <>
                  <label  for="Name">Name </label>
                  <input  
                  type="text" 
                  id="Name" 
                  placeholder="Name" 
                  value={Name} 
                  onChange={(inputElement)=>{setName(inputElement.target.value)}} />
              </>
              <>
              <label  for="Price">Price </label>
                  <input  
                  type="text" 
                  id="Price" 
                  placeholder="Price" 
                  value={Price} 
                  onChange={(inputElement)=>{setPrice(inputElement.target.value)}} />
              </>

              <>
              <label  for="Color">Color </label>
                  <input  
                  type="text" 
                  id="Color" 
                  placeholder="Color" 
                  value={Color} 
                  onChange={(inputElement)=>{setColor(inputElement.target.value)}} />
              </>

              

          </div>
      </div>
    </form>

    <button onClick={() => createDocument('user', {Price:{Price}, Name:{Name}, Color:{Color}})}>
              {register}
              </button>
    </div>
    )
}
export default Form