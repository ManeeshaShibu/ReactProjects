import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbarLink,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import heroJoinee from "../recoil/atom/HeroJoinee";
import newJoiners from "../recoil/atom/NewJoiners";
import { Button } from "react-bootstrap";
import Layout from "../recoil/atom/Layout";


function Navbar() {
  const [selectedJoinee, setSelectedJoinee] = useRecoilState(heroJoinee);
  const [newJoinees, setNewJoinees] = useRecoilState(newJoiners);
  const [selectedLayout, setLayout] = useRecoilState(Layout);
 
  const handleJoineeChange = (key) => {
    setSelectedJoinee(newJoinees[key]);
  };

  const handleNumberClick = (number) => {
    setLayout(number);
  };

  return (
    <MDBNavbar expand="lg" Color="#a46da6">
      <MDBContainer fluid>
        <MDBNavbarNav className="d-flex flex-row w-100">
          <MDBNavbarItem className="me-3 w-100 me-lg-0">
            <MDBDropdown className="d-flex  ml-auto justify-content-between ">
              <MDBDropdownToggle tag="a" className="nav-link">
                <FontAwesomeIcon icon={faUsers} />
              </MDBDropdownToggle>
              <div className="ms-auto justify-content-end number-icons">
                <MDBNavbarBrand
                  href="#"
                  className={`me-1 number ${
                    selectedLayout === "1" ? "selected" : ""
                  }`}
                  onClick={() => handleNumberClick("1")}
                >
                  <input type="radio" name="number" />
                  1&nbsp;&nbsp;
                </MDBNavbarBrand>
                <MDBNavbarBrand
                  href="#"
                  className={`me-1 number ${
                    selectedLayout === "2" ? "selected" : ""
                  }`}
                  onClick={() => handleNumberClick("2")}
                >
                  <input type="radio" name="number" />
                  2&nbsp;&nbsp;
                </MDBNavbarBrand>
                <MDBNavbarBrand
                  href="#"
                  className={`me-1 number ${
                    selectedLayout === "3" ? "selected" : ""
                  }`}
                  onClick={() => handleNumberClick("3")}
                >
                  <input type="radio" name="number" />
                  3&nbsp;&nbsp;
                </MDBNavbarBrand>
              </div>
              <MDBDropdownMenu>
                <MDBDropdownItem></MDBDropdownItem>
                <MDBDropdownItem>
                  {newJoinees.map((joinee, index) => (
                    <Button
                      onClick={() => {
                        handleJoineeChange(index);
                      }}
                      key={index}
                      className="dropdown-item"
                    >
                      {joinee.name}
                    </Button>
                  ))}
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBNavbarLink href="/EmployeeForm">EmployeeForm</MDBNavbarLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
