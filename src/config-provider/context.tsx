import React from 'react'

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
    if(customizePrefixCls) return `${customizePrefixCls}-input`;

    return suffixCls ? `lb-${suffixCls}` : 'lb';
  },
})

export const ConfigConsumer = ConfigContext.Consumer