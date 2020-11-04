import React from 'react'
import classNames from 'classnames'
import {prefixCls} from '../constants'
import {ConfigConsumer,ConfigConsumerProps} from '../config-provider'
import './index.less'

type SizeType = 'small' | 'middle' | 'large' | undefined;

interface InputProps {
  size?: SizeType; 
  prefixCls: string;
  bordered: boolean;
}

const RenderComponent = (props: ConfigConsumerProps) => {
  // { getPrefixCls, direction, input }
  console.log(props);
  
  const { prefixCls: customizePrefixCls, bordered = true } = props;
  // const prefixCls = getPrefixCls('input', customizePrefixCls);
  // this.direction = direction;

  return (
    <div>123</div>
    // <SizeContext.Consumer>
    //   {size => (
    //     <ClearableLabeledInput
    //       size={size}
    //       {...this.props}
    //       prefixCls={prefixCls}
    //       inputType="input"
    //       value={fixControlledValue(value)}
    //       element={this.renderInput(prefixCls, size, bordered, input)}
    //       handleReset={this.handleReset}
    //       ref={this.saveClearableInput}
    //       direction={direction}
    //       focused={focused}
    //       triggerFocus={this.focus}
    //       bordered={bordered}
    //     />
    //   )}
    // </SizeContext.Consumer>
  );
};

export default function CustomInput(props: InputProps) {
  const {size} = props;

  // const inputClass = classNames(`${prefixCls}-input`,{
  //   [`${prefixCls}-lg`]: size === 'large',
  //   [`${prefixCls}-sm`]:size === 'small',
  // })

  return (
  <ConfigConsumer>{renderComponent}</ConfigConsumer>
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