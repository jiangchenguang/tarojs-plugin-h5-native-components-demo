import './index.less'
import { View } from '@tarojs/components/dist-h5/react';

const Button = (props) => {
  console.log('=======props===========', props, View);
  return <View class='button'>{props.txt}</View>
}

export default Button;
