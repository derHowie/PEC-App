import React, {PropTypes} from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import styles from '../../styles_android/main';
import ES6Bind from '../../utils/ES6Bind';

class MenuItem extends ES6Bind {
  constructor() {
    super();
    this._bind('handlePress');
  }
  handlePress() {
    if (this.props.targetData > -1) {
      this.props.onSegue(this.props.targetPath, this.props.name, this.props.targetData);
    } else {
      this.props.onSegue(this.props.targetPath, this.props.name);
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress} style={this.props.menuStyle} activeOpacity={0.6}>
        <View>
          <Text style={styles.buttonText}>
            {this.props.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

MenuItem.propTypes = {
  targetPath: PropTypes.func.isRequired,
  onSegue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default MenuItem;
