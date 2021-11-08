import React, {useRef, useState} from 'react';

//Importando los Componentes
import '../index.css';

const Form = () => {
    //Ref para el input
    const formRef = useRef(null);
    const [value,setValue] = useState([]);

    const addData = (e) => {
        e.preventDefault();
        setValue([...value, formRef.current.value]);        
    }

    return(
        <div className="form" className="bg-red-500 block">
            <form>
                <label >Ingrese el ID a buscar:</label>
                <input ref={formRef} type="number" placeholder="Ingrese el ID..." />
                <button type="submit" onClick={addData} className="rounded bg-red-700 py-2 text-white font-bold shadow w-24">Enviar</button>
            </form>
        </div>
    );    
}

export default Form;