class Result {

  constructor(containerElement){
    this.prevTable = document.querySelector("#result table");
    this.message = document.querySelector('#result p');
    this.prevTableRows = this.prevTable.getElementsByTagName('tr');
    this.containerElement = containerElement;
  }

  show(){

    this.containerElement.classList.remove('inactive');
  }

  hide(){

    this.containerElement.classList.add('inactive');
    for (let i = 1; i<this.prevTableRows.length; i++) {
      console.log(this.prevTable);
      this.prevTable.removeChild(this.prevTableRows[i]);
    }
}


}
