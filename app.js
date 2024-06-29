class ToDoList {
    constructor() {
        this.list = [];
    }

    addItem(name) {
        if (!name) {
            throw new Error('Note cannot be empty');
        }
        this.list.push(new ListItem(name));
    }

    removeItem(name) {
        this.list = this.list.filter(item => item.name !== name);
    }

    editItem(oldName, newName) {
        const item = this.list.find(item => item.name === oldName);
        if (item) {
            item.name = newName;
            item.updatedAt = new Date();
        }
    }

    markAsCompleted(name) {
        const item = this.list.find(item => item.name === name);
        if (item) {
            item.markAsCompleted();
        }
    }

    getAllItems() {
        return this.list;
    }

    getCompletedItems() {
        return this.list.filter(item => item.isCompleted);
    }

    getIncompleteItems() {
        return this.list.filter(item => !item.isCompleted);
    }

    searchByName(name) {
        return this.list.filter(item => item.name.includes(name));
    }

    sortByStatus() {
        return this.list.slice().sort((a, b) => b.isCompleted - a.isCompleted);
    }

    sortByCreationDate() {
        return this.list.slice().sort((a, b) => a.createAt - b.createAt);
    }

    sortByUpdateDate() {
        return this.list.slice().sort((a, b) => a.updatedAt - b.updatedAt);
    }

    countAllItems() {
        return this.list.length;
    }

    countIncompleteItems() {
        return this.getIncompleteItems().length;
    }
}

class ListItem {
    constructor(name) {
        this.name = name;
        this.isCompleted = false;
        this.createAt = new Date();
        this.updatedAt = new Date();
    }

    markAsCompleted() {
        this.isCompleted = true;
        this.updatedAt = new Date();
    }
}

const toDo = new ToDoList();

toDo.addItem("milk");
toDo.addItem("beer");
toDo.addItem("bread");

toDo.markAsCompleted("beer");

console.log("All items:", toDo.getAllItems());
console.log("Completed items:", toDo.getCompletedItems());
console.log("Incomplete items:", toDo.getIncompleteItems());

toDo.editItem("beer", "2 beers");

console.log("Search 'beer':", toDo.searchByName("beer"));
console.log("Sorted by status:", toDo.sortByStatus());
console.log("Sorted by creation date:", toDo.sortByCreationDate());
console.log("Sorted by update date:", toDo.sortByUpdateDate());

console.log("Total items:", toDo.countAllItems());
console.log("Incomplete items count:", toDo.countIncompleteItems());
