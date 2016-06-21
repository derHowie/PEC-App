import React from 'react';
import {
  Navigator,
  Text,
  ScrollView
} from 'react-native';

import styles from '../../styles_android/main';
import ES6Bind from '../../utils/ES6Bind';
import Menu from '../elements/Menu';
import Speaker from './Speaker';

class InvitedTalks extends ES6Bind {
  constructor() {
    super();
    this._bind('handleSegue');
  }
  handleSegue(Component, name, target) {
    this.props.toRoute({
      component: Component,
      name: name,
      data: target,
      sceneConfig: Navigator.SceneConfigs.VerticalUpSwipeJump
    });
  }
  render() {
    const linkTitles = ['PROF. JOCHEN MANNHART \n\n New device frontiers for Electronic Nano-materials', 'PROF. AGNES BARTHELEMY \n\n Ferroelectric-based heterostructures', 'JONATHAN W. THIBADO \n\n What Intel does and where mechanical development fits within Intel'];
    return (
      <ScrollView>
        <Menu
          onSegue={this.handleSegue}
          targetPath={[Speaker]}
          linkTitles={linkTitles}/>
      </ScrollView>
    )
  }
}


export default InvitedTalks;
