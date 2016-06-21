import React, {PropTypes} from 'react';
import {
  Linking,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';

import styles from '../../styles/main';
import ES6Bind from '../../utils/ES6Bind';

class Exhibitor extends ES6Bind {
  constructor() {
    super();
    this._bind('handlePress');
  }
  handlePress() {
    Linking.openURL(this.props.url)
      .catch(err => {
        console.log('Problem linking to exhibitor website: ', err)
      });
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handlePress}  style={styles.exhibitorLinkContainer} activeOpacity={.7}>
          <View style={{flex: .9}}>
            <Text style={styles.exhibitorLinkText}>
              {this.props.name}
            </Text>
            <Text style={styles.exhibitorPhone}>
              Phone: {this.props.phone}
            </Text>
            <Text style={styles.exhibitorWebsite}>
              Press to visit website
            </Text>
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
        <Text style={styles.speakerText}>
          {this.props.details}
        </Text>
      </View>
    )
  }
}

Exhibitor.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Exhibitor;
