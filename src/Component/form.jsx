function Form({ formlabel }) {
  return (
    <form className="flex flex-col items-center text-left gap-4">
      {formlabel.map((label, index) => (
        <label className="flex  gap-2 items-center " key={index}>
          <span className="text-gray-700 text-[12px] font-medium w-[130px]">
            {label}
          </span>
          {label === "Type" ? (
            <select className="border text-[12px] text-[#858D9D] border-gray-300 rounded-md p-2 w-[273px] focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a type</option>
              <option value="Taking return">Taking return</option>
              <option value="Not taking return">Not taking return</option>
            </select>
          ) : (
            <input
              type="text"
              className="border text-[12px] border-gray-300 rounded-md p-2 w-[273px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={
                label === "Category"
                  ? "Select a category"
                  : `Enter ${label.toLowerCase()}`
              }
            />
          )}
        </label>
      ))}
    </form>
  );
}
export default Form;
