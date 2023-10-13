<script>
export default {
    props: {
        title: String,
        text: String,
        icon: String,
        iconHeight: {
            type: String,
            default: "100px"
        },
        iconAlign: {
            type: String,
            default: "right"
        }
    },
    
};
</script>

<template>
    <div class="is-flex is-flex-direction-column gap-15">
        <h2 class="title has-text-white">{{ title }}</h2>
        <p class="is-size-6">{{ text }}</p>
    </div>
</template>