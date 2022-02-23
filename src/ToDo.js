import React, { Component, createElement } from "react";
import TodoList from "./components/toDoList";
import SearchPanel from "./components/searchPanelTodo";
import ItemStatusFilter from "./components/itemStatusFilter";
import ItemAddForm from "./components/itemAddForm";
import Header from "./components/header";


export default class App extends Component {

    maxId = 3;
  
    state = {
      items: [
        { id: 1, label: 'List 1', important: false, done: false, edit: false },
        { id: 2, label: 'List 2', important: true, done: false, edit: false },
        { id: 3, label: 'List 3', important: false, done: false, edit: false }
      ],
      filter: 'all',
      search: '',
      title: 'ToDo List'
    };
  
    onItemAdded = (label) => {
      this.setState((state) => {
        const item = this.createItem(label);
        return { items: [...state.items, item] };
      })
    };
    onItemClear = (label) => {
        this.setState({ label: '' });
      };
  
    toggleProperty = (arr, id, propName) => {
      const idx = arr.findIndex((item) => item.id === id);
      const oldItem = arr[idx];
      const value = !oldItem[propName];
  
      const item = { ...arr[idx], [propName]: value } ;
      return [
        ...arr.slice(0, idx),
        item,
        ...arr.slice(idx + 1)
      ];
    };
  
    changeProperty = (arr, id, propName, newValue) => {
        const idx = arr.findIndex((item) => item.id === id);
        const oldItem = arr[idx];
        const value = newValue;
    
        const item = { ...arr[idx], [propName]: value } ;
        return [
          ...arr.slice(0, idx),
          item,
          ...arr.slice(idx + 1)
        ];
      };

    onToggleDone = (id) => {
      this.setState((state) => {
        const items = this.toggleProperty(state.items, id, 'done');
        return { items };
      });
    };
  
    onToggleImportant = (id) => {
      this.setState((state) => {
        const items = this.toggleProperty(state.items, id, 'important');
        return { items };
      });
    };

    onToggleEdit = (id) => {
        this.setState((state) => {
            const items = this.toggleProperty(state.items, id, 'edit');
            return { items };
          });
    };
  
    onDelete = (id) => {
      this.setState((state) => {
        const idx = state.items.findIndex((item) => item.id === id);
        const items = [
          ...state.items.slice(0, idx),
          ...state.items.slice(idx + 1)
        ];
        return { items };
      });
    };

    onEdit = (id) => {
        this.setState((state) => {
            const items = this.toggleProperty(state.items, id, 'edit');
            return { items };
          });
    };

    onEditChange = (id, e) => {
        this.setState((state) => {
            const items = this.changeProperty(state.items, id, 'label', e.target.value);
            return { items };
          });
    };
  
    onFilterChange = (filter) => {
      this.setState({ filter });
    };
  
    onSearchChange = (search) => {
      this.setState({ search });
    };
  
    createItem(label) {
        this.maxId = this.maxId + 1;
      return {
        id: this.maxId,
        label,
        important: false,
        done: false,
        edit: false
      };
    }
  
    filterItems(items, filter) {
      if (filter === 'all') {
        return items;
      } else if (filter === 'active') {
        return items.filter((item) => (!item.done));
      } else if (filter === 'done') {
        return items.filter((item) => item.done);
      }
    }
  
    searchItems(items, search) {
      if (search.length === 0) {
        return items;
      }
  
      return items.filter((item) => {
        return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    }
  
    render() {
      const { items, filter, search } = this.state;
      const doneCount = items.filter((item) => item.done).length;
      const toDoCount = items.length - doneCount;
      const visibleItems = this.searchItems(this.filterItems(items, filter), search);
  
      return (
        <div className="todo">
          <Header toDo={toDoCount} done={doneCount}/>
  
          <div className="search-panel">
            <SearchPanel
              onSearchChange={this.onSearchChange}/>
  
            <ItemStatusFilter
              filter={filter}
              onFilterChange={this.onFilterChange} />
          </div>
  
          <TodoList
            items={ visibleItems }
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            onToggleEdit={this.onToggleEdit}
            onDelete={this.onDelete} 
            onEdit={this.onEdit}
            onEditChange={this.onEditChange}/>
  
          <ItemAddForm
            onItemAdded={this.onItemAdded}
            onItemClear={this.onItemClear} />
        </div>
      );
    };
  }
