import ListService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""
  _store.State.lists.forEach(list => template += list.ListTemplate)
  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    event.preventDefault()
    let formData = event.target
    let listName = {
      name: formData.listName.value,
      color: formData.color.value
    }
    ListService.addList(listName)
    event.target.reset()
    _drawLists()

  }
  deleteList(listId) {
    ListService.deleteList(listId)
    _drawLists()
  }

  addTask(event, listId) {
    event.preventDefault()
    let formData = event.target.taskName.value
    console.log(formData);
    ListService.addtask(formData, listId)
    event.target.reset()

    _drawLists()
  }

  deleteTask(listId, taskIndex) {
    console.log(taskIndex);
    ListService.deleteTask(listId, taskIndex)
    _drawLists()

  }


  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
