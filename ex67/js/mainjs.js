var students = [];
var sortKey = "";
var sortAscending = true;
function loadXMLDoc() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "dataset/students.xml", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xmlText = xhr.responseText;
            
            // Using DOMParser as instructed
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xmlText, "text/xml");
            
            // Read data from XML
            var studentTags = xmlDoc.getElementsByTagName("student");
            for (var i = 0; i < studentTags.length; i++) {
                var student = studentTags[i];
                var id = student.getElementsByTagName("id")[0].textContent.trim();
                var name = student.getElementsByTagName("name")[0].textContent.trim();
                var birthday = student.getElementsByTagName("birthday")[0].textContent.trim();
                var gender = student.getElementsByTagName("gender")[0].textContent.trim();
                
                students.push({
                    id: id,
                    name: name,
                    birthday: birthday,
                    gender: gender
                });
            }
            
            // Render table to page
            renderTable();
        }
    };
    xhr.send();
}
function renderTable() {
    var tbody = document.getElementById("bodystudent");
    tbody.innerHTML = ""; // Clear existing table body rows
    
    for (var i = 0; i < students.length; i++) {
        var s = students[i];
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>" + s.id + "</td>" +
                       "<td>" + s.name + "</td>" +
                       "<td>" + s.birthday + "</td>" +
                       "<td>" + s.gender + "</td>";
        tr.onmouseover = function () {
            this.style.backgroundColor = "yellow";
        };
        tr.onmouseout = function () {
            this.style.backgroundColor = "white";
        };
        (function (studentData) {
            tr.onclick = function () {
                showDetail(studentData);
            };
        })(s);
        
        tbody.appendChild(tr);
    }
}
function sortTable(key) {
    if (sortKey === key) {
        sortAscending = !sortAscending;
    } else {
        sortKey = key;
        sortAscending = true;
    }
    
    students.sort(function (a, b) {
        var valA = String(a[key]).toLowerCase();
        var valB = String(b[key]).toLowerCase();
        
        if (valA < valB) return sortAscending ? -1 : 1;
        if (valA > valB) return sortAscending ? 1 : -1;
        return 0;
    });
    
    renderTable();
}
function showDetail(s) {
    var container = document.getElementById("detailContainer");
    container.innerHTML = 
        '<table class="detail-table">' +
        '    <thead>' +
        '        <tr>' +
        '            <th colspan="2">Student Information</th>' +
        '        </tr>' +
        '    </thead>' +
        '    <tbody>' +
        '        <tr>' +
        '            <td>Student ID:</td>' +
        '            <td>' + s.id + '</td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td>Student Name:</td>' +
        '            <td>' + s.name + '</td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td>Birthday:</td>' +
        '            <td>' + s.birthday + '</td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td>Gender:</td>' +
        '            <td>' + s.gender + '</td>' +
        '        </tr>' +
        '    </tbody>' +
        '</table>';
}
document.addEventListener("DOMContentLoaded", function () {
    loadXMLDoc();
});