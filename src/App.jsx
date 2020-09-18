import React from "react";
import { Switch, Route, useParams } from "react-router";
import TodoPage from "./TodoPage";
import { Link } from "react-router-dom";

const Hello = () => {
  return <div> hello </div>;
};

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/todo/:newTodoText?">
          <TodoPage />
          <Link to="/user/15/chat/44">To Users</Link>
        </Route>
        <Route path="/user/:userId/chat/:chatId" component={User}></Route>
        <Route exact path="/hello" component={Hello}></Route>
      </Switch>
    </>
  );
};
const History = () => {
  return (
    <div>
      <Link to="/user/15/chat/44">To Users</Link>
    </div>
  );
};
const User = () => {
  const { userId, chatId } = useParams();
  return (
    <>
      <div>{`User with id:${userId}`}</div>
      <div>{`Chat with id:${chatId}`}</div>
    </>
  );
};

export default App;
