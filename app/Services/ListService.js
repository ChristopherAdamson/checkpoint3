import List from "../Models/List.js";
import _store from "../store.js"

//Public
class ListService {

  constructor() {
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(listName) {
    let newList = new List(listName)
    console.log(newList);
    _store.addList(newList)
    _store.saveState()
  }

  deleteList(listId) {
    console.log(listId);
    let validator = window.confirm("Are you sure you want to delete this?")
    if (validator)
      _store.deleteList(listId)
  }
  addtask(taskName, listId) {
    console.log(listId);

    let foundListIndex = _store.State.lists.findIndex(list => list.Id == listId)
    if (foundListIndex < 0) {
      console.error("cannot find list");
      return
    }
    _store.addTask(foundListIndex, taskName)
    _store.saveState()
  }


  deleteTask(listId, taskIndex) {
    let validator = window.confirm("Are you sure you want to delete this Task?")
    if (validator) {
      _store.deleteTask(listId, taskIndex)

    }
  }

}




const SERVICE = new ListService();
export default SERVICE;
