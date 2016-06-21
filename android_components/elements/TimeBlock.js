import React, {PropTypes} from 'react';
import {
  Linking,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

import styles from '../../styles_android/main';
import ES6Bind from '../../utils/ES6Bind';
import Maps from '../containers/Maps';

class TimeBlock extends ES6Bind {
  constructor() {
    super();
    this._bind('handlePress', 'buildLink');
  }
  handlePress() {
    Linking.openURL(this.props.url)
      .catch(err => {
        console.log('Problem linking to google maps: ', err)
      });
  }
  handleSegue() {
    this.props.onSegue(Maps, 0);
  }
  buildLink() {
    const webLink = (
      <TouchableOpacity style={styles.eventLink} onPress={() => {this.handlePress()}} activeOpacity={0.7}>
        <View style={{flex: .8}}>
          <Text style={styles.location}>
            {this.props.location}
          </Text>
          <Text style={styles.time}>
            {this.props.time}
          </Text>
          <Text style={styles.scheduleLinkInfo}>
            Press to view location on google maps
          </Text>
        </View>
        <View style={{flex: .1}}>
        </View>
        <Image
          resizeMode={Image.resizeMode.contain}
          source={require('../../images/right-arrow.png')}
          style={{
            height: 22,
            flex: .1,
            marginTop: 5
          }}/>
      </TouchableOpacity>
    );
    const resourceLink = (
      <TouchableOpacity style={styles.eventLink} onPress={() => {this.handleSegue()}} activeOpacity={0.7}>
        <View style={{flex: .8}}>
          <Text style={styles.location}>
            {this.props.location}
          </Text>
          <Text style={styles.time}>
            {this.props.time}
          </Text>
          <Text style={styles.scheduleLinkInfo}>
            Press to view RCED floor plan
          </Text>
        </View>
        <View style={{flex: .1}}>
        </View>
        <Image
          resizeMode={Image.resizeMode.contain}
          source={require('../../images/right-arrow.png')}
          style={{
            height: 22,
            flex: .1,
            marginTop: 5
          }}/>
      </TouchableOpacity>
    );

    var chosenLink = (this.props.locationType === 0) ? webLink : resourceLink;
    return chosenLink;
  }
  render() {
    const ScheduleLink = this.buildLink();
    return (
      <View>
        {ScheduleLink}
      </View>
    )
  }
}

TimeBlock.propTypes = {
  location: PropTypes.string.isRequired,
  locationType: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default TimeBlock;
