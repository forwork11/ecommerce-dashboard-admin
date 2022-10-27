import React from 'react';
import AppModal from '../../components/AppModal/AppModal';
import { useSelector } from 'react-redux';
import ProductForm from '../forms/ProductForm';

const ProductModal = ({
    loadProducts
}) => {
    const { modal } = useSelector(state => state.product);

    return (
        <AppModal
        content={{
            title: modal.edit ? 'Edit Product' : 'Add Product',
            open: modal.open,
            content: (
              <ProductForm
              loadProducts={loadProducts} />
            )
        }}
        />
    )
};

export default ProductModal;