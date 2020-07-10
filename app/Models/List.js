import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.Id = data.Id || generateId();
    // turn the load back  into class's if you want
    this.name = data.name || "Unnamed list"
    /**@type {string[]} */
    this.tasks = data.tasks || []


  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get ListTemplate() {
    let template =  /*html*/ `
    <div class="col-4 p-0 bg-white">
    <div class="">
      <button onclick="deleteList()" class="btn btn-danger float-right"><i class="fa fa-trash-o"></i></button>
      <h3 class="text-center">${this.name}</h3>
      <form onsubmit="app.listController.addTask(event, '${this.Id}')" class="form-inline">
        <div class="form-group">
          <label for="taskName"></label>
          <input type="text" name="taskName" class="form-control w-75" placeholder="Add a task.">
          <button type="submit" class="btn btn-success">Add Task!</button type>
        </div>
      </form>
    

`


    this.tasks.forEach(task => template += /*html*/ `  <div class="bg-secondary p-1">
<ul>
  <li>
    <p>${task} <button class="btn btn-danger float-right"><i class="fa fa-trash-o"></i></button></p>
  </li>
</ul>
</div>
</div>`)
    template += `</div>`
    return template
  }
}
