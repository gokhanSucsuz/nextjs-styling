import React, { useState } from 'react'

const InlineStyle = () => {
    const [fontSize, setFontSize] = useState(20)
    return (
        <div>
            <p style={{
                fontSize: fontSize
            }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur unde esse magni quae sit nemo reiciendis consequatur adipisci tempore quis ratione quisquam vel quos aliquam dicta a error quas nulla aut delectus, ipsam doloremque. Obcaecati facere quam repellendus ut iure ipsam, consequuntur, modi aut perferendis voluptatibus nulla qui deleniti a?</p>
            <button onClick={() => {
                setFontSize(Math.random() * 40)
            }} style={{ backgroundColor: "red", padding: "10px", color: "white", borderRadius: "10px" }}>Change Font Size</button>
        </div>
    )
}

export default InlineStyle