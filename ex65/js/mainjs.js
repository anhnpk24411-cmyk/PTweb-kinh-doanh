function addNode() {
    var content = document.getElementById("txtContent").value;
    var position = document.getElementById("txtPositionAdd").value;
    
    var li = document.createElement("li");
    li.innerHTML = content;
    
    var ul = document.getElementById("webList");
    var items = ul.getElementsByTagName("li");
    
    ul.insertBefore(li, items[position]);
}

function removeNode() {
    var position = document.getElementById("txtPositionRemove").value;
    
    var ul = document.getElementById("webList");
    var items = ul.getElementsByTagName("li");
    
    ul.removeChild(items[position]);
}

function modifyNode() {
    var newContent = document.getElementById("txtNewContent").value;
    var position = document.getElementById("txtPositionModify").value;
    
    var ul = document.getElementById("webList");
    var items = ul.getElementsByTagName("li");
    
    items[position].innerHTML = newContent;
}
