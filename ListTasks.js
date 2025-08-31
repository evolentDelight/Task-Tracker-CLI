import * as FO from "./fileOperations.js";

function OutputTasks(tasks, status) {
  if (tasks.length !== 0) {
    if (status !== "all")
      console.log("\nList of tasks sorted by ", status, "\n");
    else console.log("\nList of all tasks\n");

    tasks.forEach((task) => {
      console.log("Task: \t\t\t", task.description);
      console.log("Task ID: \t\t", task.id);
      console.log("Task status: \t\t", task.status);
      console.log("Task Created Date: \t", task.createdAt);
      console.log("Task Updated Date: \t", task.updatedAt, "\n");
    });
  } else console.log("There are no tasks with the status: ", status);
}

function ListTasks(status) {
  //status: done, todo, in-progress
  if (!FO.fileExistsSync("./tasksData.json")) {
    return console.error(
      `Error: Task ID: ${id} does not exist; There are no tasks in the list`
    );
  }

  let tasks = FO.readFileSync("./tasksData.json");

  if (!tasks)
    return console.error(
      `Error: Task ID: ${id} does not exist; There are no tasks in the list`
    );

  let tasksToOutput;
  if (status !== "all") {
    tasksToOutput = tasks.filter(
      (task) => String(task.status) === String(status)
    );
  } else tasksToOutput = tasks;

  OutputTasks(tasksToOutput, status);
}

export default ListTasks;
