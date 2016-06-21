import React, {PropTypes} from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import styles from '../../styles/main';
import ES6Bind from '../../utils/ES6Bind';

class DateBlock extends ES6Bind {
  constructor() {
    super();
    this._bind('splitDate');
  }
  splitDate() {
    var pieces = this.props.dateString.split(' ');
    return (
      <View>
        <Text style={styles.dateMonth}>
          {pieces[0]}
        </Text>
        <Text style={styles.dateDay}>
          {pieces[1]}
        </Text>
        <Text style={styles.dateYear}>
          {pieces[2]}
        </Text>
      </View>
    )
  }
  render() {
    var date = this.splitDate();
    return (
      <View>
        <Image source={this.props.img} style={styles.dateImage}>
          {date}
        </Image>
      </View>
    )
  }
}

DateBlock.propTypes = {
  dateString: PropTypes.string.isRequired
};

export default DateBlock;
