#!/usr/bin/env node

const task = {
  id: 0,
  description: "",
  status: "",
  createdAt: 0,
  updatedat: 0,
};

let nextId = 1;

/* Types of Arguments
  add - add a new task

  update <id>- update task <id>
  delete <id> - delete task <id>

  mark-in-progress <id> - mark task <id> as in-progress
  mark-done <id> - mark task <id> as mark-done

  list - list all tasks

  list done - list by status: done
  list todo - list by status: todo
  list in-progress - list by status: in-progress
*/

const args = process.argv.slice(2);

switch (args[0]) {
  case "add":
    addTask();
    break;
  case "update":
    updateTask();
    break;
  case "delete":
    deleteTask();
    break;
  case "mark-in-progress":
    markInProgress();
    break;
  case "mark-done":
    markDone();
    break;
  case "list":
    listFunction();
    break;
  default:
    console.log(`Invalid command: ${args[0]}`);
}
