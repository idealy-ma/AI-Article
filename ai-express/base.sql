CREATE TABLE IF NOT EXISTS admin(
    id serial primary key,
    email varchar(200) unique not null,
    password varchar(255) not null
);

CREATE TABLE IF NOT EXISTS article (
    id serial primary key,
    titre varchar(255),
    date timestamp not null default CURRENT_TIMESTAMP,
    description varchar(255),
    image varchar(255),
    contenu text
);

alter table article add column image varchar(255);

INSERT INTO admin VALUES (default,'r.idealy.ma@gmail.com','1234');