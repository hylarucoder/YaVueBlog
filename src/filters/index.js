import moment from 'moment'
import Vue from 'vue'

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
  }
});

Vue.filter('formatDatetime', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD hh:mm:ss')
  }
});

Vue.filter('formatTime', function (value) {
  if (value) {
    return moment(String(value)).format('hh:mm:ss')
  }
});

Vue.filter('truncate', function (text, stop, clamp) {
  return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
});
