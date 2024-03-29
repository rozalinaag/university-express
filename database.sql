create Table student(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255), 
    faculty INTEGER,
    FOREIGN KEY (faculty) REFERENCES faculty(id), 
    direction INTEGER,
    FOREIGN KEY (direction) REFERENCES direction(id)
);


create Table professor(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    faculty INTEGER,
    FOREIGN KEY (faculty) REFERENCES faculty(id)
);

create Table direction(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    faculty INTEGER,
    FOREIGN KEY (faculty) REFERENCES faculty(id)
);

create Table faculty(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

insert into faculty (id, name) values (2,'Компьтерных технологий'),(3,'Романо-германской филологии'),
(4,'Психологический'), (5,'Инновационный'), (6,'Математический');

select * from faculty f ;


insert into professor (id, name, surname, faculty) values (1,'Иван', 'Дмитриев', 2),(2,'Николай', 'Анохин', 1), 
 (3,'Илья', 'Ахрыпин', 1),(4,'Анна', 'Пурунова', 1), (5,'Константин', 'Костенко', 2), (6,'Екатерина', 'Юрьева', 4),
 (7,'Екатерина', 'Николаева', 5),(8,'Альберт', 'Инштейн', 6) ;
 
select * from professor p ;

insert into student (id, name, surname, faculty) values (1,'Альберт', 'Аркадьев', 1),  (2,'Анна', 'Митрохина', 2), 
(3,'Дмитрий', 'Мегилян', 1), (4,'Денис', 'Сериев', 1), (5,'Илья', 'Партиев', 3), (6,'Екатерина', 'Игнатова', 3), 
(7,'Екатерина', 'Смирнова', 4),  (8,'Маргарита', 'Затьев', 5), (9,'Дмитрий', 'Чмышев', 6) ;

select * from student s  ;

insert into student (id, name, surname, faculty, direction ) values (1,'Альберт', 'Аркадьев', 1, 1),  (2,'Анна', 'Митрохина', 1, 2), 
(3,'Дмитрий', 'Мегилян', 1, 3), (4,'Денис', 'Сериев', 1, 4), (5,'Илья', 'Партиев', 1, 5), (6,'Екатерина', 'Игнатова', 1, 5), 
(7,'Екатерина', 'Смирнова', 1, 5),  (8,'Маргарита', 'Затьев', 1, 4), (9,'Дмитрий', 'Чмышев', 1, 3), (10,'Дмитрий', 'Хлыст', 1, 3), 
(11,'Дмитрий', 'Ильин', 1, 6), (12,'Екатерина', 'Чмышева', 1, 7), (13,'Маргарита', 'Затьева', 1, 7), (14,'Анастасия', 'Хрюпива', 2, 8), 
(15,'Виалета', 'Деревнего', 2, 8), (16,'Иван', 'Иванов', 2, 9), (17,'Сергей', 'Чехов', 2, 10), (18,'Олег', 'Гаркуша', 2,11), 
(19,'Али', 'Акзибеков', 2, 11), (20,'Денис', 'Корниенко', 3, 12), (21,'Игорь', 'Масенко', 3, 13), (22,'Василий', 'Дровов', 3, 14), 
(23,'Анастасия', 'Халипенко', 3, 15), (24,'Беслан', 'Ибрагимов', 3, 16), (25,'Маргарита', 'Арбузова', 3, 16), (26,'Евгений', 'Булахов', 4, 17), 
(27,'Евгений', 'Румянцев', 4, 17), (28,'Розалина', 'Агишева', 4, 18), (29,'Олег', 'Огурцов', 4, 19), (30,'Ксюша', 'Помидорова', 5, 20), 
(31,'Карина', 'Ухова', 5, 21), (32,'Игорь', 'Медведев', 5, 22), (33,'Никита', 'Мишев', 6, 23), (34,'Имануил', 'Гутман', 6, 24), 
(35,'Андрей', 'Чихачев', 6, 25);