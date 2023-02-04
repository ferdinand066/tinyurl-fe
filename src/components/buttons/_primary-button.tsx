

export default function PrimaryButton(props: any) {
  const { content, className, ...rest } = props;
  return <button
    type="button"
    className={`transition-all opacity-95 hover:opacity-100 block w-full px-4 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900 ${className}`}
    {...rest}
  >
    {content}
  </button>
}