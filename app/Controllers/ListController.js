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
      name: formData.listName.value
    }
    console.log(listName);
    ListService.addList(listName)
    _drawLists()

  }

  addTask(event) {
    event.preventDefault()
    let formData = event.target
    let taskName = {
      name: formData.taskName.value
    }
    console.log(taskName);
    ListService.addtask(taskName)
    _drawLists()
  }



  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
