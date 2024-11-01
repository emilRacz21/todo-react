# To Do App
This is a simple project management app built in React, allowing users to create, view, and manage multiple projects and their associated tasks. 
[Live demo To Do](https://todoapp-er.netlify.app/)
## Features

- **Project Management**: Add, view, and delete projects, each with a title, description, and due date.
- **Task Management**: Add and delete tasks within each project.
- **Toggle Edit Mode**: Switch between viewing and editing projects.
  
## Components Overview

### `App.js`
The main component managing the application state and rendering key components based on user interaction.

- **State Management**:
  - `page`: Tracks the current page or selected project.
  - `toggle`: Toggles between view and edit modes.
  - `tasks`: Stores tasks associated with each project.
  - `addProject`: Stores the list of added projects.
- **Functions**:
  - `handleEdit()`: Toggles edit mode.
  - `pushProject(title, description, dueDate)`: Adds a new project.
  - `handleCreateElements(event)`: Sets the selected project for viewing.
  - `removeEl(index)`: Removes a selected project.

### `EditProject.js`
A form component to create or edit projects with input fields for title, description, and due date.

- **Functionality**:
  - Uses `useRef` to manage form inputs.
  - `send()`: Validates and submits the form, calling `onSet` to update the project list.

### `Home.js`
Displays a welcome message with an option to add a new project if none is selected.

### `ListProjects.js`
Lists all created projects with options to select a project for viewing or add a new one.

- **Functions**:
  - `onClicked()`: Toggles the edit mode.
  - `onAdd()`: Sets the main page view to the default when adding a project.

### `ToDo.js`
Manages tasks within a selected project, with options to add new tasks and delete existing ones.

- **Functionality**:
  - `handleTask()`: Adds a new task to the current project.
  - `removeEl(index)`: Removes a task by index from the selected project.
  
## Folder Structure
 
    src/
    ├── assets/
    │   └── no-projects.png         # Image displayed when no project is selected
    ├── components/
    │   ├── App.js                  # Main application component
    │   ├── EditProject.js          # Component to add/edit a project
    │   ├── Home.js                 # Home view with "no project selected" message
    │   ├── ListProjects.js         # Displays list of all projects
    │   └── ToDo.js                 # Manages tasks within a selected project
    ├── App.css                     # Main styling for App component
    └── index.js                    # Entry point for React app

## How to Use
- On the home screen, click on Create new project to open the edit form.
- Fill in the title, description, and due date, then click Save.
- Projects are listed on the sidebar.
- Click on a project to view its details and manage tasks.
- Use the Input new task field to add tasks.
- Each task has a Delete button for removal.

## Design

![todo](https://github.com/user-attachments/assets/11e0e169-a6f9-4414-91ea-32e78c970938)


## License
This project is licensed under the MIT License.
