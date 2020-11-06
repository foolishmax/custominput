import React from 'react'
import classNames from 'classnames'
import {ConfigConsumer,ConfigConsumerProps} from '../config-provider'
import './index.less'
import ClearableLabeledInput from './ClearableLabeledInput';
import SizeContext, {SizeType } from '../config-provider/SizeContext'

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'type'> {
  size?: SizeType; 
  prefixCls: string;
  bordered: boolean;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
  disabled?: boolean;
  className?: string;
}

export function getInputClassName(
  prefixCls: string,
  bordered: boolean,
  size?: SizeType,
  disabled?: boolean,
  direction?: any,
) {
  return classNames(prefixCls, {
    [`${prefixCls}-sm`]: size === 'small',
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-borderless`]: !bordered,
  });
}

export default function CustomInput(props: InputProps) {

  const direction: any = 'ltr';
  
  const renderInput = (
    prefixCls: string,
    size: SizeType,
    bordered: boolean,
    input: ConfigConsumerProps['input'] = {},
    ) => {
    const { className, addonBefore, addonAfter, size: customizeSize,disabled } = props;

    return (
      <input
        autoComplete={input.autoComplete}
        // {...otherProps}
        // onChange={this.handleChange}
        // onFocus={this.onFocus}
        // onBlur={this.onBlur}
        // onKeyDown={this.handleKeyDown}
        className={classNames(
          getInputClassName(prefixCls, bordered, customizeSize || size, disabled, direction),
          {
            [className!]: className && !addonBefore && !addonAfter,
          },
        )}
        // ref={this.saveInput}
      />
    );
  };

  const renderComponent = ({ getPrefixCls, direction, input }: ConfigConsumerProps) => {
    const {prefixCls:customizePrefixCls,...restProps} = props;
    const {bordered = true} = restProps;
    const prefixCls = getPrefixCls('input', customizePrefixCls);

    return (
      <SizeContext.Consumer>
        {size => (
          <ClearableLabeledInput
            prefixCls={prefixCls}
            {...restProps}
            element={renderInput(prefixCls, size, bordered, input)}
            bordered={bordered}
          />
        )}
      </SizeContext.Consumer>
    );
  };

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