/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(inicio);

function inicio(){
    $("#color").css(
            {"color": "red",
        "background-color": "blue"});

    $("#clickame").click(changeColorDivs);
    $("#clickame").mouseenter(expandir);
    $("#clickame").mouseleave(contraer);
    $(".miDiv").click(changeMiDiv);
    $("#color").click(newElement);
}

var numDiv = 0;
function newElement(){
    var div = $("<div class='miDiv2'>Nanananana"+numDiv+"</div>");
    numDiv++;
    $("#newDiv").append(div);
    div.click(changeMiDiv);
    div.dblclick(delPreview);
}

function delPreview(){
    $(this).prev().remove();
}
function changeColorDivs(){
    $("div").css({"backgroundColor": "pink"}); 
}

function expandir(){
    $("#clickame").animate({"width": "200px", "height": "400px"}, {"duration": "2500"});
}
function contraer(){
    $("#clickame").animate({"width": "50px", "height": "100px"}, {"duration": "2500", complete:changeColor});
}
function changeColor(){
    $("#clickame").css({"background-color":"green"});
}
function changeMiDiv(){
    $(this).css({"background-color":"blue", "margin-left":"+=30px"});
}