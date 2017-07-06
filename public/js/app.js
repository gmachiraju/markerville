class App {
  constructor() {
    const aboutPage = document.querySelector('#aboutPage');
    this.aboutPage = new About(aboutPage);

    const database = document.querySelector('#database');
    this.database = new Database(database);

    const forum = document.querySelector('#forum');
    this.forum = new Forum(forum);

    const result = document.querySelector('#result');
    this.result = new Result(result);


    this.forumInput = document.querySelector('#forum form');



    this.showDatabase = this.showDatabase.bind(this);
    this.showForum = this.showForum.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.showResult = this.showResult.bind(this);

    this.databaseButton = document.querySelector('#databaseButton');
    this.forumButton = document.querySelector('#forumButton');
    this.aboutButton = document.querySelector('#aboutButton');
    this.submitButton = document.querySelector("#searchForm");

    this.databaseButton.addEventListener('click', this.showDatabase);
    this.forumButton.addEventListener('click', this.showForum);
    this.aboutButton.addEventListener('click', this.showAbout);
    this.submitButton.addEventListener('submit', this.showResult);



  }


  showDatabase(){
    this.forum.hide();
    this.database.show();
    this.aboutPage.hide();
    this.result.hide();

  }

  showForum(){
    this.database.hide();
    this.forum.show();
    this.aboutPage.hide();
    this.result.hide();

  }

  showAbout(){
    this.database.hide();
    this.forum.hide();
    this.aboutPage.show();
    this.result.hide();
  }

  showResult(){
    this.database.hide();
    this.forum.hide();
    this.aboutPage.hide();
    this.result.show();

  }





}
