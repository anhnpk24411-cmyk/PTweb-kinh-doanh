function taoNgayThangNam()
{
    var day = document.getElementById("day");
    var month = document.getElementById("month");
    var year = document.getElementById("year");

    for(var i = 1; i <= 31; i++)
    {
        if(i < 10)
            day.innerHTML += "<option>0" + i + "</option>";
        else
            day.innerHTML += "<option>" + i + "</option>";
    }

    for(var i = 1; i <= 12; i++)
    {
        month.innerHTML += "<option>" + i + "</option>";
    }

    var now = new Date();
    var currentYear = now.getFullYear();

    for(var i = 1970; i <= currentYear; i++)
    {
        year.innerHTML += "<option>" + i + "</option>";
    }
}

function loaddata(data, tbody)
{
    for(var i = 0; i < data.length; i++)
    {
        var row = tbody.insertRow();

        row.insertCell(0).innerHTML = data[i].name;
        row.insertCell(1).innerHTML = data[i].email;
        row.insertCell(2).innerHTML = data[i].gender;
        row.insertCell(3).innerHTML = data[i].birthday;
        row.insertCell(4).innerHTML = data[i].hobbies;
        
        var cellColor = row.insertCell(5);
        cellColor.innerHTML = "<span class='" + data[i].color.toLowerCase() + "'>" + data[i].color + "</span>";
    }
}

function signup()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var birthday = day + "/" + month + "/" + year;

    var gender = "";
    var genders = document.getElementsByName("gender");

    for(var i = 0; i < genders.length; i++)
    {
        if(genders[i].checked)
            gender = genders[i].value;
    }

    var hobbies = "";
    var arr = document.getElementsByName("hobby");

    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i].checked)
            hobbies = hobbies + arr[i].value + ", ";
    }
    if(hobbies.length > 0)
    {
        hobbies = hobbies.substring(0, hobbies.length - 2);
    }

    var color = "";
    var colors = document.getElementsByName("color");

    for(var i = 0; i < colors.length; i++)
    {
        if(colors[i].checked)
            color = colors[i].value;
    }

    var tbody = document.getElementById("memberbody");
    var row = tbody.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = gender;
    row.insertCell(3).innerHTML = birthday;
    row.insertCell(4).innerHTML = hobbies;
    
    var cellColor = row.insertCell(5);
    cellColor.innerHTML = "<span class='" + color.toLowerCase() + "'>" + color + "</span>";
}