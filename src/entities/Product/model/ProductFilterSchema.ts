import * as yup from 'yup';
import { CommonFilters, ProductsFilters } from '../../../shared/types/serverTypes';

const productFilterSchema: yup.ObjectSchema<Omit<ProductsFilters, keyof CommonFilters>> = yup.object({
  name: yup.string().optional(),
  ids: yup
    .array()
    .of(yup.string())
    .optional()
    .test('non-empty', 'IDs cannot be empty', (value) => !value || value.length > 0),
  categoryIds: yup
    .array()
    .of(yup.string())
    .optional()
    .test('non-empty', 'Category IDs cannot be empty', (value) => !value || value.length > 0),
});
