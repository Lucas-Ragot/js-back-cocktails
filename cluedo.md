# Cluedo

## trouver le rapport de police

```sql
SELECT * FROM rapport_police WHERE date="11122019" AND type="caricature abusive";
```

## trouver le témoignage de Beth Rave

```sql
SELECT * FROM temoignage JOIN personne ON temoignage.personne_id=personne.id WHERE personne.nom = "Beth Rave";
```

## Trouver le second témoignage

```sql
SELECT * FROM temoignage JOIN personne ON temoignage.personne_id=personne.id WHERE personne.rue LIKE "rue Sadi Carnot" ORDER BY personne.numero_rue DESC LIMIT 1;
```

## Trouver le coupable

```sql
SELECT * FROM personne
JOIN promo ON personne.promo_id = promo.id
JOIN projet ON personne.projet_id=projet.id
WHERE promo.couleur = 'pourpre'
AND projet.nom_projet = 'O''asis';
```

## Trouver le témoignage de Cyril

```sql
SELECT * FROM temoignage
JOIN personne ON temoignage.personne_id=personne.id
WHERE personne.nom = "Cyril Hique";
```

## Trouver le VRAI coupable

```sql
SELECT * FROM personne
JOIN role ON personne.role_id = role.id
WHERE role.nom_role LIKE "helper"
AND (personne.age BETWEEN 40 AND 45)
AND (personne.taille BETWEEN 180 AND 190);
```
