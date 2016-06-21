import React, {PropTypes} from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from '../../styles_android/main';
import ES6Bind from '../../utils/ES6Bind';

class SessionNote extends ES6Bind {
  constructor() {
    super();
  }
  render() {
    const firstAuthor = this.props.labs[0].authors[0];
    const authorBlock = (
      <View>
        <Text style={styles.blueText}>
          {firstAuthor}
        </Text>
      </View>
    );
    return (
      <View>
        <View style={{flex: 1, marginTop: 8}}>
          <View style={{flex: .5}}>
            <Text style={styles.talkTime}>
              {this.props.time}
            </Text>
          </View>
          <View style={{flex: .5}}>
            {authorBlock}
          </View>
        </View>
        <Text style={styles.regText}>
          {this.props.title}
        </Text>
        <View style={{margin: 10}}></View>
      </View>
    )
  }
}

SessionNote.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  labs: PropTypes.array.isRequired
};

export default SessionNote;
