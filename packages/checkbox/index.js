import ElCheckbox from './src/checkbox.js';

/* istanbul ignore next */
ElCheckbox.install = function(Vue) {
  Vue.component(ElCheckbox.name, ElCheckbox);
};

export default ElCheckbox;
