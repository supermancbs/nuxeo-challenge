import $ from 'jquery'

export default function addPicture(photo) {

  const URL = `http://ec2-54-84-245-21.compute-1.amazonaws.com:8080/nuxeo/api/v1/path/default-domain/UserWorkspaces/csacktor`
  const request = $.ajax({
    url:URL,
  headers: {
    "Authorization": "Basic " + btoa("csacktor:appbuilder"),
    "Content-Type": "application/json"
  },
    type:"Post",
    data: JSON.stringify({
        "entity-type": "document",
        "name":"folder",
        "type": "Picture",
        "properties": {
            "dc:title": `${photo}`,
            "dc:description": "Created with an AJAX request"
        }
    })
   })

   
}
