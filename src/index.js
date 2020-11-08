import React from 'react';
import ReactDOM from 'react-dom';
import CustomInput from './custom_input/index'

const onChange = (e) => {
  console.log(e.target.value)
}

ReactDOM.render(
  <div className="wrapper">
    <CustomInput
      addonBefore="http://"
      addonAfter=".com"
      // value="value"
      defaultValue="defaultValue"
      size="large"
      bordered={true}
      onChange={onChange}
      // prefixCls="ebud"
    />
  </div>,
  document.getElementById('root')
);
