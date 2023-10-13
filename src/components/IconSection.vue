<script>
export default {
    props: {
        title: String,
        text: String,
        icon: String,
        iconAlign: {
            type: String,
            default: "right"
        }
    },
    methods: {
        getIcon(icon) {
            const images = require.context('../assets/img/icons/', false, /\.svg$/)
            return images('./' + icon + ".svg")
        }
    }
};
</script>

<template>
    <section
        class="is-flex width-70vw gap-100"
        :class="{
            'is-flex-direction-row': iconAlign === 'right',
            'is-flex-direction-row-reverse': iconAlign === 'left'
        }"
    >
        <div class="is-flex is-flex-direction-column gap-15">
            <h2 class="title has-text-gold">{{ title }}</h2>
            <p class="is-size-6">{{ text }}</p>
        </div>
        <div>
            <img :src="getIcon(icon)" class="height-200" />
        </div>
    </section>
</template>