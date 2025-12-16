import Button from "./button";
function Logout({ setLogout }) {
  return (
    <div className="modal flex items-center justify-center flex-col bg-white p-15 rounded ">
      <h1 className="header1">Confirm Logout</h1>
      <p className="header1">Are you sure you want to logout?</p>
      <div className="flex justify-between gap-8 mt-4">
        <Button
          label="Cancel"
          textColor={"#383E49"}
          backgroundColor={"none"}
          onClick={() => {
            alert("Cancelled!");
            setLogout(false);
          }}
        />
        <Button
          label="Logout"
          textColor={"white"}
          backgroundColor={"red"}
          onClick={() => alert("Logged out!")}
        />
      </div>
    </div>
  );
}

export default Logout;
