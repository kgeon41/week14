function listing() {
    grass = ["이상해씨", "치코리타", "나무지기", "모부기", "주리비얀", "도치마론", "나몰빼미", "흥나숭", "나오하"];
    var i = 0;
    document.write("<ol>")
        while (i < grass.length) {
            document.write("<div id='name" + i + "'>")
            document.write("<li> <a href='https://pokemon.fandom.com/ko/wiki/" + grass[i] + "'>" + grass[i] + "</li>");
            var imgNo = i + 1;
            document.write("<img src='images/" + imgNo + ".webp', width = 20%>");
            document.write("</div> <br>");
            i = i + 1;
        }
    document.write("</ol>")
}