const loading = () => {
  return (
    <div className="bg-[#121212] text-white min-h-70 flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-3">
       <div className="flex w-64 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>  
      </div>
    </div>
  );
};

export default loading;
