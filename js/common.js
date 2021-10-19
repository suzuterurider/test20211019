
console.log("jsファイルからハロワー");

// --------------tweetボタン ----------------
function twitText() {
	var s, url;
	s = "jsでついったーを開いて投稿しているよ!%23sunabaco %23すなぷろ11th %23おんらいん14th";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}
// -----------tweetボタン終わり---------------



console.log("suzu"+"kamenrider");
console.log("sumomo,mikan,tokyo,".split(","));
console.log(1);
console.log("080-1234-5678");
console.log(16%7);

// var 変数名　= 入れたいデータの値;

var students = "すずか";
console.log(students);

students = "やすなり";
console.log(students);

students = ["すずか","やすなり","うめグミ"]
console.log(students);

console.log(students[2]);

students[0] = "あきほ";
console.log(students);

var sunabaco = {"沖縄":"KOZA","北海道":"EBETSU","香川":"TAKAMATSU"}
console.log(sunabaco);
console.log(sunabaco["北海道"]);

var count = 1;

console.log(count);  //1

count+= 1 ;   //count = count +1 ;  -> 2
count -= 2;
count*=2;

count++;      //count = count +1 ;  -> 2
count--;




console.log(1<2);

// 比較演算の例
var x = "1";
var y = 1;
console.log(x==y);  //xとyは等しい「かどうか」 ->true
console.log(x===y); //xとyは厳密に等しい「かどうか」 ->false
console.log(x<y);   //xよりyが大きい「かどうか」->true
console.log(x<=y);  //xよりyが大きいまたは等しい「かどうか」->T
console.log(x>y);   //xよりyが小さい「かどうか」->flese
console.log(x>=y);  //xよりyが小さいまたは等しい「かどうか」->F
console.log(x!=y);  //xとyは等しくない「かどうか」


// 条件分の練習


var limit = 10;
var getup = 8;

if(limit<getup){
　console.log("ちこくです");
} else if (limit == getup){
	console.log("ギリセー");
}else{
    console.log("よくできまし");
}

// 1〜20までの数字をコンソールに出力してみてください
for (var i=1;i<=20;i++){
    console.log(i);
}

// 0から25まで出力する繰り返し文を書いてみよう！
// 出力する時に、「◯番目」の形式で出力してください！

for(var i=0;i<=25;i++){
    console.log("無駄");
}










// for(初期値;条件式;増減式){
//     実行したいプログラム;
//     実行したいプログラム;
//     実行したいプログラム;
// }





// 変数　＝　データが入ってる箱
// 関数　＝　命令文がまとめて入ってる箱

function greet(user_name){
    var message = user_name + "さん、こんにちは";
    console.log(message);
}


console.log(greet("にんじゃわんこ"));

