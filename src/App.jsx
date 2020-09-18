import React from "react";
import { Switch, Route, useParams, useHistory, Redirect } from "react-router";
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
      <History />
    </>
  );
};
const History = () => {
  let history = useHistory();
  return (
    <div>
      <button onClick={() => history.goBack()}>Prev</button>
      <button onClick={() => history.goForward()}>Next</button>

      {/* <button onClick={() => history.go(-1)}>Prev</button>
      <button onClick={() => history.go(1)}>Next</button> */}

      <Redirect to="/user/0/chat/0">To Users</Redirect>
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
