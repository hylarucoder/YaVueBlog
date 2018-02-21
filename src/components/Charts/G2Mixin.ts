const G2Mixin = {
  chartData : {},
  props: {
    'message': {
      type: String,
      required: true
    }
  },
  watch: {
    handlerRenderChart: function(newVal: Object, oldVal: Object) {
      this.renderChart(Object.assign({}, newVal));
    }
  },
  created: function () {
    this.hello()
  },

  methods: {
    hello: function () {
      console.log('hello from mixin!')
    },
    renderChart: function(newVal: Object) {
      console.error('did you implement renderChart');
    }
  }
}

export default G2Mixin;
