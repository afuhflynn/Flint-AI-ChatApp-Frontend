const ErrorPanel: React.FC<{ error: string }> = ({ error }) => {
  return (
    <div className="flex flex-row items-center w-full h-auto my-4 bg-neutral-dark-grey-light dark:bg-neutral-dark-grey-dark border-slate-300 border-[1px] border-opacity-10 dark:border-opacity-20 rounded-md p-2">
      <p className="text-red-500 text-muted-text">
        <span className="font-semibold">Please fix the problem!:</span>
        <br />
        <span className="text-center">{error}</span>
        <br />
        <span className="py-2 font-semibold">And then try again.</span>
      </p>
    </div>
  );
};

export default ErrorPanel;
