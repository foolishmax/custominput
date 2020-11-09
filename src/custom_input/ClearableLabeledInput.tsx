import React from 'react';
import classNames from 'classnames';
import { SizeType } from '../config-provider/SizeContext';
import {InputProps} from './Input'
import { cloneElement } from './reactNode'
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';

export function hasPrefixSuffix(props: InputProps | ClearableInputProps) {
  return !!(props.prefix || props.suffix || props.allowClear);
}

function hasAddon(props: InputProps | ClearableInputProps) {
  return !!(props.addonBefore || props.addonAfter);
}

interface BasicProps {
  prefixCls: string;
  style?:object;
  element: React.ReactElement;
  handleReset: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  className?: string;
  direction?: any;
  focused?: boolean;
  value?: any;
  disabled?: boolean;
  allowClear?: boolean;
  bordered: boolean;
}

interface ClearableInputProps extends BasicProps {
  size?: SizeType;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export default function ClearableLabeledInput(props: ClearableInputProps) {
  const {prefixCls, element} = props;
  const containerRef = React.createRef<HTMLSpanElement>();

  const renderClearIcon = (prefixCls: string) => {
    const { allowClear, handleReset,value,disabled } = props;
    if (!allowClear) {
      return null;
    }

    const needClear = !disabled && value;
    return (
      <CloseCircleFilled
        onClick={handleReset}
        className={classNames(`${prefixCls}-clear-icon`,{
          [`${prefixCls}-clear-icon-hidden`]: !needClear,
        })}
      />
    )
  }

  const renderSuffix = (prefixCls: string) => {
    const { suffix, allowClear } = props;
    if (suffix || allowClear) {
      return (
        <span className={`${prefixCls}-suffix`}>
          {renderClearIcon(prefixCls)}
          {suffix}
        </span>
      )
    }
    return null;
  }

  const renderLabeledIcon = (prefixCls: string, element: React.ReactElement) => {
    const {
      focused,
      value,
      prefix,
      className,
      size,
      disabled,
      style,
      bordered,
    } = props;
    // const suffixNode = renderSuffix(prefixCls);
    // if (!hasPrefixSuffix(props)) {
    //   //增强代码健壮性，比如使用HOC时，确定传入的是否为React Element，防止渲染出错
    //   return cloneElement(element, {
    //     value,
    //   });
    // }
    const suffixNode = renderSuffix(prefixCls);

    const prefixNode = prefix ? <span className={`${prefixCls}-prefix`}>{prefix}</span> : null;

    const affixWrapperCls = classNames(`${prefixCls}-affix-wrapper`, {
      [`${prefixCls}-affix-wrapper-focused`]: focused,
      [`${prefixCls}-affix-wrapper-disabled`]: disabled,
      [`${prefixCls}-affix-wrapper-sm`]: size === 'small',
      [`${prefixCls}-affix-wrapper-lg`]: size === 'large',
      [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
      // className will go to addon wrapper
      [`${className}`]: !hasAddon(props) && className,
    });
    return (
      <span
        ref={containerRef}
        className={affixWrapperCls}
        style={style}
        // onMouseUp={onInputMouseUp}
      >
        {prefixNode}
        {cloneElement(element, {
          style: null,
          value,
          // className: getInputClassName(prefixCls, bordered, size, disabled),
        })}
        {suffixNode}
      </span>
    );
}


  const renderInputWithLabel = (prefixCls: string, labeledElement: React.ReactElement) => {
    const { addonBefore, addonAfter, style, size, className } = props;
    // Not wrap when there is not addons
    if (!hasAddon(props)) {
      return labeledElement;
    }

    const wrapperClassName = `${prefixCls}-group`;
    const addonClassName = `${wrapperClassName}-addon`;
    const addonBeforeNode = addonBefore ? (
      <span className={addonClassName}>{addonBefore}</span>
    ) : null;
    const addonAfterNode = addonAfter ? <span className={addonClassName}>{addonAfter}</span> : null;

    const mergedWrapperClassName = classNames(`${prefixCls}-wrapper`, wrapperClassName);

    const mergedGroupClassName = classNames(
      `${prefixCls}-group-wrapper`,
      {
        [`${prefixCls}-group-wrapper-sm`]: size === 'small',
        [`${prefixCls}-group-wrapper-lg`]: size === 'large',
      },
      className,
    );

    // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper
    return (
      <span className={mergedGroupClassName} style={style}>
        <span className={mergedWrapperClassName}>
          {addonBeforeNode}
          {cloneElement(labeledElement, { style: null })}
          {addonAfterNode}
        </span>
      </span>
    );
  };

  return (
  <div>{renderInputWithLabel(prefixCls, renderLabeledIcon(prefixCls, element))}</div>
  )
}