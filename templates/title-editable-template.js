const TitleEditableTemplate = `
<var 
    @click="isEditing = true"
    :class="{ 'main-view__title--extra-margin': !isEditing }"
    v-on:keyup="onKeyEscape"
>

<input
    v-if="isEditing" 
    type="text" 
    class="input" 
    v-model.trim="value"
    @value="this.value"
    @blur="isEditing = false"
    @change="onTitleChange"
>

<span v-else>{{ value }}</span>

</var>`

export { TitleEditableTemplate }