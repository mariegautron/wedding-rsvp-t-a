import React from "react";
import { Row, Col } from "antd";

const PhotoGallery = () => {
  // Fonction pour générer des URL d'images aléatoires de Picum
  const generateRandomPhotos = () => {
    const photos = [];
    for (let i = 0; i < 6; i++) {
      // Générer 6 photos aléatoires pour cet exemple
      const width = 200; // Largeur souhaitée pour les images
      const height = 200; // Hauteur souhaitée pour les images
      const picumURL = `https://picsum.photos/${width}/${height}?random=${i}`;
      photos.push(picumURL);
    }
    return photos;
  };

  // Récupérer les URLs des images générées
  const photos = generateRandomPhotos();

  // Fonction pour afficher les images en carré
  const renderPhotos = () => {
    return photos.map((photo, index) => (
      <Col key={index} span={4} style={{ padding: "5px" }}>
        <img
          src={photo}
          alt={`Photo ${index}`}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Col>
    ));
  };

  return (
    <div className="container">
      <div className="photoGallery">
        <h2>Photo Gallery : A faire pour de vrai</h2>
        <Row gutter={[16, 16]}>{renderPhotos()}</Row>

        <Row gutter={[16, 16]}>{renderPhotos()}</Row>
      </div>
    </div>
  );
};

export default PhotoGallery;
