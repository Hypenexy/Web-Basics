function addtoselect(select, option){
    var opt = document.createElement('option');
    opt.value = option;
    opt.innerHTML = option;
    select.appendChild(opt);
}

//Example usage:
//addtoselect(document.getElementById("createcloudfolderselect"), "new folder")