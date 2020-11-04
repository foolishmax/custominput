import React from 'react'

type SizeType = 'small' | 'middle' | 'large' | undefined;
const SizeContext = React.createContext<SizeType>(undefined);