import React, {PropTypes} from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import styles from '../../styles_android/main';
import ES6Bind from '../../utils/ES6Bind';
import Resources from '../containers/Resources';

class Talk extends ES6Bind {
  constructor() {
    super();
    this._bind('handleSegue');
  }
  handleSegue() {
    return this.props.onSegue(this.props.url);
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
    const homeLab = this.props.labs[0].name;
    const labBlock = (
      <View>
        <Text style={styles.smallRegText}>
          {homeLab}
        </Text>
      </View>
    );
    const linkArrow = (
      <Image
        resizeMode={Image.resizeMode.contain}
        source={require('../../images/right-arrow-blue.png')}
        style={styles.talkArrow}
        />
    );
    return (
      <TouchableOpacity onPress={this.handleSegue} activeOpacity={0.6}>
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
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: .9}}>
            <Text style={styles.bigRegText}>
              {this.props.title}
            </Text>
            {labBlock}
          </View>
          {linkArrow}
        </View>
      </TouchableOpacity>
    )
  }
}

Talk.propTypes = {
  onSegue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  labs: PropTypes.array.isRequired
};

export default Talk;
