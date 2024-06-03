function setBgTo(color) {
    $('body').css('background-color', color);
}

function setScriptTo(color) {
    $('body').css('color', color);
}

function setLinkTo(color) {
    $('li').css('color', color);
    $('a').css('color', color);
    $('h3').css('color', color);
}

function screenMode(self) {
    if (self.value == '다크 모드로 전환하기') {
        setBgTo('black');
        setScriptTo('white');
        setLinkTo('greenyellow');
        self.value = "라이트 모드로 전환하기";
    } else {
        setBgTo('white');
        setScriptTo('black');
        setLinkTo('green');
        self.value = "다크 모드로 전환하기";
    }
}