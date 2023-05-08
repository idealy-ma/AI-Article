CREATE TABLE IF NOT EXISTS admin(
    id serial primary key,
    email varchar(200) unique not null,
    password varchar(255) not null
);

CREATE TABLE IF NOT EXISTS article (
    id serial primary key,
    titre varchar(255),
    date date default CURRENT_DATE,
    description varchar(255),
    contenu text
);


INSERT INTO admin VALUES (default,'r.idealy.ma@gmail.com','1234');