<template>
    <div class="alert" :class="`alert-${message.type}`" role="alert">
       {{message.value}}
    </div>
</template>

<script>
export default {
  name: "Message",
  props: ['message']
};
</script>

<style scoped>

</style>