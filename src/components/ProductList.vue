<template>
    <table class="table table-hover product-list">
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products" tracked-by="id" @click.prevent="onEdit(product)">
            <td>{{product.name}}</td>
            <td>{{product.description}}</td>
            <td>{{product.price}}:-</td>
            <td><a href="#" @click.prevent.stop="onRemove(product.id)">remove</a></td>
        </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        props: ['products'],
        methods: {
            onEdit(product) {
                this.$emit('edit', product);
            },
            onRemove(id) {
                this.$emit('remove', id);
            }
        }
    }
</script>
<style scoped>
    .header {
        font-size: 4rem;
    }
</style>