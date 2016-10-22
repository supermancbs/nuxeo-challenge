const RETRIEVE_USER = "RETRIEVE_USER"
var Nuxeo = require('nuxeo')
var nuxeo = new Nuxeo({
 baseUrl: 'http://ec2-54-84-245-21.compute-1.amazonaws.com:8080/nuxeo/',
 auth: {
   method: 'basic',
   username: 'csacktor',
   password: 'appbuilder'
 }
});

nuxeo.request('default-domain/UserWorkspaces/csacktor/@children')
  .get()
  .then(function(res) {
    return {
    type: 'LOG_IN',
    payload: res
    }
  })

export default nuxeo
