var page = 1;
function next(){
    var s = '<script src="Test1.js"></script><main>'
    switch(page){
        case 1: s += '<h1>桃とシャミ子の出会い</h1><img src="momo1.png" class="img" ><br><h4>桃とシャミ子は最初はすれ違っていたんだよ！<br>かわいいね！</h4><img src="momo13.png" class="img"><br><h4>大天使桃ちゃん</h4><img src="momo2.png" class="img"><br><h4>そこから片手ダンプして…（というかここのシャミ子王子様に助けられたヒロインだよね）</h4><img src="momo3.png" class="img"><br><h4>餌付けその一　（どっちも）かわいいね！</h4>'
        break;
        case 2: s += '<h1>桃さんとシャミ子の初期のかかわり！</h1><img src="momo4.png" class="img"><br><h4>初めての<s>デート</s>決闘！　</h4><img src="momo5.png" class="img"><br><h4>シャミ子、桃さんに置いて行かれる</h4><img src="momo6.png" class="img"><br><h4>シャミ子と桃さんの初めての<s>間接</s>キス</h4><img src="momo7.png" class="img"><br><h4>シャミ子「貴様といると調子が狂うんだ～！」</h4>        '
        break
        case 3: s += '<h1>シャミ桃魔力修行！</h1><h4>    <img src="momo8.png" class="img"><br>    よくシャミ桃の代名詞になってる画像だね！<br><br>    <img src="momo9.png" class="img"><br>    桃「今日は何か出すまで帰さない」<br><br>    <img src="momo10.png" class="img"><br>    フレッシュピーチハートシャワー！<br></h4>'
        break
        case 4: s += '<h1> シャミ子のバイト中にもかかわらず接近しようとするもんも</h1><img src="momo11.png" class="img"><br><h4>桃さん、 あーんはまだ早いんじゃないかな？</h4><img src="momo12.png" class="img"><br><h4>ちょっと不穏な発言が…これ日常系だよね？</h4><img src="momo14.png" class="img"><br><h4>ここかわいい（私情）</h4>'
        break
        case 5: s += '<h1>お金返して戦おうとするシャミ子（この貸し借りはいったいどこに）</h1><img src="momo15.png" class="img"><h4>認めませーん（かわいい）</h4><img src="momo16.png" class="img"><h4>一面ウィンナー弁当、おいしいのかな？</h4><img src="momo17.png" class="img"><h4>おや？なんか不穏な展開が見えるような…</h4><img src="momo18.png" class="img"><h4>シャミ子「親友の桃ちゃんです」</h4>'
        break
        case 6: s += '<h1>桃の頼みで<s>デート</s>付き添い</h1><img src="momo19.png" class="img"><h4>なぜ桃ちゃんは気づきがいいのに女子力ないんだ</h4><img src="momo20.png" class="img"><h4>血糖値高めにして待ってるがいいですよ！</h4><img src="momo21.png" class="img"><h4>落とさないでねー絶対落とさないでねー</h4>'
        break
        case 7: s += '<h1>不穏回</h1><img src="momo22.png" class="img"><h4>シャミ子様！血液10ガロンお待たせしました！</h4><img src="momo23.png" class="img"><h4>こももかわいいね！（めっちゃ不穏）</h4><img src="momo24.png" class="img"><h4>まぞくの三大伏線</h4><img src="momo25.png" class="img"><h4>この時のこももかわいい</h4>';
        break;
        case 8: s += '<h1>不穏回その２</h1><img src="momo26.png" class="img"><h4>ごろごろにゃーちゃん誕生の瞬間である</h4><img src="momo27.png" class="img"><h4>魔力修行の時のやつ　かわいいね</h4><img src="momo28.png" class="img"><h4>家に誘うシャミ子</h4><img src="momo29.png" class="img"><h4>また嫌な夢を見ないでほしい（切実）</h4><img src="momo30.png" class="img"><h4>シャミ子が悪いんだよ</h4>'
        break;

    }
    s += '<br><a href="javascript:void(0)" onclick="next()">next</a></main>'
    document.getElementById('body').innerHTML = s;
    page++;
}