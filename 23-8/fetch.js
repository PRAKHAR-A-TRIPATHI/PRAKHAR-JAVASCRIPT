const api = "https://jsonplaceholder.typicode.com/posts";

let get = document.getElementById("get");
let create = document.getElementById("create");
let put = document.getElementById("put");
let patch = document.getElementById("patch");
let deletep = document.getElementById("delete");

// function getMethod(){
//     fetch(api).then(responce => responce.json()).then(post => console.log(post))
// }

async function getMethod() {
  try {
    const response = await fetch(api);
    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}

async function createPost(newpost) {
  try {
    const responce = await fetch(api, {
      method: "POST",
      body: JSON.stringify(newpost),
      headers: { "content-type": "application/json; charset=UTF-8" },
    });
    if (responce.status != 201) {
      throw new Error("Something went wrong");
    }
    const post = await responce.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}

get.addEventListener("click", async () => {
  const posts = await getMethod();
  //    console.log(posts);
  const table = ` <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">tittle</th>
      </tr>
    </thead>
    <tbody>
    ${posts.map(
        (post) => ` <tr>
    <th scope="row">${post.id}</th>
    <td>${post.title}</td>
  </tr>`
      )
      .join("\n")}
     </tbody>`;
  document.getElementById("t").innerHTML = table;
});

create.addEventListener("click", async () => {
  const newPost = {
    title: "New Post Title",
    body: "New Post Body",
    userId: 100,
  };
  const createnewPost = await createPost(newPost);
  console.log(createnewPost);
});

async function UpdatePost(newpost,id){
  try {
    const responce = await fetch(`${api}/${id}`, {
      method: "PUT",
      body: JSON.stringify(newpost),
      headers: { "content-type": "application/json; charset=UTF-8" },
    });
    if (responce.status != 200) {
      throw new Error("Something went wrong");
    }
    const post = await responce.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}

put.addEventListener("click", async () => {
  const newPost = {
    id: 2,
    title: "Upadate Post Title",
    body: "Update Post Body",
    userId: 100,
  };
  const UpadatenewPost = await UpdatePost(newPost,2);
  console.log(UpadatenewPost,2);
});

async function patchPost(newpost,id){
  try {
    const responce = await fetch(`${api}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newpost),
      headers: { "content-type": "application/json; charset=UTF-8" },
    });
    if (responce.status != 200) {
      throw new Error("Something went wrong");
    }
    const post = await responce.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}
async function deletePost(id){
  try {
    const responce = await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    if (responce.status != 200) {
      throw new Error("Something went wrong");
    }
    const post = await responce.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}

patch.addEventListener("click", async () => {
  const newPost = {
    id: 2,
    title: "Upadate Post Title",
  };
  const patchNewPost = await patchPost(newPost,2);
  console.log(patchNewPost,2);
});

deletep.addEventListener("click", async () => {
  const deletenewPost = await deletePost(2);
  console.log(deletenewPost,2);
});
