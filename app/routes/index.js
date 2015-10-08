import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
    model: function(params) {
      return Ember.$.getJSON('http://localhost:3000/stock_data');
    },
    actions: {
      getChart: function(context) {
        this.transitionTo('chart',this.get('controller.model').symbol);
      }
    }
});

export default IndexRoute;

