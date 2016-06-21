import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';

import ES6Bind from '../../utils/ES6Bind';
import styles from '../../styles/main';
import ScheduleMenu from './ScheduleMenu';
import Speaker from './Speaker';
import Maps from './Maps';
import Exhibitors from './Exhibitors';
import Menu from '../elements/Menu';

class Home extends ES6Bind {
  constructor() {
    super();
    this._bind('handleSegue');
  }
  handleSegue(Component, name) {
    this.props.toRoute({
      component: Component,
      name: name,
      headerStyle: styles.subMenuHeader,
      titleStyle: styles.subMenuHeaderText
    });
  }

  render() {
    const linkTitles = ['SCHEDULE', 'INVITED SPEAKERS', 'RESOURCES', 'EXHIBITORS'];
    const segues = [ScheduleMenu, Speaker, Maps, Exhibitors];
    return (
      <ScrollView style={styles.scrollViewOverflow}>
        <Image style={styles.bgImageContainer} source={require('../../images/graphene.jpeg')}>
          <View>
            <Text style={styles.homeSmallText}>THE</Text>
            <Text style={styles.homeYear}>2016</Text>
            <Text style={styles.homeTitle}>Physical Electronics Conference</Text>
          </View>
        </Image>
        <Menu
          menuStyle={styles.homeButton}
          onSegue={this.handleSegue}
          targetPath={segues}
          linkTitles={linkTitles}/>
        <View style={{marginTop: 25}}>
          <Text style={styles.homePageHighlight}>
            University of Arkansas
          </Text>
        </View>
        <View>
          <Text style={styles.homeTown}>
            DEPARTMENT OF PHYSICS
          </Text>
        </View>
        <Text style={{
            textAlign: 'center'
          }}>
          <Text style={styles.homePageHighlight}>
            June 20th - 23rd
          </Text>
        </Text>
        <Text style={styles.homeTown}>
          FAYETTEVILLE, AR
        </Text>
      </ScrollView>
    )
  }
}

export default Home;
