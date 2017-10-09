<template>
    <section>
        <save-product-form :product="productInForm" @submit="onFormSave"  @cancelEdit="cancelEdit" :cancelShow="showCancelButton"></save-product-form>
        <product-list :products="products" @edit="onEditClicked"  @remove="remove"></product-list>
    </section>
</template>
<script>
    import ProductList from './ProductList.vue'
    import SaveProductForm from './SaveProductForm.vue'
    import uuid from 'uuid'

    const initialData = () => {
        return {
            productInForm: {
                id: null,
                name: '',
                description: '',
                price: null
            },
            showCancelButton: false,
            products: [
                {
                    id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
                    name: 'COBOL 101 vintage',
                    description: 'Learn COBOL with this vintage programming book',
                    price: 399
                },
                {
                    id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
                    name: 'Sharp C2719 curved TV',
                    description: 'Watch TV like never before with the brand new curved screen technology',
                    price: 1995
                },
                {
                    id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
                    name: 'Remmington X mechanical keyboard',
                    description: 'Excellent for gaming and typing, this Remmington X keyboard ' +
                    'features tactile, clicky switches for speed and accuracy',
                    price: 595
                }
            ]
        }
    };

    export default {
        methods: {
            onFormSave(product) {
                let index = this.products.findIndex(prod => prod.id == product.id);
                if (index !== -1) {
                    this.products.splice(index, 1, product);
                } else {
                    product.id = uuid.v4();
                    this.products.push(product);
                }
                this.resetProductInform();
            },
            resetProductInform() {
                this.productInForm = initialData().productInForm;
            },
            onEditClicked(product) {
                this.productInForm = Object.assign({}, product);
                this.showCancelButton = true;
            },
            cancelEdit(product) {
                this.resetProductInform();
                this.showCancelButton = false;
            },
            remove(id) {
                let index = this.products.findIndex(product => product.id === id);

                this.products.splice(index, 1);
                if (id === this.productInForm.id) {
                    this.resetProductInform();
                }
            }
        },
        data: initialData,
        components: {
            SaveProductForm,
            ProductList
        }
    }
</script>