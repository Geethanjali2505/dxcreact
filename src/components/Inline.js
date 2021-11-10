import React from 'react'

//demo on inline styling

const heading = {
    fontSize: '72px',
    color: 'skyblue'

}

function Inline() {
    return (
        <div>
            <h1 style = {heading}>Heading</h1>
        </div>
    )
}

export default Inline