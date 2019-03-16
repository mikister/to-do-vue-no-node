<style>
    .color-swatch {
        width: 10px;
        height: 10px;
        display: inline-block;
        border: 1px solid gray;
    }
</style>

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
| primary color | <span class="color-swatch" style="background-color: #B3FFB3;"></span> #B3FFB3 |
| accent color | <span class="color-swatch" style="background-color: #AA4465;"></span> #AA4465 |
| background color | <span class="color-swatch" style="background-color: #F5F5F5;"></span> #F5F5F5 |
| font color | <span class="color-swatch" style="background-color: #000000;"></span> #000000 |
| inactive color | <span class="color-swatch" style="background-color: #AAAAAA;"></span> #AAAAAA |

### Task importance colors:

| Name | Color Code |
| --- | --- |
| task importance 1 | <span class="color-swatch" style="background-color: #AD343E;"></span> #AD343E |
| task importance 2 | <span class="color-swatch" style="background-color: #F2AF29;"></span> #F2AF29 |
| task importance 3 | <span class="color-swatch" style="background-color: #56A3A6;"></span> #56A3A6 |
| task importance 4 | <span class="color-swatch" style="background-color: #AAAAAA;"></span> #AAAAAA |

### List color pallete:

| Name | Color Code |
| --- | --- |
| red | <span class="color-swatch" style="background-color: #CE391A;"></span> #CE391A |
| tomato | <span class="color-swatch" style="background-color: #D74E3F;"></span> #D74E3F |
| orange | <span class="color-swatch" style="background-color: #F59E39;"></span> #F59E39 |
| yellow | <span class="color-swatch" style="background-color: #EAE647;"></span> #EAE647 |
| green | <span class="color-swatch" style="background-color: #78CC81;"></span> #78CC81 |
| blue | <span class="color-swatch" style="background-color: #2D8A86;"></span> #2D8A86 |
| beige | <span class="color-swatch" style="background-color: #E5D291;"></span> #E5D291 |
| purple | <span class="color-swatch" style="background-color: #421C4B;"></span> #421C4B |
| grey | <span class="color-swatch" style="background-color: #2A4445;"></span> #2A4445 |


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
  - Date Picker
- Settings Panel

