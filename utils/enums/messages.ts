export enum MessageType {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
  WARNING = "warning",
}

export enum ERROR_MESSAGES {
  ASK_TO_REPORT = "Il y a eu une erreur. Veuillez contacter Thomas & Amélie pour qu'ils rapportent ce bug à Marie :)",
  ADMIN_ERROR = "In y a un bug ! Ne tape pas Marie, va lui demander de corriger :)",
  GUEST_EXIST = "La personne que tu souhaites inviter est déjà présente sur la liste d'invités. Il appartient à cette personne de remplir le formulaire de réponse. Nous te demandons de revenir en arrière et de ne pas l'ajouter en tant qu'invité·e.",
}

export enum SUCCESS_MESSAGES {
  ADD_GUEST = "Invité ajouté avec succès !",
  RESONSE_SEND = "La réponse à l'invitation à bien été envoyée !",
  COMMENT_SEND = "Commentaire ajouté avec succès !",
  DELETE_GUEST = "Invité supprimé avec succès !",
  UPDATE_GUEST = "Invité mis à jour avec succès !",
}
