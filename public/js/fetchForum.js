async function onOpenForum(event) {
  event.preventDefault();
  let forumTable = document.querySelector('#forum table');

  for (let i = forumTable.rows.length-1; i>0; i--) {
    forumTable.deleteRow(i);
  }

  const forumPage = document.querySelector('#forum');
  const result = await fetch('/getForum/');
  const json = await result.json();
  const forumSheet = json.forumSheet;


for (let obj in forumSheet){

  let row = document.createElement('tr');
  let question = document.createElement('td');
  question.innerHTML = forumSheet[obj].question;
  row.appendChild(question);
  let answer = document.createElement('td');
  answer.innerHTML = forumSheet[obj].answer;
  row.appendChild(answer);
  forumTable.appendChild(row);
}

}

async function onTextReady(text) {
console.log(text);
}

async function onResponse(response) {
return response.text();
}

async function onForumPost(event) {
  event.preventDefault();
  let forumTable = document.querySelector('#forum table');
  for (let i = 1; i<forumTable.rows.length-1; i++) {
    forumTable.removeChild(forumTable.rows[i]);
  }

   messageRaw = document.querySelector('#message-post');
   const messagePost = messageRaw.value.trim();


   if(messagePost.length!=0){

       const message = {
         message: messagePost
       };

       const fetchOptions = {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(message)
       };
       fetch('/onPost', fetchOptions) .then(onResponse)
  .then(onTextReady);

    }
    onOpenForum(event);
}






const forumForm = document.querySelector('#forumForm');
forumForm.addEventListener('submit', onForumPost);

const forumButton = document.querySelector('#forumButton');
forumButton.addEventListener('click', onOpenForum);
