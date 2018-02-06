import React, { Component } from "react";

export default class Graph extends Component {
  state = {
    query: '',
    result: '',
  };

  handleClickExecute = () => {
    this.runQuery();
  }

  handleChangeQuery = event => {
    const query = event.target.value;
    this.setState({ query });
  }

  handleKeyDown = event => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      this.runQuery();
    }
  }

  async runQuery() {
    const { query } = this.state;
    if (!query) return;

    this.setState({ result: null });

    try {
      const jetzt = Date.now();
      const end = jetzt / 1000;
      const encodedQuery = encodeURIComponent(query);
      const url = `/api/v1/query?query=${encodedQuery}&end=${end}&stats=1&_source=promui&_=${jetzt}`;
      const res = await fetch(url);
      const result = await res.json();
      this.setState({ result });
    } catch (error) {
      this.setState({ result: error });
    }
  }

  render() {
    const { query, result } = this.state;
    const executeClassName = query ? 'btn btn-primary' : 'btn btn-light';
    return (
      <div className="graph">
        <form className="mb-3">
          <div className="form-group">
            <textarea className="form-control" rows="1" placeholder="Enter an expression"
              onChange={this.handleChangeQuery}
              onKeyDown={this.handleKeyDown}>
              {query}
            </textarea>
          </div>
          <button type="button" className={executeClassName} onClick={this.handleClickExecute}>Execute</button>
        </form>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">Graph</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Table</a>
          </li>
        </ul>

        <div className="mt-3">
          <pre>
            {result ? JSON.stringify(result, null, '  ') : 'Query result'}
          </pre>
        </div>

      </div>
    );
  }
}
