import { MailOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

// Enum pour les clés de menu
export enum MenuKey {
  WEDDING_GUESTS = "1",
  WEDDING_ADD = "2",
  WEDDING_MESSAGES = "3",

  // Ajoutez d'autres clés ici si nécessaire
}

// Enum pour les chemins de menu
export enum MenuPath {
  WEDDING_GUESTS = "/admin/weddingguests",
  WEDDING_MESSAGES = "/admin/weddingguests/messages",
  WEDDING_ADD = "/admin/weddingguests/add",

  // Ajoutez d'autres chemins ici si nécessaire
}

// Interface MenuItem
interface MenuItem {
  key: MenuKey;
  path: MenuPath;
  label: string;
  icon: ReactNode;
}

// Tableau des éléments de menu
export const MENU_ITEMS: MenuItem[] = [
  {
    key: MenuKey.WEDDING_GUESTS,
    path: MenuPath.WEDDING_GUESTS,
    label: "Liste des invités",
    icon: <UserOutlined />,
  },

  {
    key: MenuKey.WEDDING_ADD,
    path: MenuPath.WEDDING_ADD,
    label: "Ajouter une personne invitée",
    icon: <PlusOutlined />,
  },

  {
    key: MenuKey.WEDDING_MESSAGES,
    path: MenuPath.WEDDING_MESSAGES,
    label: "Voir les messages",
    icon: <MailOutlined />,
  },

  // Ajoutez d'autres éléments de menu si nécessaire
];
