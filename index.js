'use strict';

// 画像のプリロード処理
const images = ['20181228-00-45-27-DSC02788dvlp.jpg', '20190802-19-34-02-DSC01396-dev.jpg'];

images.forEach(function(item, index) {
    preloadImage(item);
});

function preloadImage(path) {
    document.createElement('img').src = 'path';
}
// *画像のプリロード処理

function changeSemester() {
    let semesterRadio = document.getElementsByName('semester');

    for (let i = 0; i < semesterRadio.length; i++)
        if (semesterRadio[i].checked) {
            console.log(`${semesterRadio[i].value}が選択されました`);
        }

    let Mon1class = document.getElementById('Mon1class');
    let Mon1room = document.getElementById('Mon1room');
    let Mon2class = document.getElementById('Mon2class');
    let Mon2room = document.getElementById('Mon2room');
    let Mon3class = document.getElementById('Mon3class');
    let Mon3room = document.getElementById('Mon3room');
    let Mon4class = document.getElementById('Mon4class');
    let Mon4room = document.getElementById('Mon4room');
    let Mon5class = document.getElementById('Mon5class');
    let Mon5room = document.getElementById('Mon5room');

    let Tue1class = document.getElementById('Tue1class');
    let Tue1room = document.getElementById('Tue1room');
    let Tue2class = document.getElementById('Tue2class');
    let Tue2room = document.getElementById('Tue2room');
    let Tue3class = document.getElementById('Tue3class');
    let Tue3room = document.getElementById('Tue3room');
    let Tue4class = document.getElementById('Tue4class');
    let Tue4room = document.getElementById('Tue4room');
    let Tue5class = document.getElementById('Tue5class');
    let Tue5room = document.getElementById('Tue5room');

    let Wed1class = document.getElementById('Wed1class');
    let Wed1room = document.getElementById('Wed1room');
    let Wed2class = document.getElementById('Wed2class');
    let Wed2room = document.getElementById('Wed2room');
    let Wed3class = document.getElementById('Wed3class');
    let Wed3room = document.getElementById('Wed3room');
    let Wed4class = document.getElementById('Wed4class');
    let Wed4room = document.getElementById('Wed4room');
    let Wed5class = document.getElementById('Wed5class');
    let Wed5room = document.getElementById('Wed5room');

    let Thu1class = document.getElementById('Thu1class');
    let Thu1room = document.getElementById('Thu1room');
    let Thu2class = document.getElementById('Thu2class');
    let Thu2room = document.getElementById('Thu2room');
    let Thu3class = document.getElementById('Thu3class');
    let Thu3room = document.getElementById('Thu3room');
    let Thu4class = document.getElementById('Thu4class');
    let Thu4room = document.getElementById('Thu4room');
    let Thu5class = document.getElementById('Thu5class');
    let Thu5room = document.getElementById('Thu5room');

    let Fri1class = document.getElementById('Fri1class');
    let Fri1room = document.getElementById('Fri1room');
    let Fri2class = document.getElementById('Fri2class');
    let Fri2room = document.getElementById('Fri2room');
    let Fri3class = document.getElementById('Fri3class');
    let Fri3room = document.getElementById('Fri3room');
    let Fri4class = document.getElementById('Fri4class');
    let Fri4room = document.getElementById('Fri4room');
    let Fri5class = document.getElementById('Fri5class');
    let Fri5room = document.getElementById('Fri5room');

    if (semesterRadio[0].checked) {
        Mon1class.innerText = '英語リーディング3';
        Mon1room.innerText = '0409';
        Mon2class.innerText = '英語コミュニケーション3';
        Mon2room.innerText = 'A302';
        Mon3class.innerText = '技術者倫理';
        Mon3room.innerText = 'A208';
        Mon4class.innerText = '電子物性1';
        Mon4room.innerText = 'A312';
        Mon5class.innerText = '';
        Mon5room.innerText = '';

        Tue1class.innerText = '';
        Tue1room.innerText = '';
        Tue2class.innerText = '';
        Tue2room.innerText = '';
        Tue3class.innerText = '電気電子生命実験1A/コンピュータシミュレーション1';
        Tue3room.innerText = '';
        Tue4class.innerText = '電気電子生命実験1A/コンピュータシミュレーション1';
        Tue4room.innerText = '';
        Tue5class.innerText = '電気電子生命実験1A/コンピュータシミュレーション1';
        Tue5room.innerText = '';

        Wed1class.innerText = '';
        Wed1room.innerText = '';
        Wed2class.innerText = '電子回路1';
        Wed2room.innerText = '2004';
        Wed3class.innerText = '電気回路1';
        Wed3room.innerText = '0408';
        Wed4class.innerText = '微分積分学1';
        Wed4room.innerText = 'A312';
        Wed5class.innerText = '';
        Wed5room.innerText = '';

        Thu1class.innerText = '';
        Thu1room.innerText = '';
        Thu2class.innerText = '電気磁気学3';
        Thu2room.innerText = '0410';
        Thu3class.innerText = '';
        Thu3room.innerText = '';
        Thu4class.innerText = '情報処理1';
        Thu4room.innerText = 'A312';
        Thu5class.innerText = '';
        Thu5room.innerText = '';

        Fri1class.innerText = '中国語3';
        Fri1room.innerText = '0408';
        Fri2class.innerText = '';
        Fri2room.innerText = '';
        Fri3class.innerText = '振動波動論';
        Fri3room.innerText = '0304';
        Fri4class.innerText = '応用数理概論1';
        Fri4room.innerText = 'A306';
        Fri5class.innerText = '';
        Fri5room.innerText = '';
    }

    if(semesterRadio[1].checked) {
        Mon1class.innerText = '英語リーディング4';
        Mon1room.innerText = '0409';
        Mon2class.innerText = '英語コミュニケーション4';
        Mon2room.innerText = 'A302';
        Mon3class.innerText = '電子物性2';
        Mon3room.innerText = 'A312';
        Mon4class.innerText = '';
        Mon4room.innerText = '';
        Mon5class.innerText = '';
        Mon5room.innerText = '';

        Tue1class.innerText = '';
        Tue1room.innerText = '';
        Tue2class.innerText = '';
        Tue2room.innerText = '';
        Tue3class.innerText = 'コンピュータシミュレーション2/電気電子生命実験1B';
        Tue3room.innerText = '';
        Tue4class.innerText = 'コンピュータシミュレーション2/電気電子生命実験1B';
        Tue4room.innerText = '';
        Tue5class.innerText = 'コンピュータシミュレーション2/電気電子生命実験1B';
        Tue5room.innerText = '';

        Wed1class.innerText = 'コンピュータネットワーク';
        Wed1room.innerText = 'A204';
        Wed2class.innerText = '';
        Wed2room.innerText = '';
        Wed3class.innerText = '電気回路2';
        Wed3room.innerText = 'A208';
        Wed4class.innerText = '情報処理2';
        Wed4room.innerText = '5204';
        Wed5class.innerText = 'オブジェクト指向';
        Wed5room.innerText = '0405';

        Thu1class.innerText = '';
        Thu1room.innerText = '';
        Thu2class.innerText = '電子回路2';
        Thu2room.innerText = 'A312';
        Thu3class.innerText = '電気電子計測';
        Thu3room.innerText = '0405';
        Thu4class.innerText = 'システム制御1';
        Thu4room.innerText = '2002';
        Thu5class.innerText = '微分積分学2';
        Thu5room.innerText = '0304';
        
        Fri1class.innerText = '中国語4';
        Fri1room.innerText = '0501';
        Fri2class.innerText = '';
        Fri2room.innerText = '';
        Fri3class.innerText = '';
        Fri3room.innerText = '';
        Fri4class.innerText = '';
        Fri4room.innerText = '';
        Fri5class.innerText = '';
        Fri5room.innerText = '';
    }
}

changeSemester();
