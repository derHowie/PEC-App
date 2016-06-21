import React, {PropTypes} from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from '../../styles_android/main';
import ES6Bind from '../../utils/ES6Bind';
import TimeBlock from './TimeBlock';

class GeneralEvent extends ES6Bind {
  constructor() {
    super();
  }
  render() {
    var content = this.props.text.map((item, index) => {
      return (
        <Text key={index} style={styles.regText}>
          {item}
        </Text>
      )
    });
    return (
      <View>
        <TimeBlock
          time={this.props.time}
          location={this.props.location}
          locationType={this.props.locationType}
          onSegue={this.props.onSegue}
          url={this.props.url}/>
        <Text style={styles.scheduleHeader}>
          {this.props.header}
        </Text>
        {content}
      </View>
    )
  }
}

GeneralEvent.propTypes = {
  text: PropTypes.array.isRequired,
  time: PropTypes.string.isRequired,
  header: PropTypes.string
};

export default GeneralEvent;
