import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrorsImpl } from 'react-hook-form';

export type FormErrorMessageData = {
  name: string;
  errors: Partial<FieldErrorsImpl<object>>;
};

export default function FormErrorMessage({
  name,
  errors,
}: FormErrorMessageData) {
  return (
    <div className="flex flex-row gap-0.5 mt-2 text-sm text-red-500 items-center">
      <ExclamationCircleIcon className="w-4 h-4" />
      <ErrorMessage
        errors={errors}
        name={name}
        as={<div className="text-sm"></div>}
      />
    </div>
  );
}
