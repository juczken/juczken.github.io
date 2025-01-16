import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cn from 'clsx';
import styles from './ProductEditForm.module.css';
import Button from '../../../shared/ui/Button/Button';

type ProductEditFormFields = {
  name: string;
  photo: { url: string };
  description?: string;
  price: number;
  oldPrice?: number;
  category: string;
};

type ProductEditFormProps = {
  onSubmit: (data: ProductEditFormFields) => void;
  defaultValues?: ProductEditFormFields;
  categories?: string[];
};

const ProductEditForm: React.FC<ProductEditFormProps> = ({ onSubmit, defaultValues, categories }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn(styles.form)}>
      {/* Name */}
      <div>
        <label className={cn(styles.label)}>{t('ProductEdit.name')}</label>
        <input
          className={cn(styles.input, { [styles.error]: errors.name })}
          type="text"
          {...register('name', { required: t('ProductEdit.errors.nameRequired') })}
          placeholder={t('ProductEdit.namePlaceholder')}
        />
        {typeof errors?.name?.message === 'string' && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      {/* Photos */}
      <div>
        <label className={cn(styles.label)}>{t('ProductEdit.photo')}</label>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <input
            className={cn(styles.input, { [styles.error]: errors.photo })}
            style={{ paddingTop: '20px' }}
            type="text"
            {...register(`photo.url`, {
              required: t('ProductEdit.errors.photosRequired'),
              validate: (value) => value.trim().startsWith('http') || t('ProductEdit.errors.photosInvalid'),
            })}
            placeholder={t('ProductEdit.photoPlaceholder')}
          />
        </div>
        {errors.photo && errors.photo?.url && <p className={styles.error}>{errors.photo?.url?.message}</p>}
      </div>

      {/* Description */}
      <div>
        <label className={cn(styles.label)}>{t('ProductEdit.description')}</label>
        <textarea
          className={cn(styles.textarea)}
          {...register('description')}
          placeholder={t('ProductEdit.descriptionPlaceholder')}
        />
      </div>

      {/* Price */}
      <div>
        <label className={cn(styles.label)}>{t('ProductEdit.price')}</label>
        <input
          className={cn(styles.input, { [styles.error]: errors.price })}
          type="text"
          pattern="^-?\d*(\.\d+)?$"
          {...register('price', {
            required: t('ProductEdit.errors.priceRequired'),
            min: { value: 0, message: t('ProductEdit.errors.priceMin') },
          })}
          placeholder={t('ProductEdit.pricePlaceholder')}
        />
        {errors.price && <p className={styles.error}>{errors.price.message}</p>}
      </div>

      {/* Old Price */}
      <div>
        <label className={cn(styles.label)}>{t('ProductEdit.oldPrice')}</label>
        <input
          className={cn(styles.input, { [styles.error]: errors.oldPrice })}
          type="text"
          pattern="^-?\d*(\.\d+)?$"
          {...register('oldPrice', { min: { value: 0, message: t('ProductEdit.errors.priceMin') } })}
          placeholder={t('ProductEdit.oldPricePlaceholder')}
        />
      </div>

      {/* Category */}
      <div>
        <label className={cn(styles.label)}>{t('ProductEdit.category')}</label>
        <Controller
          control={control}
          name="category"
          rules={{ required: t('ProductEdit.errors.categoryRequired') }}
          render={({ field }) => (
            <select {...field} className={cn(styles.select)}>
              <option value="">{t('ProductEdit.selectCategory')}</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          )}
        />
        {errors.category && <p className={styles.error}>{errors.category.message}</p>}
      </div>

      <Button className={styles.button} lable={t('ProductEdit.button')} type="submit" disabled={false} />
    </form>
  );
};

export default ProductEditForm;
