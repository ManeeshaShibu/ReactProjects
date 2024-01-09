import React, { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Col, Row } from "react-bootstrap";
import styles from "./Template2.module.css";
import heroJoinee from "../recoil/atom/HeroJoinee";
import Download from "../components/Dashboard/Download";
import { fetchProfilePhoto } from "../api/api";

function Onboarding() {
  const [selectedJoinee] = useRecoilState(heroJoinee);
  const pageRef = useRef(null);
  const [profilePhoto, setProfilePhoto] = useState("/logo192.png");

  useEffect(() => {
    if (selectedJoinee !== null) {
      fetchProfilePhoto(selectedJoinee.id).then((data) =>
        setProfilePhoto(data)
      );
    }
  }, [selectedJoinee]);

  return (
    <>
      <div className={`${styles.board}`}>
        <div className="d-flex w-100 justify-content-end">
          <Download targetRef={pageRef} fileName={selectedJoinee?.name || ""} />
        </div>
        {selectedJoinee !== null ? (
          <Row ref={pageRef} className={`${styles.board}`}>
            <Row>
              <Col md={3} xs={12} className={`${styles.column}`}>
                {profilePhoto && (
                  <div className={`col-md-12  ${styles.heroPill_1}`}>
                    <img
                      className="rounded-8"
                      src={profilePhoto}
                      alt=""
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
              </Col>
              <Col md={6} xs={12} className={`${styles.column}`}>
                <h1 className="display-4 text-center mb-4">
                  {selectedJoinee.name}
                </h1>
                <p className="text-center">{selectedJoinee.role}</p>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col md={4} xs={12} className={`${styles.column}`}>
                <div className={`rounded-pill ${styles.pill}`}>
                  <div>Hometown</div>
                </div>
                <div className="pt-3">{selectedJoinee.hometown}</div>
              </Col>
              <Col md={4} xs={12} className={`${styles.column}`}>
                <div className={`rounded-pill ${styles.pill}`}>
                  <div>Education</div>
                </div>
                <div className="pt-3">{selectedJoinee.education}</div>
              </Col>
              <Col md={4} xs={12} className={`${styles.column}`}>
                <div className={`rounded-pill ${styles.pill}`}>
                  <div>Experience</div>
                </div>
                <div className="pt-3">{selectedJoinee.experience}</div>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col md={6} xs={12} className={`${styles.column}`}>
                <div className={`rounded-pill ${styles.pill}`}>
                  <div>In my free time, I enjoy</div>
                </div>
                <div className="pt-3">{selectedJoinee.hobby}</div>
              </Col>
              <Col md={6} xs={12} className={`${styles.column}`}>
                <div className={`rounded-pill ${styles.pill}`}>
                  <div>I can be reached at</div>
                </div>
                <div className="pt-3 d-flex flex-column">
                  <div>{selectedJoinee.contactEmail}</div>
                  <div>{selectedJoinee.contactNumber}</div>
                </div>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col xs={12} className={`${styles.column}`}>
                <div className={`rounded-pill px-5 ${styles.pill}`}>
                  <div className="text-center">
                    If I wasn't in my current profession, I would have been
                  </div>
                </div>
                <div className="pt-3">{selectedJoinee.altProfession}</div>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col xs={12} className={`${styles.column}`}>
                <div className={`rounded-pill ${styles.pill}`}>
                  <div>The quote that fuels me</div>
                </div>
                <div className="pt-3 text-center">{selectedJoinee.quote}</div>
              </Col>
            </Row>
          </Row>
        ) : (
          <p>No New Joinees</p>
        )}
      </div>
    </>
  );
}

export default Onboarding;
