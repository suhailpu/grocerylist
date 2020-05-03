function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response= JSON.parse(this.responseText);
        var grlist= ' ';
        for (var i=0;i< this.response.length;i++){
            grlist +='<tr>';
            grlist += '<td class="coloumn1">'+ response[i].SerialNumber + '</td>';
            grlist += '<td class="coloumn2">'+ response[i].name + '</td>';
            grlist += '<td class="coloumn3">'+ response[i].quantity + '</td>';
            grlist += '<td class="coloumn4">'+ response[i].unit + '</td>';
            grlist += '<td class="coloumn5">'+ response[i].Department + '</td>';
            grlist += '<td class="coloumn6">'+ response[i].notes + '</td>';
            grlist +='<tr>';
        }
        document.querySelector('#demo').innerHTML= grlist;
      }
    };
    xmlhttp.open("GET", "index.json", true);
    xmlhttp.send();
  }
  