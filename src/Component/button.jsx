function Button({ label, onClick, backgroundColor, textColor, icon }) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        border: backgroundColor === "none" ? "1px solid #D0D3D9" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className=" py-2 px-4 rounded font-medium text-[14px] hover:opacity-90"
      onClick={onClick}
    >
      {icon && <span className="mr-2 inline-flex w-3">{icon}</span>}
      <span className="inline-flex">{label}</span>
    </button>
  );
}

export default Button;
