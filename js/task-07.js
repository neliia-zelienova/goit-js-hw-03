// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в 
// котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};


/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const idTransaction = this.transactions.length + 1;
    const transaction = {
        id: idTransaction,
        type: type,
        amount: amount
    }
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, 'deposit'));
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.transactions.push(this.createTransaction(amount, 'withdraw'));
    if(this.balance < amount){
        alert('Operation denided! Not enough money!');
    } else {
        this.balance -= amount;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
      return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
      if (id > this.transactions.length + 1){
          return undefined;
      } else {
      for(const transaction of this.transactions){
        if (transaction.id === id){
            return transaction;
        }
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let result = 0;
    for(const transaction of this.transactions){
        if (transaction.type === type){
            result += transaction.amount;
        }
    }
    return result;
  },
};

account.deposit(100);
account.withdraw(50);
account.deposit(1000);
account.deposit(1500);
account.withdraw(30);
account.withdraw(40);
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionTotal('withdraw'));
console.log(account);