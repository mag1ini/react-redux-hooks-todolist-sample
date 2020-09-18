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
