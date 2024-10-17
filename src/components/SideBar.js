


// import React, { useState, useEffect } from 'react';
// import '../css/SideBar.css';

// const Sidebar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isSidebarActive, setIsSidebarActive] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setIsSidebarActive(true);
//     }, 100); 
//   }, []);

//   return (
//     <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
//       <div className="sidebar-header">
//         <h2>Transaction Menu</h2>
//       </div>
//       <nav className="sidebar-menu">
//         <div className="menu-item" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
//           <i className="fas fa-file-alt"></i> Reports
//           <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'}`} style={{ marginLeft: '10px' }}></i>
//         </div>

//         {isDropdownOpen && (
//           <div className="dropdown-menu">
//             <a href="#transaction-history" className="dropdown-item">Transaction History Report</a>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;




// import React, { useState, useEffect } from 'react';
// import '../css/SideBar.css';

// const Sidebar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isSidebarActive, setIsSidebarActive] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setIsSidebarActive(true);
//     }, 100); 
//   }, []);

//   return (
//     <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
//       <div className="sidebar-header">
//         <h2>Transaction Menu</h2>
//       </div>
//       <nav className="sidebar-menu">
//         <div className="menu-item" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
//           <i className="fas fa-file-alt"></i> Reports
//           <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'}`} style={{ marginLeft: '10px' }}></i>
//           {isDropdownOpen && (
//             <div className="dropdown-menu">
//               <a href="#transaction-history" className="dropdown-item">Transaction History Report</a>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState, useEffect } from 'react';
import '../css/SideBar.css';
import "../css/DropDown.css"
const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSidebarActive(true);
    }, 100);
  }, []);

  return (
    <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
      <div className="sidebar-header">
        <h2>Transaction Menu</h2>
      </div>
      <nav className="sidebar-menu">
        <div className="menu-item" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
          <i className="fas fa-file-alt"></i> Reports
          <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'}`} style={{ marginLeft: '10px' }}></i>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {/* Transaction Reports Link */}
            <a href="#transaction-reports" className="dropdown-item">Transaction Reports</a>
            
            {/* Transaction History Report Link */}
            <a href="#transaction-history" className="dropdown-item">Transaction History Report</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;


