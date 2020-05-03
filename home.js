function openPage(pageName,element){
    var i,tabcontent,tablinks;
    tabcontent=document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablink");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor="grey";
        tablinks[i].style.color="white";
        tablinks[i].style.borderStyle="solid";
        tablinks[i].style.borderColor="grey";

    }
    document.getElementById(pageName).style.display="block";
    element.style.backgroundColor= "deepskyblue";
}

