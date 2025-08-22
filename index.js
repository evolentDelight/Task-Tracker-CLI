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

outerSwitch: switch (args[0]) {
  case "add":
  case "update":
  case "delete":
  case "mark-in-progress":
  case "mark-done":
    ManageTasks(args[0], args);
    break;
  case "list":
    switch (args[1]) {
      case "done":
      case "todo":
      case "in-progress":
        ListTasks(args[1]);
        break outerSwitch;
      default:
        if (args[1]) {
          //If there is an invalid argument after "list"
          // console.log(`Invalid command: ${args[1]}`); ->forwarded to default
          break;
        } else {
          ListTasks("all");
          break outerSwitch;
        }
    }
  default: //Better troubleshooting response
    if (args[0] === "list") {
      console.log(`Invalid command: ${args[1]}`);
      console.log(`Your command: ${args[0]} ${args[1]}`);
    } else {
      console.log(`Invalid command: ${args[0]}`);
      console.log(`Your command: ${args[0]}`);
    }
}
