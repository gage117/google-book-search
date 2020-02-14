import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }


  render() {
    function handleSearchSubmit(searchString) {
      console.log(searchString)
    }

    return (
      <main className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
          <form className='search-bar'>
            <label>Search:
              <input type='text' required></input>
              <button type='submit' onClick={handleSearchSubmit}>Submit</button>
            </label>
          </form>
          <section>
            <label>Print Type:
              <select>
                <option>All</option>
                <option>Printed</option>
                <option>E-Book</option>
              </select>
            </label>
            <label>Book Type:
              <select>
                <option>No Filter</option>
                <option>Paid</option>
                <option>Free</option>
              </select>
            </label>
          </section>
          <ul className='results-list'>

          </ul>
      </main>
    );
  }
}


export default App;
