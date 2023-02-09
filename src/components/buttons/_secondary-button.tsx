export default function SecondaryButton(props: any) {
  const { content, className, ...rest } = props;
  return <button
    type="button"
    className={`transition-all bg-white rounded-md opacity-90 hover:opacity-100 ${className} w-full h-full`}
  >
    <span
      className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600"
    >
      {content}
    </span>
  </button>
}