 \sql
 \connect root@localhost:3306



-- 1. 
create database student_mangement;
use student_mangement;

-- 2.
create table students(
    student_id int primary key,
    frist_name varchar(50),
    last_name varchar(50),
    DOB date,
    gender varchar(10),
    class_id int
);
desc students;


create table classes(
  class_id int primary key,
  class_name varchar(50),
  teacher_id int
);
desc classes;


create table teachers(
    teacher_id int primary key,
    first_name varchar(50),
    last_name varchar(50),
    subject varchar(50)
);

desc teachers;

-- 3.Data insert

insert into students values
(1 , "Arjun" , "kumar" , "2005-04-23" , "Male" , 1),
(2 , "Priya" , "Sharma" , "2006-06-15" , "FeMale" , 1),
(3 , "Rohan" , "Singh" , "2007-09-12" , "Male" , 2),
(4 , "Anajali" , "Varma" , "2005-04-23" , "FeMale" , 2),
(5 , "Amit" , "Patel" , "2008-02-03" , "Male" , 1);
select * from students;

insert into classes values
(1 , "Mathematics" ,1),
(2 , "Science" ,2),
(3 , "English" ,3),
(4 , "History" ,4),
(5 , "Geography" ,5);
select * from classes;

insert into teachers values
(1 , "Ravi", "Mehata" , "Mathematics"),
(2 , "Suman", "Rao" , "Science"),
(3 , "Kavita", "Desai" , "English"),
(4 , "Rajesh", "Khan" , "History"),
(5 , "Sneha", "Joshi" , "Geography");
select * from teachers;


-- 4.
select * from students where student_id=1;
select first_name,last_name from teachers;


-- 5.
create table Enrollments(
    enrollment_id int primary key,
    enrollment_date date,
    student_id int,foreign key(student_id) references students(student_id),
    teacher_id int, foreign key(teacher_id) references teachers(teacher_id)
);

insert into Enrollments values
(1 , "2024-07-05" , 1 , 1 ),
(2 , "2024-07-06" , 2 , 2 ),
(3 , "2024-07-07" , 3 , 3 ),
(4 , "2024-07-08" , 4 , 4 ),
(5 , "2024-07-09" , 5 , 5 );

select s.frist_name
from teachers t
inner join Enrollments e on e.teacher_id = t.teacher_id
inner join students on e.student_id = s.student_id;



-- 6.
update set into lastname from students where student_id = 1 AND last_name='Singh';

update into subject from teachers where  teacher_id = 2 set subject='Physics';

-- 7.


--1.Count the total numbar of students.
select count(*) from students;
--2. Find the maximum age of students

-- 8.
-- (1)
delete * from students where student_id = 5;

-- (2)
delete * from Enrollments where enrollment_id = 4;