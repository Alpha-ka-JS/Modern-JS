function Card(suit, rank) {
  this.suit = suit; // 슈트 (마크)
  this.rank = rank; // 번호
  /* eslint-disable */
  Object.defineProperties(this, {
    color: {
      get: function () {
        switch (this.suit) {
          case 'Club':
          case 'Spade':
            return 'black';
          case 'Diamond':
          case 'Hearts':
            return 'red';
        }
      },
    },
    /* eslint-enable */
    symbol: {
      get: function () {
        return Card.Suit[this.suit] + Card.Rank[this.rank];
      },
    },
  });
}
Card.Suit = { Club: '♣', Spade: '♠', Diamond: '◆', Hearts: '♥' };
Card.Rank = {
  Two: '2',
  Three: '3',
  Four: '4',
  Five: '5',
  Six: '6',
  Seven: '7',
  Eight: '8',
  Nine: '9',
  Ten: '10',
  Jack: 'J',
  Queen: 'Q',
  King: 'K',
  Ace: 'A',
};

function Deck() {
  var cards = (this.cards = []);
  for (var s in Card.Suit) {
    for (var r in Card.Rank) {
      cards.push(new Card(s, r));
    }
  }
}

Deck.prototype.shuffle = function () {
  var a = this.cards;
  var m = a.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = a[m];
    a[m] = a[i];
    a[i] = t;
  }
  return this;
};

Deck.prototype.deal = function (n) {
  if (this.cards.length < n) throw new Error('카드가 없습니다');
  return this.cards.splice(this.cards.length - n, n);
};
