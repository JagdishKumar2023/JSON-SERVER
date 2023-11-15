let apiUrl = "http://localhost:3000/TodoList/";

async function fetchData(apiUrl) {
  try {
    let response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`status code ${response.status}`);
    }
    let data = await response.json();
    displayData(data);
  } catch (err) {
    console.log(err);
  }
}

function displayData(data) {
  console.log(data);
  let todo = document.getElementById("todo");

  data.map((ele, idx, arrr) => {
    let h3 = document.createElement("h3");
    h3.innerText = ele.todo;
    todo.append(h3);
  });
}

fetchData(apiUrl);
