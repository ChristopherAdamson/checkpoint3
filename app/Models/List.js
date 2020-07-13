import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.Id = data.Id || generateId();
    // turn the load back  into class's if you want
    this.name = data.name || "Unnamed list"
    this.color = data.color || "whiter"
    /**@type {string[]} */
    this.tasks = data.tasks || []


  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get ListTemplate() {
    let template =  /*html*/ `
    <div class="col-3 mr-5 box-shadow rounded bg-${this.color} mt-4 ">
    <span class="">
    <button onclick="app.listController.deleteList('${this.Id}')" class="btn btn-danger float-right"><i class="fa fa-trash-o"></i></button>
    <h3 class="text-center">${this.name}</h3>
      </span>
      <form onsubmit="app.listController.addTask(event, '${this.Id}')" class="form-inline">
        <div class="form-group ">
          <label for="taskName"></label>
          <input type="text" name="taskName" class="form-control " placeholder="Add a task.">
          <button type="submit" class="btn btn-success">Add Task!</button type>
        </div>
      </form>
      `
    this.tasks.forEach((task, taskIndex) => template += `  <div class="d-flex justify-content-between align-items-center bg-white mb-2 mt-1 rounded cus-font "> <span class="line flex-fill "> <input type="checkbox" aria-label="Checkbox for following text input">
    <h5>${task}</h5> <button class="btn btn-danger d-flex justify-content-end"
      onclick="app.listController.deleteTask('${this.Id}', '${taskIndex}')"><i class="fa fa-trash-o big-font"></i></button>
  </span> </div>  `)

    template += ` </div>`
    return template
  }


  // get TasksTemplate() {
  //   let template = ""


  //   this.tasks.forEach((task, taskIndex) => template += /*html*/ `
  //     <li class="list-group-item listItemsSpacing">
  //     <span>
  //       <input type="checkbox" aria-label="Checkbox for following text input">
  //       ${this.tasks[taskIndex]}
  //     </span>
  //     <span>
  //       <button class="btn btn-danger" onclick="app.listController.deleteTask('${this.Id}', '${taskIndex}')">Del</button>
  //     </span>
  //   </li>
  //     `
  //   )
  //   return template
  // }






  // get Template() {

  //   let template = /* html */ `
  //       <div class="col-3">
  //                   <h1>${this.name}</h1>
  //                   <form onsubmit="app.pizzasController.addTopping(event, '${this.id}')">
  //                       <div class="form-group">
  //                           <label for="toppingName">Topping Name</label>
  //                           <input type="text" name="toppingName" class="form-control" placeholder="Enter Topping Name...">
  //                       </div>
  //                       <button type="submit" class="btn btn-outline-success">Add Topping</button>
  //                   </form>
  //                   `

  //   this.toppings.forEach(topping => template += `<p>${topping}</p>`)

  //   template += '</div>'

  //   return template
  // }





}

