import React, {PropTypes} from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import styles from '../../styles/main';
import ES6Bind from '../../utils/ES6Bind';

class BackArrow extends ES6Bind {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image source={require('../../images/left-arrow.png')} resizeMode={Image.resizeMode.contain} style={{
          height: 34,
          marginBottom: 6,
          marginLeft: -10,
          opacity: .8
        }}>
        </Image>
      </View>
    )
  }
}

export default BackArrow;
