var alph = "abcdefghijklmnopqrstuvwxyz";
var $mondai = document.getElementById('mondai');
var $kaitou = document.getElementById('kaitou');
var $mondai = document.getElementById('mondai');
var $hantei = document.getElementById('hantei');
var num = 0

document.addEventListener('keypress',keypress_ivent);

function keypress_ivent(e) {
    $kaitou.innerHTML = e.key;

    if($kaitou.innerHTML === $mondai.innerHTML){
        $hantei.classList.remove('ng');
        $hantei.classList.add('ok');
        $hantei.innerHTML ="○正解！";
        // window.alert('正解！');
        // score++;
        function getRandam(n, m){
              num = Math.floor(Math.random() * (m + 1 - n)) + n;
              console.log(num);
          };
        getRandam(0, 25);
        $mondai.innerHTML = alph.substring(num,num + 1);
       } else {
        $hantei.classList.remove('ok');
        $hantei.classList.add('ng');
        $hantei.innerHTML ="×不正解！";
        // window.alert('不正解！');
       }

    return false;
}
