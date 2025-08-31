import * as FO from "./fileOperations.js";

function alignRight(strings) {
  const maxLength = Math.max(...strings.map((s) => s.length));
  return strings.map((s) => s.padStart(maxLength, " "));
}

function OutputTasks(tasks, status) {
  if (tasks.length !== 0) {
    if (status !== "all")
      console.log("\nList of tasks sorted by ", status, "\n");
    else console.log("\nList of all tasks\n");

    //Align Right for each human readable titles: i.e. Task, Task ID, Task Status

    const taskTitles = [
      "Task:",
      "Task ID:",
      "Task Status:",
      "Task Created Date:",
      "Task Updated Date:",
    ];

    const alignedTitles = alignRight(taskTitles);

    tasks.forEach((task) => {
      console.log(alignedTitles[0], task.description);
      console.log(alignedTitles[1], task.id);
      console.log(alignedTitles[2], task.status);
      console.log(alignedTitles[3], task.createdAt);
      console.log(alignedTitles[4], task.updatedAt, "\n");
    });
  } else console.log("There are no tasks with the status: ", status);
}

function ListTasks(status) {
  //status: done, todo, in-progress
  if (!FO.fileExistsSync("./tasksData.json")) {
    return console.error(
      `Error: Cannot list tasks; There are no tasks in the list`
    );
  }

  let tasks = FO.readFileSync("./tasksData.json");

  if (!tasks)
    return console.error(
      `Error: Cannot list tasks; There are no tasks in the list`
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
