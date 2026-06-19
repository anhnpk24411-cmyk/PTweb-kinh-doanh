var xmlDocumentData = null;
window.onload = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDocumentData = this.responseXML;
            loadTitles();
        }
    };
    xhttp.open("GET", "employees.xml", true);
    xhttp.send();
};
function loadTitles() {
    var employees = xmlDocumentData.getElementsByTagName("employee");
    var select = document.getElementById("slTitle");
    var titles = [];

    for (var i = 0; i < employees.length; i++) {
        var t = employees[i].getAttribute("title");
        if (titles.indexOf(t) === -1) {
            titles.push(t);
            var opt = document.createElement("option");
            opt.value = t;
            opt.innerHTML = t;
            select.appendChild(opt);
        }
    }
}
function filterEmployeeByTitle() {
    var selected = document.getElementById("slTitle").value;
    var tbody = document.getElementById("employeebody");
    tbody.innerHTML = "";

    var employees = xmlDocumentData.getElementsByTagName("employee");
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].getAttribute("title") === selected) {
            var id = employees[i].getAttribute("id");
            var name = employees[i].getElementsByTagName("name")[0].textContent;
            var phone = employees[i].getElementsByTagName("phone")[0].textContent;

            tbody.innerHTML += "<tr><td>" + id + "</td><td>" + name + "</td><td>" + phone + "</td></tr>";
        }
    }
}