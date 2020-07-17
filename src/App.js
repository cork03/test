import React, { useState } from "react";
import { addTodo, removeTodo } from "./actions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import List from "./components/organisms/List";

const App = ({ data, addTodo, removeTodo }) => {
  const [l, setL] = useState("");
  const onSubmit = () => {
    if (!l) {
      return;
    }
    addTodo({ text: l });
    setL("");
  };
  const onChangeText = (e) => {
    setL(e.target.value);
  };

  return (
    <div>
      <h3>Redux Todo List:</h3>
      <div>
        <input type="text" value={l} onChange={onChangeText} />
        <input type="submit" value="Add" onClick={onSubmit} />
      </div>
      <List data={data} onRemove={removeTodo} />
    </div>
  );
};

// Map state and dispatch to props
function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      removeTodo,
      addTodo,
    },
    dispatch
  );
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
