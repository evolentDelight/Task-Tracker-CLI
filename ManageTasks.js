import * as fs from "fs";

class taskSchema {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.status = "todo";
    this.createdAt = new Date().toString();
    this.updatedAt = "Never updated";
  }
}

let nextId = 0;

function addNewTask(description) {
  //Check if user-inputted description is valid
  if (!description)
    return console.error("||Error|| Missing required name/description");

  //Create new task object
  const newTask = new taskSchema(nextId, description);

  //Check if tasksData.json exists
  if (!fs.existsSync("./tasksData.json")) {
    //If it doesn't exist, then there is no existing data, so create new file
    const arrayData = [newTask];
    const newJSON = JSON.stringify(arrayData, null, 2);

    fs.writeFile("tasksData.json", newJSON, (err) => {
      if (err) console.error("Error writing JSON file:", err);
    });
    console.log(`Task added successfully (ID: ${newTask.id})`);
    return; //And exit, once complete
  }
  //If tasksData.json does exist, read and parse from it
  const fileData = fs.readFileSync("./tasksData.json", "utf8");
  const existingTasks = JSON.parse(fileData);

  existingTasks.push(newTask);

  const jsonData = JSON.stringify(existingTasks, null, 2);
  fs.writeFile("tasksData.json", jsonData, (err) => {
    if (err) console.error("Error writing JSON file:", err);
  });
}

function ManageTasks(mainCommand, args) {
  switch (mainCommand) {
    case "add":
      addNewTask(args[1]);
  }
}

export default ManageTasks;
