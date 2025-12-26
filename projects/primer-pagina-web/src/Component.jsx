import React, { useState } from 'react'

export default function Component() {
    const [text, setText] = useState();
    const [update, setUpdate] = useState();

    const textOnChange = (event) => {
        setText(event.target.value)
    }

    const buttonOnClick = (event) => {
        setUpdate(text)
    }

    return (
        <div>
            <input type="text" value={text} onChange={textOnChange} />
            <button onClick={buttonOnClick}>Actualizar</button>
            <p>Texto input: {text}</p>
            <p>texto actualizado: {update}</p>
        </div>
    )
}
