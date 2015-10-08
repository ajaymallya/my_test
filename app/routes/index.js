var IndexRoute = Ember.Route.extend({
    model: function(params) {
            console.log('params: ' + JSON.stringify(params));
            return Ember.$.getJSON('http://localhost:3000/stock_data');
    },
    actions: {
      getChart: function(context) {
        console.log('In getChart');
        console.log(this.get('controller.model').symbol);
        this.transitionTo('chart',this.get('controller.model').symbol);
      }
    }
});

export default IndexRoute;

