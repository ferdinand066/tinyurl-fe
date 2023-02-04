import FormErrorMessage from "./_form-error-message";

export default function TextInput(props: any) {
  const { setValue, errors, className, label, ...rest } = props;
  const { name, id, register } = rest;

  return <>
    <label htmlFor={ id }>
      {label}
    </label>
    <input
      {...rest}
      {...register}
      onChange={ (e) => setValue(name, e.target.value ) }
      className={`block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900 ` + className}
    />
    {errors && (errors as any)[name] && (
        <FormErrorMessage name={name} errors={errors as any} />
      )}
  </>
}