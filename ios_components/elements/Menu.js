import React, {PropTypes} from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from '../../styles/main';
import ES6Bind from '../../utils/ES6Bind';
import MenuItem from './MenuItem';

class Menu extends ES6Bind {
  constructor() {
    super();
    this._bind('buildMenu');
  }
  buildMenu() {
    const linkTitles = this.props.linkTitles;
    const colorSelection = [styles.subMenuButtonOne, styles.subMenuButtonTwo, styles.subMenuButtonThree];

    return linkTitles.map((link, index) => {
      var target = (this.props.targetPath.length === 1) ? this.props.targetPath[0] : this.props.targetPath[index];
      var data = this.props.noData ? -1 : index;
      var styling = (this.props.menuStyle)
        ? this.props.menuStyle
        : colorSelection[index];
      return (
        <MenuItem
          menuStyle={styling}
          onSegue={this.props.onSegue}
          targetPath={target}
          name={link}
          key={index}
          targetData={data}/>
      )
    });
  }
  render() {
    var menu = this.buildMenu();
    return (
      <View style={{flex: 1}}>
        {menu}
      </View>
    )
  }
}

Menu.propTypes = {
  targetPath: PropTypes.array.isRequired,
  onSegue: PropTypes.func.isRequired,
  linkTitles: PropTypes.array.isRequired,
  noData: PropTypes.bool
};

export default Menu;
