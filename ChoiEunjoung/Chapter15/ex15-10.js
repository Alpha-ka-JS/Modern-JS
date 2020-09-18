//15.8 비동기 처리를 간결하게 작성하는 Promise

//15.8.1 비동기 처리의 예

function sleep(callback) {
  setTimeout(function () {
    callback();
  }, 1000);
}
sleep(function () {
  console.log('A');
  sleep(function () {
    console.log('B');
    sleep(function () {
      console.log('C');
    });
  });
});
//이런식으로 하면 알아보기도 어렵고 콜백지옥이라고함 이를 해결하기 위한게 Promise

//15.8.2 Promise의 기본
//  var promise = new Promise(function(resolve,reject) {...})
// resolve는 함수 처리가 끝나면 할것, reject는 함수 처리가 실패하면 호출할 것

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('X');
    resolve();
  }, 1000);
});

promise.then(function () {
  console.log('Y');
});

// 15.8.3 Promise 를 종료시키는 resolve 함수와  then 메서드
// onFullfilled함수는 성공콜백함수
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var name = prompt('이름 : ');
    resolve(name);
  }, 1000);
});
promise.then(function (name) {
  console.log('안녕 ' + name);
});

//15.8.4 Promise의 실패로 처리하는 reject와 catch
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var n = parseInt(prompt('10미만의 숫자 입력 : '));
    if (n <= 10) resolve(n);
    else reject(`오류 ${n}을 다시한번 확인해주세요`);
  }, 1000);
});

promise
  .then(function (num) {
    console.log(`2^${num} = ${Math.pow(2, num)}`);
  })
  .catch(function (err) {
    console.log(err);
  });

//15.8.6 Promise가 실행하는 콜백 함수에 인수 넣기
function buyAsync(m) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var pay = parseInt(prompt('지불하고자 하는 금액 : '));
      var bal = m - pay;
      if (bal > 0) {
        console.log(`${pay}원 지불 완료`);
        resolve(bal);
      } else {
        reject('돈이 부족합니다 ㅠ ');
      }
    });
  }, 1000);
}
buyAsync(500)
  .then(function (bal) {
    console.log(`잔액은 ${bal}원`);
  })
  .catch(function (err) {
    console.log(err);
  });

//15.8.7 Promise로 비동기 처리 연결하기
function buyAsync(m) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var pay = parseInt(prompt('지불하고자 하는 금액 : '));
      var bal = m - pay;
      if (bal > 0) {
        console.log(`${pay}원 지불 완료`);
        resolve(bal);
      } else {
        reject('돈이 부족합니다 ㅠ ');
      }
    });
  }, 1000);
}
buyAsync(5000) //별 의미없고 걍 여러번일뿐...
  .then(function (bal) {
    console.log(`잔액은 ${bal}원`);
    return buyAsync(bal);
  })
  .then(function (bal) {
    console.log(`잔액은 ${bal}원`);
    return buyAsync(bal);
  })
  .then(function (bal) {
    console.log(`잔액은 ${bal}원`);
    return buyAsync(bal);
  })
  .catch(function (err) {
    console.log(err);
  });

//15.8.8 비동기 여러개를 병렬로 실행

//promise.all 메서드
function buyAsync(name, m) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var pay = parseInt(prompt(`${name}님 지불하고자 하는 금액 : `));
      var bal = m - pay;
      if (bal > 0) {
        console.log(`${name} : ${pay}원 지불 완료`);
        resolve(bal);
      } else {
        reject('돈이 부족합니다 ㅠ ');
      }
    });
  }, 1000);
}
Promise.all(
  [buyAsync('Tom', 200)], //얘한테만 뭔가 나옴
  [buyAsync('Buck', 500)],
  [buyAsync('Huck', 800)]
)
  .then(function (bal) {
    console.log(bal);
  })
  .catch(function (err) {
    console.log(err);
  });
//Promise.race 메서드 - 가장 먼저 종료한 거만 보낸다.
function buyAsync(name, m) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var pay = parseInt(prompt(`${name}님 지불하고자 하는 금액 : `));
      var bal = m - pay;
      if (bal > 0) {
        console.log(`${name} : ${pay}원 지불 완료`);
        resolve(bal);
      } else {
        reject('돈이 부족합니다 ㅠ ');
      }
    });
  }, 1000);
}
Promise.race(
  [buyAsync('Tom', 200)], //얘한테만 뭔가 나옴
  [buyAsync('Buck', 500)],
  [buyAsync('Huck', 800)]
)
  .then(function (bal) {
    console.log(bal);
  })
  .catch(function (err) {
    console.log(err);
  });
