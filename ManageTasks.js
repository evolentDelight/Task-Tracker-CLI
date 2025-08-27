import * as FO from "./fileOperations.js";

class taskSchema {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.status = "todo";
    this.createdAt = new Date().toString();
    this.updatedAt = "Never updated";
  }
}

function getNextId() {
  //Create new programData.json to store id as persistant data
  if (!FO.fileExistsSync("./programData.json")) {
    const IDs = { id: 0 };

    FO.writeFile("programData.json", IDs, (err) => {
      if (err) console.error(`Error writing JSON file`, err);
    });
    return 0;
  }
  const IDs = FO.readFileSync("./programData.json");
  // if data is empty, then create new
  if (!IDs) IDs = { id: 99999 }; //if programData is somehow deleted or empty, it will affect the existing task ids in tasksData.json, thus either using unique id or absurd numbered id will alleviate the issue

  const nextId = ++IDs.id; //Get next id AND update JSON object

  FO.writeFile("./programData.json", IDs);

  return nextId;
}

function addNewTask(description) {
  //Check if user-inputted description is valid
  if (!description)
    return console.error("Error: Missing required name/description");

  const newId = getNextId();

  //Create new task object
  const newTask = new taskSchema(newId, description);

  //Check if tasksData.json exists
  if (!FO.fileExistsSync("./tasksData.json")) {
    //If it doesn't exist, then there is no existing data, so create new file
    const arrayData = [newTask];

    FO.writeFile("tasksData.json", arrayData);
    console.log(`Task added successfully (ID: ${newTask.id})`);
    return; //And exit, once complete
  }
  //If tasksData.json does exist, read and parse from it
  let tasks = FO.readFileSync("./tasksData.json");
  // if data is empty, then create new
  if (!tasks) tasks = [newTask];
  else tasks.push(newTask);

  FO.writeFile("./tasksData.json", tasks);
  return console.log(`Task added successfully (ID: ${newTask.id})`);
}

function updateTask(id, newDescription) {
  if (!newDescription)
    return console.error("Error: Missing required name/description");

  if (!FO.fileExistsSync("./tasksData.json")) {
    return console.error(
      `Error: Task ID: ${id} does not exist; There are no tasks in the list`
    );
  }

  let tasks = FO.readFileSync("./tasksData.json");

  if (!tasks)
    return console.error(
      `Task ID: ${id} does not exist; There are no tasks in the list`
    );

  const index = tasks.findIndex((obj) => Number(obj.id) === Number(id));

  if (index === -1)
    return console.error(`Error: Task ID: ${id} does not exist in the list`);

  tasks[index].description = newDescription;

  FO.writeFile("./tasksData.json", tasks);
  return console.log(`Task updated successfully (ID: ${id})`);
}

function deleteTask(id) {
  if (!FO.fileExistsSync("./tasksData.json")) {
    return console.error(
      `Error: Task ID: ${id} does not exist; There are no tasks in the list`
    );
  }

  let tasks = FO.readFileSync("./tasksData.json");

  if (!tasks)
    return console.error(
      `Task ID: ${id} does not exist; There are no tasks in the list`
    );

  const index = tasks.findIndex((obj) => Number(obj.id) === Number(id));

  if (index === -1)
    return console.error(`Error: Task ID: ${id} does not exist in the list`);

  tasks.splice(index, 1);

  FO.writeFile("./tasksData.json", tasks);
  return console.log(`Task deleted successfully (ID: ${id})`);
}

function ManageTasks(mainCommand, args) {
  switch (mainCommand) {
    case "add":
      addNewTask(args[1]); //(name/description)
      break;
    case "update":
      updateTask(args[1], args[2]); //(id, new name/description)
      break;
    case "delete":
      deleteTask(args[1]); //(id)
  }
}

export default ManageTasks;
