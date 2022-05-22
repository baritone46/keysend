// var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alph = "abcdefghijklmnopqrstuvwxyz";
var $mondai = document.getElementById('mondai');
var $kaitou = document.getElementById('kaitou');
var $mondai = document.getElementById('mondai');
var $hantei = document.getElementById('hantei');
var $tensu = document.getElementById('tensu');
var $miss = document.getElementById('miss');
var num = 0
var $preq = document.getElementById($mondai.innerHTML)    


let quizIndex = 0;
let score = 0;
let miss = 0;

document.addEventListener('keypress',keypress_ivent);

function keypress_ivent(e) {
    $preq.classList.remove('kotae')

    // var upperCaseText = e.key;
    // $kaitou.innerHTML = upperCaseText;
    $kaitou.innerHTML = e.key;
    if($kaitou.innerHTML === $mondai.innerHTML){
        $hantei.classList.remove('ng');
        $hantei.classList.add('ok');
        $hantei.innerHTML ="○正解！";
        // window.alert('正解！');
        score++;
        $tensu.innerHTML = "点数：　" + score + "点"
        // console.log(score);
        function getRandam(n, m){
              num = Math.floor(Math.random() * (m + 1 - n)) + n;
        //   console.log(num);
        };
        getRandam(0, 25);
        $mondai.innerHTML = alph.substring(num,num + 1);

        document.getElementById($mondai.innerHTML).classList.add('kotae')
        $preq = document.getElementById($mondai.innerHTML)    

        // ゲームクリア判定
        if(score === 20){
            window.alert('ゲームクリア！');
        };

    } else {
        $hantei.classList.remove('ok');
        $hantei.classList.add('ng');
        $hantei.innerHTML ="×ミス！";
        miss++;
        $miss.innerHTML = "ミス：　" + miss + "回";
        $preq.classList.add('kotae')
        // window.alert('不正解！');
       }

    return false;
}