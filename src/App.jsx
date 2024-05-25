import React from "react";
import "./index.css";
import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import { pokedex } from "./pokedex.js";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            pokedex: pokedex,
            search: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ search: event.target.value })
    }

    render() {
        const filterPokedex = this.state.pokedex.filter(pokedex => {
            return pokedex.name.toLowerCase().includes(this.state.search.toLowerCase());
        });

        return (
            <div className="tc">
                <img src="./src/assets/images/Pokédex_logo.png" alt="pokedex logo" />
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList pokedex={filterPokedex} />
                </Scroll>

                <br />
                <br />
                <footer>
                    &copy;2024 Pokémon. &copy;1995 - 2024 Nintendo/Creatures Inc./GAME FREAK inc. TM, &reg;Nintendo.
                </footer>

            </div>
        )
    }
}

export default App;