function addNode() {
    var content = document.getElementById("txtContent").value;
    var posStr = document.getElementById("txtPositionAdd").value;
    
    if (content === "") {
        alert("Vui lòng nhập nội dung!");
        return;
    }
    
    var newLi = document.createElement("li");
    newLi.innerHTML = content;
    
    var list = document.getElementById("webList");
    var items = list.getElementsByTagName("li");
    
    if (posStr === "") {
        list.appendChild(newLi);
    } else {
        var pos = parseInt(posStr);
        
        if (isNaN(pos) || pos < 0) {
            alert("Vui lòng nhập vị trí hợp lệ!");
            return;
        }
        
        if (pos >= items.length) {
            list.appendChild(newLi);
        } else {
            list.insertBefore(newLi, items[pos]);
        }
    }
    
    document.getElementById("txtContent").value = "";
    document.getElementById("txtPositionAdd").value = "";
}

function removeNode() {
    var posStr = document.getElementById("txtPositionRemove").value;
    
    if (posStr === "") {
        alert("Vui lòng nhập vị trí cần xóa!");
        return;
    }
    
    var pos = parseInt(posStr);
    var list = document.getElementById("webList");
    var items = list.getElementsByTagName("li");
    
    if (isNaN(pos) || pos < 0 || pos >= items.length) {
        alert("Vị trí xóa không hợp lệ!");
        return;
    }
    
    list.removeChild(items[pos]);
    
    document.getElementById("txtPositionRemove").value = "";
}

function modifyNode() {
    var newContent = document.getElementById("txtNewContent").value;
    var posStr = document.getElementById("txtPositionModify").value;
    
    if (newContent === "") {
        alert("Vui lòng nhập nội dung mới!");
        return;
    }
    
    if (posStr === "") {
        alert("Vui lòng nhập vị trí cần sửa!");
        return;
    }
    
    var pos = parseInt(posStr);
    var list = document.getElementById("webList");
    var items = list.getElementsByTagName("li");
    
    if (isNaN(pos) || pos < 0 || pos >= items.length) {
        alert("Vị trí sửa không hợp lệ!");
        return;
    }
    
    items[pos].innerHTML = newContent;
    
    document.getElementById("txtNewContent").value = "";
    document.getElementById("txtPositionModify").value = "";
}
