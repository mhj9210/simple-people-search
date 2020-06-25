import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/searchbox/SearchBox";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  changeHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Roledex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.changeHandler}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
