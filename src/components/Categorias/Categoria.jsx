import React from 'react';
import { CardCategoria, CardCategoriaImg } from './CategoriasStyles';
import { useDispatch, useSelector } from 'react-redux';
import * as categoriesActions from '../../redux/categories/categories-actions';

export const Categoria = ({ category, img }) => {
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  return (
    <a href="#sneakers">
      <CardCategoria
        selected={category === selectedCategory}
        onClick={() => dispatch(categoriesActions.selectCategory(category))}
        whileTap={{ scale: 0.95 }}
      >
        <CardCategoriaImg src={img} alt="" />
      </CardCategoria>
    </a>
  );
};
