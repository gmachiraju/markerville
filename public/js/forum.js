class Forum {

  constructor(containerElement){
    this.prevTable = document.querySelector("#forum table");
    this.prevTableRows = this.prevTable.getElementsByTagName('tr');
    this.containerElement = containerElement;
  }

  show(){
    this.containerElement.classList.remove('inactive');
  }

  hide(){
    this.containerElement.classList.add('inactive');


}
}
