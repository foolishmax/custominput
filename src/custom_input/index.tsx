import React from 'react'
import classNames from 'classnames'
import './index.less'

export default function CustomInput() {

  const onFocus = (e:any) => {
    console.log(e)
  }

  return (
    <div className="input">

      <input
        type="text"
        onFocus={onFocus}
        className={classNames("custom-input")}
        // autoComplete={input.autoComplete}
      />
    </div>
  )
}