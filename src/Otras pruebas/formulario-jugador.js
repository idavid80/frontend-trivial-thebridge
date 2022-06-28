import React, { useState } from 'react';


function Prueba() {


    const [usuario, setUsuario] = useState('');
    const [categoria, setCategoria] = useState('');


    function insertarUsuario(event) {
        setUsuario(event.target.value);

    }
    function insertarCategoria(event) {
        setCategoria(event.target.value);

    }

    function handleSubmit() {
        console.log('Username: ' + usuario)
        console.log('Categoria: ' + categoria)

        
    }






    return (
        <div>
            <label>Usuario

                <input type="text" onChange={insertarUsuario}></input></label>

            <label>categoria

                <input type="text" onChange={insertarCategoria}></input></label>

            <input type="submit" value="Empezar a Jugar" onClick={handleSubmit} ></input>
        </div>
    )
}


export default Prueba
//output
//Your input value is: x
