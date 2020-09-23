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

//15.8.6 Promise가 실행하는 콜백 함수에 인수 넘기기
function buyAsync(mymoney) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var payment = parseInt(promt('지불하고자 하는 금액을 입력하십시오'));
      var balance = mymoney - payment;
      if (balance > 0) {
        console.log(`${payment}원을 지불했습니다. `);
        resolve(balance);
      } else {
        reject(`잔액은 ${mymoney}원입니다. 구매할 수 없습니다`);
      }
    }, 1000);
  });
}
buyAsync(500)
  .then(function (balance) {
    console.log(`잔액은 ${balance}원입니다.`);
  })
  .catch(function (error) {
    console.log(error);
  });

//15.8.7 Promise로 비동기 처리 연결하기
function buyAsync(mymoney) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var payment = parseInt(prompt('지불하고자 하는 금액을 입력하십시오'));
      var balance = mymoney - payment;
      if (balance > 0) {
        console.log(`${payment}원을 지불했습니다.`);
        resolve(balance);
      } else {
        reject(`잔액은 ${mymoney}원 입니다. 구매할 수 없습니다`);
      }
    }, 1000);
  });
}
buyAsync(500)
  .then(function (balance) {
    console.log(`잔액은 ${balance}원입니다.`);
    return buyAsync(balance);
  })
  .then(function (balance) {
    console.log(`잔액은 ${balance}원입니다.`);
    return buyAsync(balance);
  })
  .then(function (balance) {
    console.log(`잔액은 ${balance}원입니다.`);
    return buyAsync(balance);
  })
  .catch(function (error) {
    console.log(error);
  });

//15.8.8 비동기 처리 여러 개를 병렬로 실행하기
function buyAsync(name, mymoney) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var payment = parseInt(
        prompt('${name}님, 지불하고자 하는 금액을 입력하십시오')
      );
      var balance = mymoney - payment;
      if (balance > 0) {
        console.log(`${name} : ${payment}원을 지불했습니다.`);
        resolve(balance);
      } else {
        reject(`${name} : 잔액은 ${balance}}원 입니다. 구매할 수 없습니다`);
      }
    }, 1000);
  });
}
/*
promise
  .all([buyAsync('Tom', 500), buyAsync('Huck', 600), buyAsync('Becky', 1000)])
  .then(function (balance) {
    console.log(balance);
  })
  .catch(function (error) {
    console.log(error);
  });
*/
promise
  .race([buyAsync('Tom', 500), buyAsync('Huck', 600), buyAsync('Becky', 1000)])
  .then(function (balance) {
    console.log(balance);
  })
  .catch(function (error) {
    console.log(error);
  });
