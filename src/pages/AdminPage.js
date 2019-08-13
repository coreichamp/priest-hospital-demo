import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";

import randomString from "randomstring";

import SlideCard from "../components/SlideCard";
const style = {
  container: {
    padding: "100px"
  }
};
function AdminPage() {
  const [imgList, setImgList] = useState(
    JSON.parse(localStorage.getItem("imgList"))
  );

  const [values, setValues] = useState({
    announcement: localStorage.getItem("announcement")
  });
  const [isShouldSave, SetIsShouldSave] = useState(false);

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    SetIsShouldSave(true);
  };

  return (
    <Container className={style.container}>
      <Row>
        <Col style={{ marginTop: "20px" }}>
          <h3>Slide Show</h3>
        </Col>
      </Row>
      <Row>
        {imgList !== null
          ? imgList.map((each, index) => {
              return (
                <Col xs={12} sm={12} md={4} key={each.id}>
                  <SlideCard
                    img={each.img}
                    onDelete={() => handleDelete(each.id)}
                  />
                </Col>
              );
            })
          : console.log("nothing in imgList")}
      </Row>
      <Row style={{ padding: "10px 5px 5px 5px" }}>
        <Col>
          <h5>Upload Image</h5>

          <input
            type="file"
            onChange={selectFileHandle}
            accept="image/png, image/jpeg"
          />
          <p style={{ color: "rgb(173, 169, 169)", fontSize: "14px" }}>
            ( Only accept jpg, png image's type also the image shoule be 1920px
            width and 1030px height. )
          </p>
        </Col>
      </Row>

      <Row style={{ padding: "10px 5px 5px 5px" }}>
        <Col>
          <h5>Announcement</h5>
          <InputGroup>
            <FormControl
              as="textarea"
              onChange={handleChange("announcement")}
              value={values.announcement}
              name="announcement"
              placeholder="ใส่ข้อความที่นี่"
              style={{ height: 200 }}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row style={{ padding: 5 }}>
        <Col>
          <Button onClick={saveData} disabled={!isShouldSave}>
            Save and Publish
          </Button>
        </Col>
      </Row>
    </Container>
  );

  function handleDelete(id) {
    setImgList(imgList.filter(each => !(each.id === id)));
    SetIsShouldSave(true);
  }
  async function selectFileHandle(event) {
    if (imgList === null) {
      const imgBase64 = await toBase64(event.target.files[0]);
      const id = generateID();
      setImgList([{ id: id, img: imgBase64 }]);
    } else {
      const imgBase64 = await toBase64(event.target.files[0]);
      const id = generateID();
      const newList = [...imgList, { id: id, img: imgBase64 }];
      setImgList(newList);
    }
    SetIsShouldSave(true);
  }

  function saveData() {
    localStorage.setItem("imgList", JSON.stringify(imgList));
    localStorage.setItem("announcement", values.announcement);
    SetIsShouldSave(false);
  }
  function generateID() {
    return randomString.generate({
      charset: "0123456789abcdef"
    });
  }
}

export default AdminPage;
