import React from 'react'
import ReactDOM from 'react-dom'
import Example from '../_example'

export default {

    init() {
    
        ReactDOM.render(
            <React.StrictMode>
                <Example />
            </React.StrictMode>,
            document.querySelector(".site-title a")
        )

    },

    finalize() {
      
        

    },

  }