import { useLocation, useNavigate } from "react-router-dom";
import ListElement from "../Component/List";
import {
  ShoppingCart,
  House,
  ClipboardPlus,
  CircleUser,
  BringToFront,
  SquareKanban,
  Settings,
  Power,
} from "lucide-react";
import { useState } from "react";
import Logout from "../Component/Logout";
import Overlay from "../Component/overlay";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const [logout, setLogout] = useState(false);
  return (
    <aside className="sidebar ">
      <div className="flex flex-col gap-15">
        <div className="flex  justify-center ">
          <img src="/Logo (2).png" />
        </div>

        <ul className="flex flex-col gap-6 ">
          <ListElement
            onclick={() => navigate("dashboard")}
            name={"Dashboard"}
            icon={<House className="w-5" />}
            path={location.pathname == "/home/dashboard"}
          />
          <ListElement
            name={"Inventory"}
            icon={<ShoppingCart className="w-5" />}
            onclick={() => navigate("inventory")}
            path={location.pathname == "/home/inventory"}
          />
          <ListElement
            name={"Reports"}
            icon={<ClipboardPlus className="w-5" />}
            onclick={() => navigate("reports")}
            path={location.pathname == "/home/reports"}
          />
          <ListElement
            name={"Suppliers"}
            icon={<CircleUser className="w-5" />}
            onclick={() => navigate("suppliers")}
            path={location.pathname == "/home/suppliers"}
          />
          <ListElement
            name={"Orders"}
            icon={<BringToFront className="w-5" />}
            onclick={() => navigate("orders")}
            path={location.pathname == "/home/orders"}
          />
          <ListElement
            name={"Manage store"}
            icon={<SquareKanban className="w-5" />}
            onclick={() => navigate("managestore")}
            path={location.pathname == "/home/managestore"}
          />
        </ul>
      </div>

      <div>
        <ul>
          <ListElement name={"Settings"} icon={<Settings className="w-5" />} />
          <ListElement
            name={"Log Out"}
            icon={<Power className="w-5" />}
            onclick={() => setLogout(!logout)}
          />
        </ul>
      </div>

      {logout && <Logout setLogout={setLogout} />}
      {logout && <Overlay />}
    </aside>
  );
}

export default Sidebar;
