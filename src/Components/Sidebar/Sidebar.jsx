import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navigate = useNavigate()

  const handleNavigate = (link) => {
    navigate(link)
  }

  const sidebarData = [
    {
      id: 1,
      title: "Customer",
      // dropdown_text1: "User Form",
      dropdown_text1: "Customer List",
      dropdown_link: [ '/user/userList'],
    },
    {
      id: 2,
      title: "Staff",
      dropdown_text1: "Staff Form",
      dropdown_text2: "Staff List",
      dropdown_link: ['/staff/staffForm', '/staff/staffList'],
    },
    {
      id: 3,
      title: "Rooms",
      dropdown_text1: "Room Available",
      dropdown_text2: "Room booked",
      dropdown_link: ['/room/roomAvailable', '/room/roomBooked'],
    },
    {
      id: 4,
      title: " Room Booking",
      dropdown_text1: "Check In",
      dropdown_text2: "Check Out",
      dropdown_link: ['/booking/checkIn', '/booking/checkOut'],
    },
    // {
    //   id: 5,
    //   title: "Service",
    //   dropdown_text1: "Service",
    //   dropdown_link: ['/service/allServices'],
    // },
    // {
    //   id: 6,
    //   title: "Inventory",
    //   dropdown_text1: "Store Items",
    //   dropdown_link: ['/inventory/storeInventory'],

    // },
    {
      id: 7,
      title: "Payment",
      dropdown_text1: "Payment Structure",
      dropdown_text2: "Payment Voucher",
      dropdown_link: ['/payment/paymentStructure', '/payment/paymentVoucher'],
      dropdown_style: {
        display: "flex",
      }
    },
    // {
    //   id: 8,
    //   title: "Profile",
    //   dropdown_text1: "Manage Profile",
    //   dropdown_link: ['/profile/manageProfile'],
      
    // },
  ];

  return (
    <div className={styles.Sidebar}>
      {sidebarData.map((e, i) => {
        return (
          <div key={i}>
            <Accordion
              expanded={expanded === i}
              onChange={handleChange(i)}
              className={styles.Mui_drop}
              style={{ color: "#000", borderRadius: 0, boxShadow: 'none'}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ textAlign: "center", fontSize: "22px", fontWeight: 400 }}
              >
                <MdEmail style={{ margin: "auto 5px" }} />
                <p>{e.title}</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.sidebar_dropdown} onClick={()=> handleNavigate(e.dropdown_link[0])}>
                  <span>{e.dropdown_text1}</span>
                </div>
               {
                e.dropdown_text2 ? (
                  <div className={styles.sidebar_dropdown} onClick={()=> handleNavigate(e.dropdown_link[1])}>
                  <span>{e.dropdown_text2}</span>
                </div>
                ):null
               }
                <div style={{display: e.dropdown_style ? '': 'none'}} className={styles.sidebar_dropdown}  onClick={()=> handleNavigate(e.dropdown_link[2])}>
                  <span>{e.dropdown_text3}</span>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;