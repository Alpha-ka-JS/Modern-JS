console.log('A');
setTimeout(() => {
  console.log('B');
}, 0);
console.log('C');

function sleep(callback) {
  setTimeout(() => {
    callback();
  }, 100);
}

sleep(() => {
  console.log('A');
  sleep(() => {
    console.log('B');
    sleep(() => {
      console.log('C');
    });
  });
});

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('A');
    resolve();
  }, 1000);
});
promise
  .then(() => {
    console.log('B');
  })
  .then(() => {
    console.log('C');
  })
  .then(() => {
    console.log('D');
  })
  .then(() => {
    console.log('E');
  });

promise.then(() => {
  console.log('F');
});

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    var name = prompt('이름을 입력하십시오');
    resolve(name);
  }, 1000);
});

promise.then((name) => {
  console.log('안녕하세요' + name);
});

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    var n = parseInt(prompt('10 미만의 수 입력'));
    if (n <= 10) {
      resolve(n);
    } else {
      reject(`오류 ${n}은 10 이상`);
    }
  }, 1000);
});
promise
  .then((num) => {
    console.log(`2^${num} = ${Math.pow(2, num)}`);
  })
  .catch((error) => {
    console.log(error);
  });

promise.then(
  (num) => {
    console.log(`2^${num} = ${Math.pow(2, num)}`);
  },
  (error) => {
    console.log(error);
  }
);

function buyAsync(mymoney) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var payment = parseInt(prompt('지불하고자 하는 금액을 입력하십시오'));
      var balance = mymoney - payment;
      if (balance > 0) {
        console.log(`${payment}원을 지불했습니다.`);
        resolve(balance);
      } else {
        reject(`잔액은 ${mymoney}원입니다. 구매할수없습니다`);
      }
    }, 1000);
  });
}
buyAsync(500)
  .then((balance) => {
    console.log(`잔액은 ${balance}입니다.`);
    return buyAsync(balance);
  })
  .then((balance) => {
    console.log(`잔액은 ${balance}입니다.`);
    return buyAsync(balance);
  })
  .then((balance) => {
    console.log(`잔액은 ${balance}입니다.`);
    return buyAsync(balance);
  })
  .catch((err) => {
    console.log(err);
  });

function buyAsync2(name, mymoney) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var payment = parseInt(
        prompt(`${name}님 지불하고자 하는 금액을 입력하십시오`)
      );
      var balance = mymoney - payment;
      if (balance > 0) {
        console.log(`${name}: ${payment}원을 지불했습니다.`);
        resolve(balance);
      } else {
        reject(`${name}: 잔액은 ${mymoney}원입니다. 구매할수없습니다`);
      }
    }, 1000);
  });
}
Promise.all([
  buyAsync2('tom', 500),
  buyAsync2('huck', 600),
  buyAsync2('becky', 1000),
])
  .then((balance) => {
    console.log(balance);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race([
  buyAsync2('tom', 500),
  buyAsync2('huck', 600),
  buyAsync2('becky', 1000),
])
  .then((balance) => {
    console.log(balance);
  })
  .catch((err) => {
    console.log(err);
  });
