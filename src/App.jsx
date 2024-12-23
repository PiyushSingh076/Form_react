import { useState } from 'react'
import './App.css'

function App() {
  const[formData,setFormData] =useState({
    text:"",
    checkbox:false,
    radio:'',
    select:''
  });
  function handleChange(e){
    const{name,value,type,checked}=e.target; //destructured e.target
    //in case of form e.target generally ha theese 4 attributes
    // since while defining the inputs and labels we gave them 4 attributes 
    // hence while destructuring e.target must have 4 attributes of same name

    
    setFormData({
      ...formData,
      [name]:type ==='checkbox'? checked : value
    });
  };

  return (
   
      <div className='formContainer'>
        <h1>Form Example</h1>
        <form >
          <div className='formField'>
            <label >Text:</label>
            <input type="text" 
                    name="text" 
                    value={formData.text}
                    onChange={handleChange}/>
          </div>

          <div className='checkBox'>
            <label >
            <input type="checkbox" 
                    name="checkbox" 
                    checked={formData.checkbox}
                    onChange={handleChange}/>
                    CheckBox
            </label>
          </div>


          <div className='radio'>
            <label >Radio:</label>
            <input type="radio" 
                    name="radio" 
                    value='option1'
                    checked={formData.radio==='option1'}
                    onChange={handleChange}/>
                    Option-1
            

            <label >
            <input type="radio" 
                    name="radio" 
                    value='option2'
                    checked={formData.radio==='option2'}
                    //if checked formData should show option 2 
                    onChange={handleChange}/>
                    Option-2
            </label>
          </div>

          {/* Dropdown */}
          <div className='form-field'>
            <label >Select:</label>
            <select name="select" 
                    value={formData.select}
                    onChange={handleChange}>CheckBox
                    <option value="">--Choose an option--</option>
                    <option value="option1">Option1</option>
                    <option value="option2">Option2</option>
                    </select>
          </div>


          <div className='form_data'>
              <h3>Form Data</h3>
              <p><strong>Text:</strong>{formData.text || 'NA'}</p>
              <p><strong>CheckBox:</strong>{formData.checkbox?"Checked":"Unchecked" || 'NA'}</p>
              <p><strong>Radio:</strong>{formData.radio || 'NA'}</p>
              <p><strong>Select:</strong>{formData.select || 'NA'}</p>
          </div>

        </form>
      </div>
    
  )
}

export default App
