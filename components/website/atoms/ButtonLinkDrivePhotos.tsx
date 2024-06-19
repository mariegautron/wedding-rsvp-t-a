import Button from "@/components/design-system/Button";

export const drivePhotoShareUrl = process.env.NEXT_PUBLIC_PHOTOS_SHARE_URL;

const ButtonLinkDrivePhoto = () => {
  return (
    <Button href={drivePhotoShareUrl} target="_blank" rel="noopener noreferrer">
      Ajouter des photos sur Google Drive
    </Button>
  );
};

export default ButtonLinkDrivePhoto;
