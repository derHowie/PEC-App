import React from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from '../../styles/main';
import ES6Bind from '../../utils/ES6Bind';
import DateBlock from '../elements/DateBlock';
import Schedule from './Schedule';

class ScheduleMenu extends ES6Bind {
  constructor() {
    super();
    this._bind('handleSegue');
  }
  handleSegue(target) {
    this.props.toRoute({
      component: Schedule,
      name: 'SCHEDULE',
      data: target
    });
  }
  render() {
    const linkTitles = ['June 20/June 21', 'June 22', 'June 23'];
    return (
      <View style={styles.subMenuContainer}>
        <TouchableOpacity style={styles.subMenuButtonContainer} onPress={() => {this.handleSegue(0)}} activeOpacity={0.55}>
          <Image source={require('../../images/reynolds.png')} style={styles.subMenuImage}>
            <Text style={styles.subMenuMonth}>
              June
            </Text>
            <Text style={styles.subMenuDate}>
              20-21
            </Text>
            <Text style={styles.dateYear}>
              2016
            </Text>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subMenuButtonContainer} onPress={() => {this.handleSegue(1)}} activeOpacity={0.55}>
          <Image source={require('../../images/dicksonst2.jpeg')} style={styles.subMenuImage}>
            <Text style={styles.subMenuMonth}>
              June
            </Text>
            <Text style={styles.subMenuDate}>
              22
            </Text>
            <Text style={styles.dateYear}>
              2016
            </Text>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subMenuButtonContainer} onPress={() => {this.handleSegue(2)}} activeOpacity={0.55}>
          <Image source={require('../../images/crystalbridges2.jpeg')} style={styles.subMenuImage}>
            <Text style={styles.subMenuMonth}>
              June
            </Text>
            <Text style={styles.subMenuDate}>
              23
            </Text>
            <Text style={styles.dateYear}>
              2016
            </Text>
          </Image>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ScheduleMenu;
