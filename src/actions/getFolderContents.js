import $ from 'jquery'

export default function getFolderContents(path) {
  
  const URL = "http://ec2-54-84-245-21.compute-1.amazonaws.com:8080"+ path+ "/@children"
  const request = $.ajax({
    url:URL,
  headers: {
    "Authorization": "Basic " + btoa("csacktor:appbuilder"),
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "X-Requested-With"
  },
     type:"GET",
   })

   return {
     type: 'GET_FOLDER',
     payload: request
   }
}
