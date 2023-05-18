CREATE OR REPLACE VIEW v_laptop AS (
    SELECT
        laptop.id,
        laptop.ramid,
        ram.quantite ram,
        laptop.processeurid,
        v_processeur.fournisseurprocid,
        v_processeur.coeur,
        v_processeur.generation,
        v_processeur.frequence,
        v_processeur.reference refprocesseur,
        v_processeur.fournisseur,
        laptop.disquedurid,
        v_disquedur.typedurid,
        v_disquedur.typedur,
        v_disquedur.quantite disquedur,
        laptop.referenceid,
        v_laptop_ref.marque,
        v_laptop_ref.reference reflaptop,
        v_laptop_ref.marqueid,
        laptop.ecranid,
        ecran.inch
    FROM laptop
    JOIN ram
    ON laptop.ramid = ram.id
    JOIN v_processeur
    ON laptop.processeurid = v_processeur.id
    JOIN v_disquedur 
    ON laptop.disquedurid = v_disquedur.id
    JOIN v_laptop_ref
    ON laptop.referenceid = v_laptop_ref.id
    JOIN ecran
    ON ecran.id = laptop.ecranid
)

CREATE OR REPLACE VIEW v_processeur AS (
    SELECT processeur.*,
        fournisseurproc.nom fournisseur
    FROM processeur
    JOIN fournisseurproc
    ON processeur.fournisseurprocid = fournisseurproc.id
)

CREATE OR REPLACE VIEW v_disquedur AS (
    SELECT disquedur.*,
        typedur.label typedur
    FROM disquedur
    JOIN typedur
    ON disquedur.typedurid = typedur.id
)

CREATE OR REPLACE VIEW v_laptop_ref AS (
    SELECT reference.*,
        marque.nom marque
    FROM reference
    JOIN marque
    ON reference.marqueid = marque.id
)

ALTER TABLE utilisateur
ALTER COLUMN pointdeventeid DROP NOT NULL;
