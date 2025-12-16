import Button from "./button";
import Store from "./Store";

function ManageStore() {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <h1 className="text-[20px] font-medium mb-4 header1 text-[#383E49]">
          Manage Store
        </h1>
        <Button
          label={"Add Store"}
          textColor={"white"}
          backgroundColor={"blue"}
        />
      </div>
      <div>
        <Store
          branchName={"Singanallur Branch"}
          storeName={"Lisy Store"}
          streetName={"1A/Krishnarajapuram, 3 rd street sulur"}
          address={"Coimbatore - 6313403"}
          number={"044-653578"}
        />
        <Store
          branchName={"Singanallur Branch"}
          storeName={"Lisy Store"}
          streetName={"1A/Krishnarajapuram, 3 rd street sulur"}
          address={"Coimbatore - 6313403"}
          number={"044-653578"}
        />
        <Store
          branchName={"Singanallur Branch"}
          storeName={"Lisy Store"}
          streetName={"1A/Krishnarajapuram, 3 rd street sulur"}
          address={"Coimbatore - 6313403"}
          number={"044-653578"}
        />
      </div>
    </div>
  );
}

export default ManageStore;
