const URL = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://sword-flix.herokuapp.com';

export default {
  URL,
};
