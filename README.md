# TodoList
This is app for a todo list in Express and React using Redux 
While running locally: (http://localhost:5000)


## User Stories

- **Signup:** As an anon I can sign up in the platform so that I can start using the todos.
- **Login:** As a user I can login to the platform so that I can see todos.
- **Logout:** As a user I can logout from the platform so no one else can use it.
- **Add Task** As a user I can add a Task item to list. 
- **Edit Task** As a user I can modify Task.
- **Delete Task** As a user I can delete a Task item to list.


### NPM Dependencies
- [React](https://reactjs.org/) A JavaScript library for building user interfaces.
- [axios](https://www.npmjs.com/package/axios) is a promise based HTTP client for the browser and node.js.
- [redux](https://www.npmjs.com/package/redux) is a predictable state container for JavaScript apps.
- [react-redux](https://www.npmjs.com/package/react-redux) is a React bindings for Redux.
- [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension) is a debugging platform for Redux apps.
- [sweetalert2](https://sweetalert2.github.io/) A Beautiful, Responsive, Customizable, Accessible (Wai-aria) Replacement For Javascript's Popup Boxes.


## Router Routes (React App)
| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | SplashPage           | public `<Route>`           | Home page                                                    |
| `//resgister`    | SignupPage           | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup|
| `/login`         | LoginPage            | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login |
|  `/taskdelet/id` |  delete task         |                            |                                                              |
| `/tasks`         |ShowAllTasksForTheUser| user only `<PrivateRoute>` | Edits a exit                                           |
| `/task`          | add a task           | user only `<PrivateRoute>` | Details of a exit  to edit                             |
|`/tasksupdeta/id` | Editing the task     | user only `<PrivateRoute>` | Delete exit                                            |


## components
- **login**
- **register**
- **task**