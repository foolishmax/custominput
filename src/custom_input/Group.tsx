import React from 'react'
import classNames from 'classnames'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import { SizeType } from '../config-provider/SizeContext'

export interface GroupProps {
  prefixCls?: string;
  className?: string;
  size?: SizeType; 
  compact?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Group = (props: GroupProps) => {
  <ConfigConsumer>
    {({ getPrefixCls, direction }: ConfigConsumerProps) => {
      const { prefixCls: customizePrefixCls, className = '' } = props;
      const prefixCls = getPrefixCls('input-group', customizePrefixCls);
      const cls = classNames(
        prefixCls,
        {
          [`${prefixCls}-lg`]: props.size === 'large',
          [`${prefixCls}-sm`]: props.size === 'small',
          [`${prefixCls}-compact`]: props.compact,
          [`${prefixCls}-rtl`]: direction === 'rtl',
        },
        className,
      );
      return (
        <span
          className={cls}
          style={props.style}
          // onMouseEnter={props.onMouseEnter}
          // onMouseLeave={props.onMouseLeave}
          // onFocus={props.onFocus}
          // onBlur={props.onBlur}
        >
          {props.children}
        </span>
      );
    }}
  </ConfigConsumer>
}

export default Group;