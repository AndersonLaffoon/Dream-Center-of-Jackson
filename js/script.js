function addFlexWrap() {
    var x = document.getElementById('addFlexWrap');
    if (x.style.flex-wrap == 'nowrap'){
        x.style.flex-wrap == 'wrap'
    }else{
        x.style.flex-wrap == 'none'
    }
}