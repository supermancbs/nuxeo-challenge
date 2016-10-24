import $ from 'jquery'

export default function retrieveUser() {
  
  const URL = `http://ec2-54-84-245-21.compute-1.amazonaws.com:8080/nuxeo/api/v1/path/default-domain/UserWorkspaces/csacktor/@children`
  const request = $.ajax({
    url:URL,
  headers: {
    "Authorization": "Basic " + btoa("csacktor:appbuilder"),
    "Content-Type": "application/json"
  },
     type:"GET",
   })

   return {
     type: 'LOG_IN',
     payload: request
   }
}
