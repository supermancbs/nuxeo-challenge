import $ from 'jquery'
export default function addPicture(photo) {

  const URL = `http://ec2-54-84-245-21.compute-1.amazonaws.com:8080/api/v1/upload/`
  const request = $.ajax({
    url:URL,
    headers: {
    "Authorization": "Basic " + btoa("csacktor:appbuilder"),
    "Content-Type": "application/json"
  },
    type:"Post",
})

   
}
