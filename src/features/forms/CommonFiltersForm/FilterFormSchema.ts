import * as yup from 'yup';

// const dateIntervalSchema = yup.object().shape({
//   gte: yup.string().optional(),
//   lte: yup.string().optional(),
// }).test('date-range-check', 'Начальная дата должна быть меньше конечной', function (value) {
//   if (value?.gte && value?.lte) {
//     return new Date(value.gte) < new Date(value.lte);
//   }
//   return true; // Если одно из значений отсутствует, не проверяем
// });

const dateIntervalSchema = yup.object().shape({
  gte: yup.string().optional(),
  lte: yup
    .string()
    .optional()
    .when('gte', ([gte], schema) =>
      gte
        ? schema.test(
            'date-order',
            'Дата "lte" должна быть больше чем "gte"',
            (lte) => !lte || new Date(gte) < new Date(lte)
          )
        : schema
    ),
});

// Схема для фильтров
export const filterFormSchema = yup.object().shape({
  createdAt: dateIntervalSchema,
  updatedAt: dateIntervalSchema,
  // sorting: yup.object().shape({
  //   type: yup.mixed<'ASC' | 'DESC'>().oneOf(['ASC', 'DESC']).required(),
  //   field: yup.mixed<'id' | 'createdAt' | 'updatedAt' | 'name'>().oneOf(['id', 'createdAt', 'updatedAt', 'name']).required(),
  // }),
});
