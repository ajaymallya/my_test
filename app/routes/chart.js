import Ember from 'ember';

var ChartRoute = Ember.Route.extend({
    model: function(params) {
      console.log("In chartROute");
      console.log('params: ' + JSON.stringify(params));
      return Ember.$.getJSON('http://localhost:3000/stock_data');
    },
    renderTemplate: function() {
      this.render({ outlet: 'chart' });
    },
    setupController:function(controller, model) {
      controller.set('model', model);
    },
    actions: {
      getChart: function() {
        console.log('In getChart');
        console.log(this.get('controller.model').symbol);
        this.transitionTo('chart',this.get('controller.model').symbol);
      }
    }
});

export default ChartRoute;

