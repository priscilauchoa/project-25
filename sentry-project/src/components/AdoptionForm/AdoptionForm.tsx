import React from 'react';
import { useForm } from 'react-hook-form';
import * as Sentry from "@sentry/react";

interface AdoptionFormProps {
  name: string;
  email: string;
}

const AdoptionForm: React.FC = () => {
  const { register, handleSubmit } = useForm<AdoptionFormProps>();

  const onSubmit = (data: AdoptionFormProps) => {
    alert(`Name: ${data.name}\nEmail: ${data.email}`);
    Sentry.captureException(new Error("3 - FORM error!"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Name:
          <input
            type="text"
            {...register('name', { required: true })}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            {...register('email', { required: true })}
          />
        </label>
      </div>
      <button type="submit">Submit</button>

    </form>
  );
};

export default AdoptionForm;
