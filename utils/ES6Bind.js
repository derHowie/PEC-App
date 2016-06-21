import React from 'React';

class ES6Bind extends React.Component {
  constructor() {
    super();
  }
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }
}

export default ES6Bind;
