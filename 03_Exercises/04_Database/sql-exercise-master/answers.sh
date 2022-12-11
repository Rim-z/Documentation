A) Basic Queries 
1-SELECT Name FROM students;
2-SELECT * FROM students
WHERE Age>'30';
3-SELECT Name FROM students
WHERE Gender='F' AND Age='30';
4-SELECT Points FROM students
WHERE name='Alex';
5-ADD Myself as a new students
INSERT INTO students VALUES ( '7' , 'Rim','23', 'F','700');
6-UPDATE students SET Points='310' WHERE name='Basma';
7-UPDATE students SET Points='150' WHERE name='Alex';
B)Creating Table
   CREATE TABLE "graduates" (
	"ID"	INTEGER NOT NULL,
	"Name"	TEXT NOT NULL UNIQUE,
	"Age"	INTEGER,
	"Gender"	TEXT,
	"Points"	INTEGER,
	"Graduation"	TEXT,
	PRIMARY KEY("ID" AUTOINCREMENT)
);
 10- INSERT INTO graduates (name,age,gender,points)
select name,age,gender,points from students
where students.name = "Layal"
11- UPDATE graduates
SET graduation="08/09/2018"
WHERE  name="Layal";
12-DELETE  FROM students
WHERE name="Layal";
C)Joins
14-SELECT companies.name , companies.date, employees.name
FROM companies
INNER JOIN employees ON companies.name=employees.Company
15-SELECT employees.name
  FROM companies
  INNER JOIN employees ON companies.name=employees.Company
  WHERE companies.Date <2000
  
