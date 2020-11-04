import React from 'react'
import classNames from 'classnames'
import {prefixCls} from '../constants'
// import {ConfigConsumer} from '../config-provider'
import './index.less'

type SizeType = 'small' | 'middle' | 'large' | undefined;

interface InputProps {
  size?: SizeType; 
}

export default function CustomInput(props: InputProps) {
  const {size} = props;

  const inputClass = classNames(`${prefixCls}-input`,{
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-sm`]:size === 'small',
  })

  return (
    <div>123</div>
  // <ConfigConsumer>{this.renderComponent}</ConfigConsumer>
  )

























  // return (
  //   <div className={`${prefixCls}-input-wraper`}>
  //     <span className={`${prefixCls}-input-affix-wrapper`}>
  //       <input
  //       type="text"
  //       className={`${prefixCls}-input ${inputClass}`}
  //     />
  //     </span>
  //   </div>
  // )
}