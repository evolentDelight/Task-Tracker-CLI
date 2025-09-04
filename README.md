# Task-Tracker-CLI

A Command Line Interface Project to track and manage tasks/todo

# How To Use

## Download NodeJS

For this to work, you must have NodeJS
Download that first. Any version will do

## Download the files and Link the Application

1. Download the files
2. And place them anywhere on your computer
   - If needed, unzip them first before placing them
3. Then, go into the folder containing the files
4. Open up a console, terminal, or Command Line Interface
   - Any CLI will work
     - Git Bash
     - (Not Recommended) Powershell (after allowing script to work)
     - MAC(untested)
     - Linux Terminal
5. Type in `npm link` and Run it/"Press Enter"

## Run the Application

Using the keyword
`task-cli`
You will be able to run the following commands

```
# Add a new task
task-cli add <Description>
task-cli add "Practice coding"
# Output: Task added successfully (ID: <ID>)

# Update task
task-cli update <ID> <New Description>
task-cli update 1 "Complete Leetcode and Codewars"
# Output: Task updated successfully (ID: <ID>)

# Delete task
task-cli delete <ID>
task-cli delete 1
# Output: Task deleted successfully (ID: ID)

# Mark a task as in-progress or done
task-cli <mark status command> <ID>
task-cli mark-in-progress 1
task-cli mark-done 1
# Output: Task status updated successfully (ID: <ID>)

# List all tasks
task-cli list
# Output: Task status updated successfully (ID: <ID>)

# List tasks by status
task-cli list <status>
task-cli list done
task-cli list todo
task-cli list in-progress
# Output: Task status updated successfully (ID: <ID>)
```

## Unlink the Application

1. Go into your folder with the files
2. Open up a console, terminal, or Command Line Interface
3. Type in `npm unlink -g` and Run it/"Press Enter"
4. The uninstallation is complete
