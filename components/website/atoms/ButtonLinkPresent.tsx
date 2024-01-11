import Button from "@/components/design-system/Button";

export const presentsListUrl = process.env.NEXT_PUBLIC_PRESENT_LIST;

const ButtonLinkPresent = () => {
  return (
    <Button
      href={presentsListUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5"
    >
      Voir la liste de cadeaux de mariage
    </Button>
  );
};

export default ButtonLinkPresent;
