import FormErrorMessage from './_form-error-message'

export default function TextInput(props: any) {
  const { setValue, errors, className, label, prefix, onChange, ...rest } = props
  const { name, id, register } = rest

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className={`mt-1 sm:mt-0${prefix ? ' sm:col-span-2' : ''}`}>
        <div className="flex rounded-md shadow-sm">
          {prefix && (
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              {prefix}
            </span>
          )}
          <input
            {...rest}
            {...register}
            onChange={(e) => {
              setValue(name, e.target.value);
              if (!onChange) return;
              onChange(e)
            }}
            className={
              `flex-1 block w-full focus:ring-cyan-500 focus:border-cyan-500 min-w-0 sm:text-sm border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-offset-gray-900 ${
                prefix
                  ? 'rounded-r-md'
                  : 'rounded-md focus:ring-offset-2 focus:ring-offset-gray-900'
              } ` + className
            }
          />
        </div>
      </div>
      {errors && (errors as any)[name] && (
        <FormErrorMessage name={name} errors={errors as any} />
      )}
    </>
  )
}
