import React from 'react'
function ConditionalRendering() {
    return (
        <div>
            <h1>Conditional Rendering</h1>
            {
                (()=>{
                    if (false) {
                        return (
                            <div>
                                <h1>This is first h1 tag</h1>
                                
                                <h1>This is second h1 tag</h1>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <h1>Else Statement is executed</h1>
                            </div>
                        )

                    }
                })()
            }
        </div>
    )
}
export default ConditionalRendering