# Task-Tracker-CLI

A Command Line Interface Project to track and manage tasks/todo

# How To Use

## Download NodeJS

For this to work, you must have NodeJS.  
First, download NodeJS from their website.

## Download the files and Link the Application

1. Download the files
2. And place them anywhere on your computer
   - If needed, unzip them first before placing them
3. Then, go into the folder containing the files
4. Open up a console, terminal, or Command Line Interface
   - Git Bash
     - This can be downloaded on Git website
5. Type in `npm link` and Press Enter key

## Run the Application

Open up the console, terminal, or Command Line Interface in any folder/directory.

> [!IMPORTANT]
> When running the program, the program will create two files in the folder/directory that the terminal is at:
>
> - programData.json
> - taskData.json
>
> To continue using the program with the created tasks or to delete these files, you must remember the folder/directory where you ran the program. And run the terminal program there.

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

## Delete/Unlink the Application

1. Go into your folder/directory with the main application files(The files downloaded from this repository)
2. Open up a console, terminal, or Command Line Interface in that folder/directory with the main application files
3. Type in `npm unlink -g` and Press Enter key
4. The uninstallation is complete
5. The Main application files can now be deleted
   - If you have ran the program in a different folder/directory, you must go to that folder/directory and delete `programData.json` and `tasksData.json` files
