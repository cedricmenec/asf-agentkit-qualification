# ASF AgentKit qualification sandbox

Petit projet de qualification **non sensible** pour l'installation et les
évolutions de l'AgentKit OpenCode + OpenSpec dans un deuxième dépôt GitHub.
Il ne contient aucune donnée, aucun credential et aucune intégration métier.

## Baseline Node 22

Le projet dispose d'une fonction de calcul minimale, de tests Node intégrés
et d'un contrôle de compilation `esbuild` déclaré en `devDependencies`.

```sh
npm ci --ignore-scripts
npm run check
```

Le contrôle importe réellement `esbuild` et réalise un bundle en mémoire.
Il sert à vérifier l'installation des dépendances de développement sur un
environnement vierge, notamment dans les phases `plan`, `apply` et `finalize`
de l'AgentKit. Les scripts npm de post-installation restent désactivés.

## Limites de cette baseline

- Seul un contrôle CI Node 22 sans secret et en lecture seule est ajouté.
  Aucun workflow opérationnel AgentKit ni App n'est activé par cette baseline.
- Aucun modèle LLM n'est appelé et aucune donnée sensible n'est nécessaire.
- L'installation du kit et tout changement de droits, secrets, rulesets ou
  activation de workflow font l'objet de validations distinctes.
- Un futur exercice fonctionnel pourra compléter la calculatrice par une
  opération supplémentaire via OpenSpec et une PR revue.
