import Button from "./button";

function Pagination() {
  return (
    <div className="flex justify-between align-bottom items-center my-4 w-full mt-10">
      <Button
        label="Previous"
        onClick={() => {}}
        backgroundColor={"none"}
        textColor={"#5D6679"}
      />
      <span className="mx-2 text-[#5D6679]">1 of 10 pages</span>
      <Button
        label="Next"
        onClick={() => {}}
        backgroundColor={"none"}
        textColor={"#5D6679"}
      />
    </div>
  );
}

export default Pagination;
