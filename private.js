// isbn, title author
// public 有问题
// 私有化
// 立即执行函数
var Book = (function() {
  // 闭包 闭合空间
  var numOfBooks = 0;
  return function(newIsbn, newTitle, newAuthor) {// constructor 构造函数
    // 局部作用域内的变量
    console.log(newIsbn, newTitle, newAuthor, numOfBooks);
    var isbn, title, author;
    var checkIsbn = function(isbn) {
      if(!isbn || typeof isbn !== 'string') {
        throw new Error('isbn有误');
      }
    }
    // 公有属性
    this.setTitle = function(newTitle) {
      title = newTitle || 'No Title Specified';
    }
    this.setIsbn = function(newIsbn) {
      if (checkIsbn(newIsbn))
        isbn = newIsbn;
    }
    this.getIsbn = function() {
      return isbn;
    }
    this.getTitle = function() {
      return title;
    }
    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    numOfBooks++;
    console.log(`创建了${numOfBooks}本书`);
    this.getNumOfBooks = function() {
      return numOfBooks;
    }
  }
}) ();
// 静态方法
Book.convertToTitleCase = function(inputString) {
  return inputString.toUpperCase();
}

Book.prototype = {
  display: function() {
    console.log(`这本书书名是${this.getTitle()}，作者是${this.getAuthor}`);
  }
}
var book = new Book('123', '飞鸟集', '泰戈尔');
var book2 = new Book('456', 'HTML', '匿名');
console.log(book.getTitle());