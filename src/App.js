import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/search/SearchBar";
import PeopleList from "./components/people/PeopleList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      search: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => this.setState({ people: res.data }))
      .catch((err) => alert(err));
  }

  changeHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const { people, search } = this.state;
    const newList = people.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>People Search</h1>
        <SearchBar value={search} change={this.changeHandler} />
        <PeopleList newList={newList} />
      </div>
    );
  }
}

export default App;
