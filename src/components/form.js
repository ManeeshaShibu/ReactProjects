import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Col, Form } from "react-bootstrap";
import { addNewJoinee, addProfilePicture, fetchIBUs } from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function EmployeeForm() {
  const [selectedIBU, setSelectedIBU] = useState(null);
  const [validated, setValidated] = useState(false);
  const [IBUs, setIBUs] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function getIBUs() {
      fetchIBUs().then((data) => setIBUs(data));
    }

    getIBUs();
  }, []);

  const handleDropdownSelect = (value) => {
    setSelectedIBU(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const data = {
        id: form["id"].value,
        name: form["name"].value,
        hometown: form["hometown"].value,
        role: form["role"].value,
        education: form["education"].value,
        experience: form["experience"].value,
        hobby: form["hobbies"].value,
        contactNumber: form["number"].value,
        contactEmail: form["email"].value,
        altProfession: form["altProfession"].value,
        quote: form["quote"].value,
        coreSkills: form["coreSkills"].value,
        manager: form["manager"].value,
        ibu: {
          id: form["ibu"].value,
        },
      };
      const imageData = new FormData();
      imageData.append("id", form["id"].value);
      imageData.append("image", form["idProfilePicture"].files[0]);
      addProfilePicture(imageData).then(() => {
        console.log("New Photo Added");
      });
      console.log(data);
      addNewJoinee(data).then(() => {
        console.log("New Joinee Added");
      });
      navigate("/Home");
    }
    setValidated(true);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-4 pt-5 gradient-form">
      <h2>New Joinee Form</h2>
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        className="row container-lg d-flex flex-column gap-3 align-items-center mt-3"
      >
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            min="0"
            type="number"
            placeholder="ID"
            name="id"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control required type="text" placeholder="Name" name="name" />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            type="text"
            placeholder="Hometown"
            name="hometown"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control required type="text" placeholder="Role" name="role" />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            type="text"
            placeholder="Education"
            name="education"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            type="text"
            placeholder="Experience"
            name="experience"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            type="text"
            placeholder="Hobbies"
            name="hobbies"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            type="tel"
            placeholder="Contact Number"
            name="number"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            type="email"
            placeholder="Contact Email"
            name="email"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            type="text"
            placeholder="Fallback Career"
            name="altProfession"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            type="text"
            placeholder="Skills"
            name="coreSkills"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            type="file"
            name="idProfilePicture"
            className="w-100 p-2"
            required
            multiple={false}
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            type="text"
            placeholder="Quote that motivates you"
            name="quote"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Control
            required
            type="text"
            placeholder="Manager"
            name="manager"
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <select className="form-control" type="select" required name="ibu">
            <option value="">Select IBU ..</option>
            {IBUs.map((ibu, index) => (
              <option key={index} value={ibu.id}>
                {ibu.name}
              </option>
            ))}
          </select>
        </Form.Group>

        <div className="d-flex flex-column align-items-center">
          <Button type="submit" className="cold-warm-gradient-button">
            Add Joinee
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default EmployeeForm;
