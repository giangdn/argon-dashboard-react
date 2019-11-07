import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
import VendorManager from "views/examples/VendorManager.jsx";
import NewSupplier from "./views/examples/NewSupplier";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/vendors",
    name: "Manage Supplier",
    icon: "fas fa-handshake text-blue",
    component: VendorManager,
    layout: "/admin"
  },
  {
    path: "/vendors",
    name: "All Suppliers",
    icon: "fa fa-th text-info",
    component: VendorManager,
    badge: 280,
    layout: "/admin",
    isSub: true
  },
  {
    path: "/new-supplier",
    name: "Create New Supplier",
    icon: "fa fa-plus text-info",
    component: NewSupplier,
    layout: "/admin",
    isSub: true
  },
  // {
  //   path: "/vendors",
  //   name: "Invite New Supplier",
  //   icon: "fa fa-envelope-open text-info",
  //   component: VendorManager,
  //   layout: "/admin",
  //   isSub: true
  // },
  {
    path: "/vendors",
    name: "Rate Card",
    icon: "fa fa-star text-info",
    component: VendorManager,
    layout: "/admin",
    isSub: true
  },
  {
    path: "/vendors",
    name: "Evaluation",
    icon: "fa fa-poll-h text-info",
    component: VendorManager,
    layout: "/admin",
    isSub: true
  },
  {
    path: "/maps",
    name: "Procurement",
    icon: "fa fa-shopping-basket text-blue",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Invoice Authorization",
    icon: "fa fa-file-invoice-dollar text-blue",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Strategic Sourcing",
    icon: "fa fa-coins text-blue",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Manage Asset",
    icon: "fa fa-boxes text-blue",
    component: Tables,
    layout: "/admin"
  }
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
