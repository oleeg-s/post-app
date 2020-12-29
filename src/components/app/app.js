import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';

export default class App extends Component  {
    constructor(props) {
        super();
        this.state = {
            data : [
                {label: 'Going to learn React', important: false, like: false, id: 1},
                {label: 'This is so good', important: false, like: false, id: 2},
                {label: 'I need a break...', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id)
            const before = data.slice(0, index)
            const after = data.slice(index + 1)
            const newArr = [...before, ...after]
            return {
                data: newArr
            }
        });
    }

    addItem = (body) => {

        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {

            const newArr = [...data, newItem]

            return {
                data: newArr
            }
        });
    }

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index]
            const newItem = {...old, important: !old.important}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index]
            const newItem = {...old, like: !old.like}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    searchPosts = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => item.label.indexOf(term) > -1);
    }

    filterPosts = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else return items;
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        });
    }

    onFilterSelect = (filter) => {
        this.setState({
            filter: filter
        })
    }

    render() {
        const {data, term, filter} = this.state
        const postsAmount = data.length
        const liked = data.filter(item => item.like).length

        const visiblePosts = this.filterPosts(this.searchPosts(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    postsAmount={postsAmount}
                    liked={liked}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}