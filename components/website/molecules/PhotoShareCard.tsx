"use client";

import Button from "@/components/design-system/Button";
import Paragraph from "@/components/design-system/Paragraph";
import { FC } from "react";
import ButtonLinkDrivePhoto from "../atoms/ButtonLinkDrivePhotos";

const PhotoShareCard: FC = () => {
  return (
    <div className="bg-fond-clair p-6 rounded mx-auto w-full md:w-7/12 text-center">
      <Paragraph className="font-bold text-xl mb-4">
        Partagez vos photos pour le diaporama du mariage
      </Paragraph>
      <Paragraph className="mb-6">
        Nous aimerions que vous partagiez vos photos de la jeunesse ou des
        moments passés avec les futurs mariés. Vous pouvez les ajouter sur
        Google Drive ou les envoyer par email.
      </Paragraph>
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
        <ButtonLinkDrivePhoto />
        <Button
          outlined
          mode="dark"
          href="mailto:marigaut2@gmail.com?subject=Photos%20pour%20le%20diaporama%20du%20mariage"
        >
          Envoyer des photos par email
        </Button>
      </div>
    </div>
  );
};

export default PhotoShareCard;
