<script>
export default {
    props: {
        title: String,
        text: String,
        icon: String,
        iconHeight: {
            type: String,
            default: "150px"
        },
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
        class="is-flex is-justify-content width-80vw gap-50"
        :class="{
            'is-flex-direction-row': iconAlign === 'right',
            'is-flex-direction-row-reverse': iconAlign === 'left'
        }"
    >
        <div class="is-flex is-flex-direction-column gap-15">
            <h2 class="title has-text-white">{{ title }}</h2>
            <p class="is-size-6">{{ text }}</p>
        </div>
        <img :src="getIcon(icon)" :style="`width: ${iconHeight};`" />
    </section>
</template>