import { CommonFiltersForm } from 'src/features/forms/CommonFiltersForm/CommonFiltersForm';
import { ProductsFilters } from 'src/shared/types/serverTypes';
import React from 'react';
import { productFilterSchema } from 'src/entities/Product/model/ProductFilterSchema';

type CatalogFiltersFormProps = {
  // filters:ProductsFilters;
  initialFilters: ProductsFilters;
  // childrenSchema: yup.ObjectSchema<Omit<ProductsFilters, keyof CommonFilters>>;
  onChange: (filters: ProductsFilters) => void;
};
const CatalogFiltersForm = ({ initialFilters, onChange }: CatalogFiltersFormProps) => {
  // const CatalogFiltersForm = ({initialFilters, childrenSchema, onChange}:CatalogFiltersFormProps) =>{

  return (
    <CommonFiltersForm
      initialFilters={initialFilters}
      childrenSchema={productFilterSchema}
      onChange={onChange}
    ></CommonFiltersForm>
  );
};

export default CatalogFiltersForm;
