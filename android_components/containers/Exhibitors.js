import React from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';

import db from '../../db/db';
import styles from '../../styles_android/main';
import ES6Bind from '../../utils/ES6Bind';
import Exhibitor from '../elements/Exhibitor';

class Exhibitors extends ES6Bind {
  constructor() {
    super();
    this._bind('listExhibitors');
  }
  listExhibitors() {
    return db.exhibitors.map((item, index) => {
      return (
        <Exhibitor
          key={index}
          name={item.name}
          details={item.details}
          url={item.url}
          phone={item.phone}/>
      );
    });
  }
  render() {
    const exhibitorList = this.listExhibitors();
    return (
      <ScrollView>
        {exhibitorList}
      </ScrollView>
    )
  }
}

export default Exhibitors;
