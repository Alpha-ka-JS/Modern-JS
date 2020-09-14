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

//15.8.2 Promise의 기본
var promise = new Promise(function (resolve, reject) {});
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('A');
    resolve();
  }, 1000);
});
promise.then(function () {
  console.log('B');
});

//15.8.3 Promise를 종료시키는 resolve 함수와 then 메서드
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var name = prompt('이름을 입력하십시오');
    resolve(name);
  }, 1000);
});
promise.then(function (name) {
  console.log('안녕하세요, ' + name + ' 님!');
});

//15.8.4 Promise를 실패로 처리하는 reject 함수와 catch 메서드
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var n = parseInt(prompt('10 미만의 숫자를 입력하십시오'));
    if (n <= 10) {
      resolve(n);
    } else {
      reject('오류 : ${n}은 10 이상입니다');
    }
  }, 1000);
});
promise
  .then(function (num) {
    console.log(`2^${num} = ${Math.pow(2, num)}`);
  })
  .catch(function (error) {
    console.log(error);
  });

//15.8.5 then의 두 번째 인수
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var n = parseInt(prompt('10 미만의 숫자를 입력하십시오'));
    if (n <= 10) {
      resolve(n);
    } else {
      reject('오류 : ${n}은 10 이상입니다');
    }
  }, 1000);
});
promise.then(
  function (num) {
    console.log(`2^${num} = ${Math.pow(2, num)}`);
  },
  function (error) {
    console.log(error);
  }
);
