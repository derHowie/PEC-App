import React, {PropTypes} from 'react';
import {
  Linking,
  ScrollView,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import db from '../../db/db';

import styles from '../../styles/main';
import ES6Bind from '../../utils/ES6Bind';
import GeneralEvent from '../elements/GeneralEvent';
import DateBlock from '../elements/DateBlock';
import Talk from '../elements/Talk';
import SessionNote from '../elements/SessionNote';

class Schedule extends ES6Bind {
  constructor() {
    super();
    this._bind('showSchedule', 'handleSegue', 'checkMap', 'filterSchedule');
  }
  handleSegue(Component, target) {
    this.props.toRoute({
      component: Component,
      name: 'RESOURCES',
      data: target
    });
  }
  checkMap(url) {
    Linking.openURL(url)
      .catch(err => {
        console.log('Error linking to google maps: ', err);
      });
  }
  filterSchedule(dataSet) {
    var content = dataSet.map((item, index) => {
      if (item.type === 'dayTitle') {
        return (
          <DateBlock
            img={item.img}
            imgStyle={styles.dateImage}
            dateString={item.text}
            key={index}/>
        )
      }
      else if (item.type === 'generalEvent') {
        return (
          <GeneralEvent
            onSegue={this.handleSegue}
            header={item.header}
            url={item.url}
            location={item.location}
            locationType={item.locationType}
            text={item.text}
            time={item.time}
            key={index}/>
        )
      }
      else if (item.type === 'talk') {
        return (
          <Talk
            time={item.time}
            title={item.title}
            labs={item.labs}
            abstractNum={item.abstractNum}
            onSegue={this.checkMap}
            url={item.url}
            key={index}/>
        )
      }
      else if (item.type === 'note') {
        return (
          <View key={index} style={styles.scheduleNote}>
            <Text style={{color: 'rgb(75, 162, 212)', fontFamily: 'Optima'}}>
              {item.text}
            </Text>
          </View>
        )
      }
      else if (item.type === 'sessionnote') {
        return (
          <SessionNote
            title={item.title}
            labs={item.labs}
            time={item.time}
            key={index}/>
        )
      }
    });
    return content;
  }
  showSchedule() {
    var keys = ['day1', 'day3', 'day4'];
    var dataSet = db.schedule[keys[this.props.data]];
    return this.filterSchedule(dataSet);
  }
  render() {
    const scheduleItems = this.showSchedule();
    return (
      <ScrollView>
        {scheduleItems}
      </ScrollView>
    )
  }
}

Schedule.propTypes = {
  data: PropTypes.number.isRequired
};

export default Schedule;
