import React from 'react';
import ReactDOM from 'react-dom';
import CustomInput from './custom_input/index'

ReactDOM.render(
  <div className="wrapper">
    <CustomInput
    addonBefore="http://"
    addonAfter=".com"
    size="large"
    prefixCls="lb"
    bordered={false}
  />
  </div>,
  document.getElementById('root')
);
