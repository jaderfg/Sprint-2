import React from 'react'
import { Overley } from '../styles/Style'

const Modal = ({children, estado}) => {

      
    
    
    

    return (
        <>
            { estado &&
                <Overley>
                    {children}
                </Overley>

            }
        </>
    )
}

export default Modal
