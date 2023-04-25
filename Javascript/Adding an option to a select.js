function addToSelect(select, option){
    var opt = document.createElement('option');
    opt.value = option;
    opt.innerHTML = option;
    select.appendChild(opt);
}

// Example usage:
// addToSelect(document.getElementById("createcloudfolderselect"), "new folder")