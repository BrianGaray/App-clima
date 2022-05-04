import react, {useState} from 'react';



const Form = ({newLocation}) => {
    const [city, setcity] = useState(""); 
     const onSubmit = (e) =>{
         e.preventDefault();
         console.log({city});
         if(city === "" || !city) return;

         newLocation(city);
        }

    return(
    
     <div className='select-container'>
    <div className='Select'>
        <select onClick={onSubmit} value = {city} onChange={(e) =>setcity(e.target.value)}>
            
            <option>seleccionar ciudad</option>
            <option>madrid</option>
            <option>buenos aires</option>
            <option>paris</option>
            <option>tokio</option>
            <option>londres</option>

        </select>
       
        </div>
        </div>   
    
    );
}

export default Form;