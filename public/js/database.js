class Database {
  constructor(containerElement){
    this.containerElement = containerElement;
    this.prevTable = document.querySelector("#result table");
    this.message = document.querySelector('#result p');
    this.prevTableRows = this.prevTable.getElementsByTagName('tr');
    this.clearDatabase = this.clearDatabase.bind(this);
  }

  show(){
    this.containerElement.classList.remove('inactive');
    this.clearDatabase();

  }

  hide(){
    this.containerElement.classList.add('inactive');
    this.clearDatabase();
  }

  clearDatabase(){
    for (let i = 1; i<this.prevTableRows.length; i++) {
      this.prevTable.removeChild(this.prevTableRows[i]);
    }
  }

}
