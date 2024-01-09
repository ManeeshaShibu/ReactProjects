import { Col, Row } from "react-bootstrap";
import React, { pageRef, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styles from "./Onboarding.module.css";
import heroJoinee from "../recoil/atom/HeroJoinee";
import newJoiners from "../recoil/atom/NewJoiners";
import Download from "../components/Dashboard/Download";
import { fetchProfilePhoto } from "../api/api";
function Onboarding() {
  const [selectedJoinee, setSelectedJoinee] = useRecoilState(heroJoinee);
  const [newJoinees, setNewJoinees] = useRecoilState(newJoiners);
  const pageRef = useRef(null);
  const [profilePhoto, setProfilePhoto] = useState("/logo192.png");

  useEffect(() => {
    if (selectedJoinee !== null) {
      console.log(newJoinees);
      fetchProfilePhoto(selectedJoinee.id).then((data) =>
        setProfilePhoto(data)
      );
    }
  }, [selectedJoinee]);

  const handleJoineeChange = (key) => {
    setSelectedJoinee(newJoinees[key]);
  };

  return (
    <>
      <div className={`${styles.board}`}>
        <div className="d-flex w-100 justify-content-end">
          <Download targetRef={pageRef} fileName={selectedJoinee?.name || ""} />
        </div>
        {selectedJoinee !== null ? (
          <Row ref={pageRef} className={`${styles.board}`}>
            {/* {selectedJoinee !== null ? ( */}
            {/* <Row className={`${styles.board}`}> */}
            <Col className={`${styles.column}`} md={3} xs={12}>
              <div className={`rounded-pill ${styles.pill}`}>
                <div>Hometown</div>
              </div>
              <div className="pt-3">{selectedJoinee.hometown}</div>
            </Col>
            <Col className={`${styles.column}`} md={3} xs={12}>
              <div className={`rounded-pill ${styles.pill}`}>
                <div>Education</div>
              </div>
              <div className="pt-3">{selectedJoinee.education}</div>
            </Col>
            <Col className={`${styles.column}`} md={3} xs={12}>
              <div className={`rounded-pill ${styles.pill}`}>
                <div>Experience</div>
              </div>
              <div className="pt-3">{selectedJoinee.experience}</div>
            </Col>
            <Col className={`${styles.column}`} md={3} xs={12}>
              <div className={`rounded-pill ${styles.pill}`}>
                <div>In my free time, I enjoy</div>
              </div>
              <div className="pt-3">{selectedJoinee.hobby}</div>
            </Col>

            <Col className={`${styles.column}`} lg={9} xs={12}>
              <Row>
                {profilePhoto && (
                  <div className={`col-md-3  ${styles.heroPill_1}`}>
                    <p>{selectedJoinee.name}</p>
                    <img
                      className="rounded-8"
                      src={profilePhoto}
                      alt=""
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                    <p className="text-center">{selectedJoinee.role}</p>
                  </div>
                )}
                <div
                  className={`col-md-1 align-items-start p-3 ${styles.filler1}`}
                ></div>
                <div
                  className={`col-md-1 align-items-start p-3 ${styles.filler2}`}
                ></div>
                <div
                  className={`col-md-5 align-items-start  ${styles.heroPill_2}`}
                >
                  <p>
                    <strong>IBU</strong> : {selectedJoinee.ibu.name}
                  </p>
                  <br />
                  <p>
                    <strong>Manager</strong> : {selectedJoinee.manager}
                  </p>
                  <br />
                  <p>
                    <strong>Core Skills</strong> : {selectedJoinee.coreSkills}
                  </p>
                </div>
              </Row>
            </Col>
            <Col className={`${styles.column}`} lg={3} md={6} xs={12}>
              <div className={`rounded-pill ${styles.pill}`}>
                <div>I can be reached at</div>
              </div>
              <div className="pt-3 d-flex flex-column">
                <div>{selectedJoinee.contactEmail}</div>
                <div>{selectedJoinee.contactNumber}</div>
              </div>
            </Col>
            <Col
              className={`${styles.column}`}
              lg={{ span: 9, order: 0 }}
              xs={{ order: "last", span: 12 }}
            >
              <h1 className="align-self-start">
                <strong className="display-2"></strong> 'The quote that fuels
                me'
              </h1>
              <div className="pt-3">"{selectedJoinee.quote}"</div>
            </Col>
            <Col className={`${styles.column}`} lg={3} md={6} xs={12}>
              <div className={`rounded-pill px-5 ${styles.pill}`}>
                <div className="text-center">
                  If I wasn't in my current profession, I would have been
                </div>
              </div>
              <div className="pt-3">{selectedJoinee.altProfession}</div>
            </Col>
          </Row>
        ) : (
          <p>No employee details available</p>
        )}
      </div>
    </>
  );
}

export default Onboarding;
