#!/usr/bin/env node

import ManageTasks from "./ManageTasks.js";
import ListTasks from "./ListTasks.js";

/* Types of Arguments
  add - add a new task

  update <id> <update name> - update task <id>
  delete <id> - delete task <id>

  mark-in-progress <id> - mark task <id> as in-progress
  mark-done <id> - mark task <id> as mark-done

  list - list all tasks

  list done - list by status: done
  list todo - list by status: todo
  list in-progress - list by status: in-progress
*/

const args = process.argv.slice(2);

let mainCommand, status;

//Case-insensitive
if (args[0]) mainCommand = args[0].toLowerCase();
if (args[1]) status = args[1].toLowerCase();

outerSwitch: switch (mainCommand) {
  case "add":
  case "update":
  case "delete":
  case "mark-in-progress":
  case "mark-done":
    ManageTasks(args[0], args);
    break;
  case "list":
    switch (status) {
      case "done":
      case "todo":
      case "in-progress":
        ListTasks(status);
        break outerSwitch;
      default:
        if (status) {
          //If there is an invalid argument after "list"
          // console.log(`Invalid command: ${args[1]}`); ->forwarded to default
          break;
        } else {
          ListTasks("all");
          break outerSwitch;
        }
    }
  default: //Better troubleshooting response
    if (mainCommand === "list") {
      console.log(`Invalid command: ${args[1]}`);
      console.log(`Your command: ${args[0]} ${args[1]}`);
    } else if (!mainCommand) {
      console.log(`No command entered.`);
      console.log(`Please enter a command after task-cli `);
    } else {
      console.log(`Invalid command: ${args[0]}`);
      console.log(`Your command: ${args[0]}`);
    }
}
