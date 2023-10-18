// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import "./MobileNav";
// import phto from '../About/first look logo.png'

// export default function TemporaryDrawer({ open, anchor, setDrawer }) {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   React.useEffect(() => {
//     setState((prevState) => ({ ...prevState, [anchor]: open }));
//   }, [open, anchor]);

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//     if (!open) {
//       setTimeout(() => {
//         setDrawer(false);
//       }, 150);
//     }
//   };

//   // Define an array with text and corresponding URLs
//   const links = [
//     { text: "EVENTS", url: "/events" },
//     { text: "ABOUT US", url: "/#about" },
//     { text: "CONTACT US", url: "/contact" },
//     { text: "SIGN IN", url: "/signin" },
//   ];

//   return (
//     <div>
//       <React.Fragment>
//         <div className="container bg-black mobnav" style={{background: "black"}}>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             style={{
//               borderRadius: "50px",
//               background:"black"
//             }}
//           >
//             <Box
//               sx={{
//                 width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
//               }}
//               role="presentation"
//               onClick={toggleDrawer(anchor, false)}
//               onKeyDown={toggleDrawer(anchor, false)}
//             >
//               <img
//                 src="/web2.png"
//                 alt="png"
//                 className="spiderweb"
//                 style={{
//                   width: "auto",
//                   height: "100px",
//                   position: "relative",
//                   top: "0",
//                   left: "0",
//                 }}
//               />
//               <List>
//                 {links.map((link, index) => (
//                   <ListItem key={link.text} disablePadding>
//                     <ListItemButton>
//                       <a href={link.url} style={{color:"black"}}>
//                         <ListItemText primary={link.text} />
//                       </a>
//                     </ListItemButton>
//                   </ListItem>
//                 ))}
//               </List>
//               <Divider />
//             </Box>
//           </Drawer>
//         </div>
//       </React.Fragment>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./MobileNav.css";
const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const drawerStyles = {
    background: "black",
    color: "white",
    display: "flex",
    width:'60%',
  };
  return (
    <>
      <Button
        onClick={showDrawer}
        className="mob-ant-nav"
        style={{
          color: "#08c",
          background: "none",
          padding: "20px ",
          border: "none",
        }}
      >
        <MenuOutlined
          style={{ fontSize: "32px", color: "white", background: "none" }}
        />
      </Button>
      <Drawer
        className="mob-ant-nav"
        title="Basic Drawer"
        placement="left"
        onClose={onClose}
        open={open}
        style={drawerStyles}
      >
        <img src="/web2.png" alt="web" className="spiderweb" />
        <div className="navv">
          <Link className="linkitem" to="/">
            Home
          </Link>
          <Link className="linkitem" to="/events">
            Events
          </Link>
          <Link className="linkitem" to="/contact">
            Contact Us
          </Link>
          <Link className="linkitem" to="/aboutUs">
            About Us
          </Link>
        </div>
      </Drawer>
    </>
  );
};
export default TemporaryDrawer;
