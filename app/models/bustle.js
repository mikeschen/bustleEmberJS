import DS from 'ember-data';

export default DS.Model.extend({
  heading: DS.attr(),
  author: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  news: DS.attr()
});
