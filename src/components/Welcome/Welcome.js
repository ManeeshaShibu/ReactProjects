import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Welcome.module.css";
import { Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Card className={`${styles.homeBox} mx-auto mt-4`}>
      <Card.Body>
        <Card.Title className={`${styles.homeTitle}`}>Welcome To The Team!</Card.Title>
        <Card.Text className={`${styles.homeP}`}>
          Please enter your details by clicking the link below
        </Card.Text>
        <div className="w-100 d-flex justify-content-center">
          <Button variant="primary" className={`${styles.homeA}`} href="/EmployeeForm">
            Fill Form
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Home;
