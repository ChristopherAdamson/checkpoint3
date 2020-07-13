import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: []
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  deleteTask(listId, taskIndex) {

    console.log(taskIndex);
    console.log(listId);
    let list = _state.lists.find(l => l.Id == listId)
    list.tasks.splice(taskIndex, 1)
    console.log(list.tasks);
    this.saveState()
  }
  addTask(foundListIndex, taskName) {
    _state.lists[foundListIndex].tasks.push(taskName)

  }





  addList(newList) {
    _state.lists.push(newList);
  }
  deleteList(listId) {
    let indexToRemove = _state.lists.findIndex(list => list.Id == listId)
    if (indexToRemove < 0) {
      console.error("invalid list");
      return
    }
    _state.lists.splice(indexToRemove, 1)
    this.saveState()
  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
