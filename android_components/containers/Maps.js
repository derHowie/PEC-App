import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';

import styles from '../../styles_android/main';
import ES6Bind from '../../utils/ES6Bind';

class Maps extends ES6Bind {
  constructor() {
    super();
    this._bind('handlePress');
  }
  handlePress(url) {
    Linking.openURL(url)
      .catch(err => {
        console.log('Error linking to google maps: ', err);
      });
  }
  render() {
    return (
      <ScrollView>
        <TouchableOpacity style={styles.resourceHeaderContainer} activeOpacity={.76} onPress={() => {this.handlePress('https://www.google.com/maps/place/Donald+W.+Reynolds+Center+for+Enterprise+Development,+Fayetteville,+AR+72701/@36.0646598,-94.1758871,17z/data=!3m1!4b1!4m5!3m4!1s0x87c96ee0c3154f37:0xd8640a84ff183658!8m2!3d36.0646619!4d-94.1736775')}}>
          <View style={{flex: .9}}>
            <Text style={styles.resourceHeader}>
              Reynolds Center Floor Plan
            </Text>
            <Text style={styles.speakerLinkInfo}>
              Press to view location on google maps
            </Text>
          </View>
          <Image
            resizeMode={Image.resizeMode.contain}
            source={require('../../images/right-arrow.png')}
            style={{
              height: 22,
              flex: .1,
              marginTop: 5,
            }}/>
        </TouchableOpacity>
        <View style={styles.floorPlanContainer}>
          <Image
            source={require('../../images/rcedFloorPlan.png')}
            style={styles.floorPlan}
            resizeMode={Image.resizeMode.contain}/>
        </View>
        <Text style={styles.speakerHeader}>
          LINKS:
        </Text>
        <View>
          <TouchableOpacity style={styles.exhibitorLinkContainer} activeOpacity={.7} onPress={() => {this.handlePress('http://www.uark.edu/ua/pec76/index.html')}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.resourceLink}>
                PEC 2016 Website
              </Text>
              <Image
                resizeMode={Image.resizeMode.contain}
                source={require('../../images/right-arrow.png')}
                style={styles.talkArrow}
                />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exhibitorLinkContainer} activeOpacity={.7} onPress={() => {this.handlePress('http://www.uark.edu/ua/pec76/files/abstract.pdf')}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.resourceLink}>
                PEC 2016 Guide/Abstracts (PDF)
              </Text>
              <Image
                resizeMode={Image.resizeMode.contain}
                source={require('../../images/right-arrow.png')}
                style={styles.talkArrow}
                />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exhibitorLinkContainer} activeOpacity={.7} onPress={() => {this.handlePress('http://www.uark.edu')}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.resourceLink}>
                University of Arkansas Homepage
              </Text>
              <Image
                resizeMode={Image.resizeMode.contain}
                source={require('../../images/right-arrow.png')}
                style={styles.talkArrow}
                />
            </View>
          </TouchableOpacity>
          <View style={{marginTop: 5}}></View>
        </View>
      </ScrollView>
    )
  }
}

export default Maps;
