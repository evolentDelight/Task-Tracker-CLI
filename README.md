# Task-Tracker-CLI

[Link to the Project](https://roadmap.sh/projects/task-tracker)

A Command Line Interface Project to track and manage tasks/todo

# How To Use

## Download NodeJS

For this to work, you must have NodeJS.  
First, download NodeJS from their website.

## Download the Main Application Files and Link the Application

1. Download the main application files from this repository
2. And place them anywhere on your computer
   - If needed, unzip them first before placing them
3. Then, go into the folder/directory containing the files
4. Open up a console, terminal, or Command Line Interface in that very folder/directory
   - Git Bash
     - This can be downloaded on Git website
5. Type in `npm link` and Press Enter key

## Run the Application

Open up the console, terminal, or Command Line Interface in any folder/directory.

> [!IMPORTANT]
> When running the program, the program will create two files in the folder/directory that the terminal is at:
>
> - programData.json
> - tasksData.json
>
> To continue using the program with the created tasks or to delete these files, you must remember the folder/directory where you ran the program. And run the terminal program there.
>
> To keep it simple, you should run the application in the same folder/directory where you placed the main application files.

Using the keyword
`task-cli`  
You will be able to run the following commands
&nbsp; &nbsp; The commands are case-insensitive. Thus, you can use any combination of uppercase and lowercase.

- But, it must be add, update, delete, etc.
- E.g. Add, UpDate, Delete would work

```
# Add a new task
task-cli add <Description>(Must be in quote for spacing)
task-cli add "Practice coding"
# Output: Task added successfully (ID: <ID>)

# Update task
task-cli update <ID> <New Description>(Must be in quote for spacing)
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
# Output:
             Task: Practice Coding
          Task ID: 6
      Task Status: todo
Task Created Date: Wed Oct 29 2025 17:58:14 GMT-0700 (Pacific Daylight Time)
Task Updated Date: Never updated

# List tasks by status
task-cli list <status>
task-cli list done
task-cli list todo
task-cli list in-progress
# Output:
             Task: Practice Coding
          Task ID: 6
      Task Status: in-progress
Task Created Date: Wed Oct 29 2025 17:58:14 GMT-0700 (Pacific Daylight Time)
Task Updated Date: Wed Oct 29 2025 17:59:35 GMT-0700 (Pacific Daylight Time)
```

## For Unlinking and Deleting the Application

1. Go into your folder/directory with the main application files(The files downloaded from this repository)
2. Open up a console, terminal, or Command Line Interface in that folder/directory with the main application files
3. Type in `npm unlink -g` and Press Enter key
4. The uninstallation is complete
5. The Main application files can now be deleted
   - If you have ran the program in a different folder/directory, you must go to that folder/directory and delete `programData.json` and `tasksData.json` files
