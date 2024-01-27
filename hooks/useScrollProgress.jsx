// Importation des hooks nécessaires depuis React
import React, { useState, useEffect } from "react";

// Définition du hook personnalisé useScrollProgress
const useScrollProgress = () => {
  // Définition de l'état local 'completion' qui représente le pourcentage de progression du défilement
  const [completion, setCompletion] = useState(0);

  // Utilisation du hook useEffect pour gérer les effets de bord
  useEffect(() => {

    // Définition de la fonction qui met à jour la progression du défilement
    const UpdateScrollCompletion = () => {
      // Récupération de la position actuelle de défilement
      const currentProgress = window.scrollY;
      // Calcul de la hauteur totale de défilement possible
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      // Si la hauteur de défilement est non nulle, mise à jour de 'completion'
      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    // Ajout d'un écouteur d'événement sur le défilement de la fenêtre pour mettre à jour 'completion'
    window.addEventListener("scroll", UpdateScrollCompletion);

    // Retour d'une fonction de nettoyage qui supprime l'écouteur d'événement lors du démontage du composant
    return () => window.removeEventListener("scroll", UpdateScrollCompletion);
  }, []); // Le tableau vide en deuxième argument signifie que cet effet ne dépend d'aucune prop ou état

  // Le hook retourne un div vide, cela pourrait être modifié pour retourner la valeur de 'completion' ou autre chose
  return completion;
};

export default useScrollProgress;
