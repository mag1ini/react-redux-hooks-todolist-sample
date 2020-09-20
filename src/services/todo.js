export async function PostTodo(title) {
  try {
    return await await fetch(`https://postman-echo.com/get?title=${title}`);
  } catch (e) {
    return {
      id: 5,
      title
    };
  }
}

export async function postTodo(todo) {
  const request = await fetch("localhost", {
    method: "Post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ title: todo })
  });
  return await request.json();
}

export async function getTodos() {
  const request = await fetch("localhost");
  return await request.json();
}
