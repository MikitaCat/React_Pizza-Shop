import React from 'react'
import classNames from 'classnames'

const Button = ({className, outline, children}) => {
    return (
        <button href="/cart.html" className={classNames('button', className, {
            "button--outline": outline
        })}>
            {children}
      </button>
    )
}

export default Button