# Design Document

## Features

- Task lists
- Infinetly nested lists
- Lists color coding
- Lists emoji instead of color code (optional)
- Task due dates
- Task importance level

## Color Scheme

### App colors:

| Name | Color Code |
| --- | --- |
| primary color | #B3FFB3 |
| accent color | #AA4465 |
| background color | #F5F5F5 |
| font color | #000000 |
| inactive color | #AAAAAA |

### Task importance colors:

| Name | Color Code |
| --- | --- |
| task importance 1 | #AD343E |
| task importance 2 | #F2AF29 |
| task importance 3 | #56A3A6 |
| task importance 4 | #AAAAAA |

### List color pallete:

| Name | Color Code |
| --- | --- |
| red | #CE391A |
| tomato | #D74E3F |
| orange | #F59E39 |
| yellow | #EAE647 |
| green | #78CC81 |
| blue | #2D8A86 |
| beige | #E5D291 |
| purple | #421C4B |
| grey | #2A4445 |


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
- Search Overlay
- Task Select Overlay
- Action Panel
  - Date Picker
  - List Picker
  - Importance Picker
- Main-view
  - Task
  - Date Picker
- Menu Overlay
  - List Item
- Settings Overlay

