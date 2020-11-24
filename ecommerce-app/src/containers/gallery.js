import React, { useContext, useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.png";
import { FirebaseContext } from "../context/firebase";
import { Top } from "../rawcss-components";
import { FooterContainer } from "../containers/footer";
import UploadForm from "../rawcss-components/UploadForm";
import ImageGrid from "../rawcss-components/ImageGrid";
import ImageModal from "../rawcss-components/ImageModal";
import "../css/gallery.css";

export function GalleryContainer() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Product" />
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <br />
        <br />
        <Top />
      </Header>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <FooterContainer />
    </>
  );
}
