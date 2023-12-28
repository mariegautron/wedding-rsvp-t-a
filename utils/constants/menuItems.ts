// Enum pour les clés de menu
export enum MenuKey {
  WEDDING_GUESTS = "1",
  WEDDING_PRESENTS = "2",
  // Ajoutez d'autres clés ici si nécessaire
}

// Enum pour les chemins de menu
export enum MenuPath {
  WEDDING_GUESTS = "/admin/weddingguests",
  WEDDING_PRESENTS = "/admin/weddingpresents",
  // Ajoutez d'autres chemins ici si nécessaire
}

// Interface MenuItem
interface MenuItem {
  key: MenuKey;
  path: MenuPath;
  label: string;
}

// Tableau des éléments de menu
export const MENU_ITEMS: MenuItem[] = [
  {
    key: MenuKey.WEDDING_GUESTS,
    path: MenuPath.WEDDING_GUESTS,
    label: "Liste des invités",
  },
  {
    key: MenuKey.WEDDING_PRESENTS,
    path: MenuPath.WEDDING_PRESENTS,
    label: "Liste de cadeaux",
  },
  // Ajoutez d'autres éléments de menu si nécessaire
];
