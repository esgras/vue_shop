<template>
    <form action="">
        <div class="form-group">
            <label for="productName">Product name</label>
            <input type="text" v-model="product.name" class="form-control" id="productName" maxlength="32" placeholder="Enter product name">
        </div>
        <div class="form-group">
            <label for="productDescription">Product description <small class="text-muted">(optional)</small></label>
            <textarea  class="form-control" id="productDescription" v-model="product.description" rows="3" maxlength="128" placeholder="Enter description"></textarea>
        </div>
        <div class="form-group">
            <label for="price">Price</label>
            <input type="number" v-model="product.price" class="form-control" id="price" placeholder="Enter Price">
        </div>
        <button class="btn btn-primary" type="submit" @click.prevent="onSubmit">{{ cancelShow ? 'Update product' : 'Add Product' }}</button>
        <button type="button" class="btn btn-default" @click="cancelEdit" v-if="cancelShow">Cancel</button>
    </form>
</template>
<script>
    export default {
        props: ['product', 'cancelShow'],
        methods: {
            onSubmit() {
                this.$emit('submit', this.product);
//                this.showCancelButton = false;
            },
            cancelEdit() {
                this.$emit('cancelEdit', this.product);
            }
        }
//        ,
//        computed: {
//            showCancelButton() {
//
//            }
//        }
    }
</script>