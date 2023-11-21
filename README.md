### Table "Projects"

| Column     | Type          | Description           |
|------------|---------------|-----------------------|
| ProjectID  | Primary Key   | Unique Identifier     |
| ProjectName| String        | Nom du projet         |
| Description| Text          | Description du projet |
| StartDate  | Date          | Date de début         |
| EndDate    | Date          | Date de fin           |
| Status     | String        | Statut du projet      |

### Table "Technologies"

| Column         | Type          | Description           |
|----------------|---------------|-----------------------|
| TechnologyID   | Primary Key   | Unique Identifier     |
| TechnologyName | String        | Nom de la technologie  |

### Table "ProjectTechnologies"

| Column         | Type          | Description                           |
|----------------|---------------|---------------------------------------|
| ProjectID      | Foreign Key   | Référence à la table "Projects"       |
| TechnologyID   | Foreign Key   | Référence à la table "Technologies"   |

### Table "Images"

| Column      | Type          | Description                           |
|-------------|---------------|---------------------------------------|
| ImageID     | Primary Key   | Unique Identifier                     |
| ProjectID   | Foreign Key   | Référence à la table "Projects"       |
| ImagePath   | String        | Chemin de l'image                      |