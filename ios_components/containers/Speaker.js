import React, {PropTypes} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View,
  Linking
} from 'react-native';

import db from '../../db/db';
import styles from '../../styles/main';
import ES6Bind from '../../utils/ES6Bind';

class Speaker extends ES6Bind {
  constructor() {
    super();
    this._bind('showSpeakers', 'handlePress');
  }
  handlePress(url) {
    Linking.openURL(url)
      .catch(err => {
        console.log('Error linking to google maps: ', err);
      });
  }
  showSpeakers() {
    var speakers = db.speakers;
    var content = speakers.map((speaker, index) => {
      var speakerAbstract = db.abstracts[speaker.abstractNum];
      return (
        <View key={index}>
          <View>
            <Image source={speaker.img} style={styles.speakerImage}>
              <Text style={styles.speakerName}>
                {speaker.name}
              </Text>
            </Image>
          </View>
          <TouchableOpacity style={styles.speakerTalkTitleContainer} activeOpacity={.7} onPress={() => {this.handlePress(speaker.url)}}>
            <View style={{flex: .9}}>
              <Text style={styles.speakerTalkTitle}>
                {speakerAbstract.title}
              </Text>
              <Text style={styles.speakerLinkInfo}>
                Press to view abstract
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
          <View>
            <Text style={styles.speakerText}>
              {speaker.bio}
            </Text>
          </View>
          <View style={{margin: 5}}></View>
        </View>
      );
    });
    return content;
  }
  render() {
    const speakerInfo = this.showSpeakers();
    return (
      <ScrollView>
        {speakerInfo}
      </ScrollView>
    )
  }
}

Speaker.propTypes = {

};

export default Speaker;
