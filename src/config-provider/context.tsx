import React from 'react'

type SizeType = 'small' | 'middle' | 'large' | undefined;
const SizeContext = React.createContext<SizeType>(undefined);

export type DirectionType = 'ltr' | 'rtl' | undefined;
export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls?: string,CustomizePrefixCls?: string) => string;
  direction?: DirectionType;
  input?: {
    autoComplete?: string;
  }
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: (suffixCls?: string,customizePrefixCls?:string) => {
    if(customizePrefixCls) return customizePrefixCls;

    return suffixCls ? `lb-${suffixCls}` : 'ant';
  },
})

export const ConfigConsumer = ConfigContext.Consumer