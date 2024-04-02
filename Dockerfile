# Étape 1: Construire l'image à partir d'un nœud officiel. Utiliser une version spécifique de Node pour la prévisibilité.
FROM node:18-alpine AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier le fichier `package.json` et le fichier `pnpm-lock.yaml` pour profiter de la mise en cache des couches Docker
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances en utilisant pnpm. Utiliser `--frozen-lockfile` pour éviter les mises à jour accidentelles du lockfile.
RUN pnpm install --frozen-lockfile

# Copier le reste des fichiers du projet dans le conteneur
COPY . .

# Construire l'application Next.js
RUN pnpm build

# Étape 2: Préparer l'image de production à partir d'un nœud officiel
FROM node:18-alpine AS runner

WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier les fichiers nécessaires depuis l'étape de construction
COPY . .

# Installer les dépendances de production uniquement
RUN pnpm install --prod --frozen-lockfile

# Exposer le port sur lequel l'application sera accessible
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["pnpm", "start"]
