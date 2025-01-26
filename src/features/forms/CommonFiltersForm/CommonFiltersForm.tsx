import React, { ReactNode, useState } from 'react';
import * as yup from 'yup';
import cn from 'clsx';
import { filterFormSchema } from './FilterFormSchema';
import styles from './FilterForm.module.css';
import { CommonFilters, Sorting } from '../../../shared/types/serverTypes';

interface CommonFilterFormProps<T extends CommonFilters> {
  filters: T;
  onChange: (filters: T) => void;
  initialFilters: T;
  children?: ReactNode;
}

export const CommonFilterForm = <T extends CommonFilters>({
  filters,
  onChange,
  initialFilters,
  children,
}: CommonFilterFormProps<T>) => {
  const [localFilters, setLocalFilters] = useState<T>(initialFilters);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = <K extends keyof T>(key: K, value: T[K]) => {
    setLocalFilters({ ...localFilters, [key]: value });
  };

  const handleReset = () => {
    setErrors({});
    setLocalFilters(initialFilters);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    filterFormSchema
      .validate(localFilters, { abortEarly: false })
      .then(() => {
        onChange(localFilters);
      })
      .catch((err) => {
        console.error('Ошибки валидации:', err.errors);
        console.log('Ошибки валидации:', err);
        if (err instanceof yup.ValidationError) {
          const validationErrors: Record<string, string> = {};

          // Обходим все ошибки и сохраняем их в виде 'field.subfield'
          err.inner.forEach((error) => {
            if (error.path) {
              validationErrors[error.path] = error.message;
            }
          });
          setErrors(validationErrors);
        }
      });
  };

  return (
    <form className={cn(styles.form)} onSubmit={handleSubmit}>
      <div>
        <label className={cn(styles.label)}>Created At:</label>
        <input
          className={cn(styles.input)}
          type="datetime-local"
          value={localFilters?.createdAt?.gte || ''}
          onChange={(e) =>
            handleChange('createdAt', {
              ...localFilters?.createdAt,
              gte: e.target.value,
            })
          }
        />
        <input
          className={cn(styles.input)}
          type="datetime-local"
          value={localFilters?.createdAt?.lte || ''}
          onChange={(e) =>
            handleChange('createdAt', {
              ...localFilters?.createdAt,
              lte: e.target.value,
            })
          }
        />
        {errors['createdAt.lte'] && <p className={cn(styles.error)}>{errors['createdAt.lte']}</p>}
      </div>

      <div>
        <label className={cn(styles.label)}>Updated At:</label>
        <input
          className={cn(styles.input)}
          type="datetime-local"
          value={localFilters?.updatedAt?.gte || ''}
          onChange={(e) =>
            handleChange('updatedAt', {
              ...localFilters?.updatedAt,
              gte: e.target.value,
            })
          }
        />
        <input
          className={cn(styles.input)}
          type="datetime-local"
          value={localFilters?.updatedAt?.lte || ''}
          onChange={(e) =>
            handleChange('updatedAt', {
              ...localFilters?.updatedAt,
              lte: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className={cn(styles.label)}>Sorting:</label>
        <select
          className={cn(styles.select)}
          value={filters.sorting?.field || ''}
          onChange={(e) =>
            handleChange(
              'sorting',
              e.target.value
                ? {
                    field: e.target.value as Sorting['field'],
                    type: filters.sorting?.type || 'ASC',
                  }
                : undefined
            )
          }
        >
          <option value="">No sorting</option>
          <option value="id">ID</option>
          <option value="createdAt">Created At</option>
          <option value="updatedAt">Updated At</option>
          <option value="name">Name</option>
        </select>
        <select
          className={cn(styles.select)}
          value={localFilters?.sorting?.type || 'ASC'}
          onChange={(e) =>
            handleChange('sorting', {
              field: localFilters?.sorting?.field || 'id',
              type: e.target.value as 'ASC' | 'DESC',
            })
          }
        >
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </div>

      {children}

      <button className={cn(styles.button)} type="button" onClick={handleReset}>
        Сбросить фильтры
      </button>
      <button className={cn(styles.button)} type="submit">
        Применить фильтры
      </button>
    </form>
  );
};
