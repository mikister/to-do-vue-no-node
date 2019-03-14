# Design Document

## Features

- Task lists
- Infinetly nested lists
- Lists color coding
- Lists emoji instead of color code (optional)
- Task due dates
- Task importance level

## Data Model

Data is organized around two entities:

- **Lists**
- **Tasks**

Lists have the following structure:

- **sub-lists** _(other lists nested within)_
- **tasks** _(tasks contained in a list)_
- **name**
- **color code**
- **emoji** _(optional)_

Tasks have the following structure:

- **name**
- **isChecked**
- **importance**
- **dueDate**

## Vue components hiearchy

- Nav-pane
  - List Item
- Main-view
  - Task
- Settings Panel

