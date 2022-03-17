<template>
<div style="border-radius: 10px; overflow: hidden; border: 1px #aaa solid;">
  <tiptap-vuetify :value="value" :extensions="extensions" @input="$emit('input', arguments[0])"/>
</div>
</template>
<script>
// import the component and the necessary extensions
import {
TiptapVuetify,
Heading,
Bold,
Italic,
Strike,
Underline,
Code,
Paragraph,
BulletList,
OrderedList,
ListItem,
Link,
Blockquote,
HardBreak,
HorizontalRule,
History
} from "tiptap-vuetify";
export default {
components: { TiptapVuetify },
props: {
value: {
type: String,
default: `
<h3>Your Content is Here!</h3>
<p>Please type something</p>
<p>Your Content Input will auto Stretch</p>`
} },
data: () => ({
extensions: [
History,
Blockquote,
Link,
Underline,
Strike,
Italic,
ListItem,
BulletList,
OrderedList,
[
Heading,
{
options: {
levels: [1, 2, 3]
}
}
],
Bold,
Link,
Code,
HorizontalRule,
Paragraph,
HardBreak
]
})
};
</script>
