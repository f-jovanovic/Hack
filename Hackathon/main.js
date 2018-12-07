document.getElementById("provjera").onclick = function() {
HighlightArea("myDiv",1, 6);
HighlightArea("myDiv",7, 10);
HighlightArea("myDiv",12, 14);
HighlightArea("myDiv",16, 23);
};

function HighlightArea(id, from, to)
{
    var spanBegin = '<span class="highlighter">';
    var spanEnd = "</span>";
    var divElement = document.getElementById(id);
    console.log(divElement.dataset.modifications);

    from = from + divElement.dataset.modifications*(spanBegin.length + spanEnd.length);
    to = to + divElement.dataset.modifications*(spanBegin.length + spanEnd.length);

    var tekst = divElement.innerHTML;
    var modified = [tekst.slice(0,from), spanBegin,tekst.slice(from,to), spanEnd,tekst.slice(to)].join("");
    divElement.innerHTML = modified;
    divElement.dataset.modifications++;
    console.log(modified);
}