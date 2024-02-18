import React, { useState } from 'react'

function List() {
    const [state, setState] = useState(["A second item", "A third item", "A fourth item", "And a fifth one"])
    return (
        <>

            <ul className="list-group">
                {
                    state.map(ele => {
                        return <li className='list-group-item'>{ele}</li>

                    })
                }
            </ul>
        </>
    )
}

export default List