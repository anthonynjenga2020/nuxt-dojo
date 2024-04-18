<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Sequi ullam repellendus qui exercitationem maxime eius ab minima veritatis fuga nisi.</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>