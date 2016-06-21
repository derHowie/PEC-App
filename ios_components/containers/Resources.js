import React from 'react';
import {
  Navigator,
  Text,
  View
} from 'react-native';

import styles from '../../styles/main';
import ES6Bind from '../../utils/ES6Bind';
import Menu from '../elements/Menu';
import Maps from './Maps';

class Resources extends ES6Bind {
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
    const linkTitles = ['Campus Map', 'Reynolds Center Map'];
    return (
      <View>
        <Menu
          onSegue={this.handleSegue}
          targetPath={[Maps]}
          linkTitles={linkTitles}/>
      </View>
    )
  }
}


export default Resources;
