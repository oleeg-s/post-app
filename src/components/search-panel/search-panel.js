import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super();
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value.toLowerCase();
        this.setState({
            term: term
        });
        console.log(this.state.term)
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input  
                className="form-control search-input" 
                type="text" 
                placeholder="Поиск..." 
                onChange={this.onUpdateSearch}
            >
            </input>
        )
    }
}
