const loading = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 border-4 border-neutral-800 border-t-[#ccff00] rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default loading;
