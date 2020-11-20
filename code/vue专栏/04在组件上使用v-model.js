// < !--自定义组件支持v - model需要实现内部input的: value和@input-->
// <course v-model="course" @add-course="addCourse" ></course - add >
/**
<!-- 需要实现input的:value和@input -->
<input :value="value" @input="onInput" @keydown.enter="addCourse"/>
props: ['value'],
onInput(e) { this.$emit('input', e.target.value)}


v-model默认转换是:value和@input，如果想要修改这个行为，可以通过定义model选项
Vue.component('course-add', { model: { prop: 'value', event: 'change' } })
*/