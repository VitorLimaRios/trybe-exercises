USE Scientists;

/* Exercise 1 */
SELECT "This is SQL Exercise, Practice and Solution";

/* Exercise 2 */
SELECT 20, 30, 20;

/* Exercise 3 */
SELECT 10 + 15;

/* Exercise 4 */
SELECT 20 + 30 / 2;

/* Exercise 5 */
SELECT * FROM Scientists;

/* Exercise 6 */
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

/* Exercise 7 */
SELECT Name FROM Scientists order by Name;

/* Exercise 8 */
SELECT Name FROM Projects ORDER BY Name DESC;

/* Exercise 9 */
SELECT concat('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') FROM Projects;

/* Exercise 10 */
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;

/* Exercise 11 */
SELECT DISTINCT Project FROM AssignedTo;

/* Exercise 12 */
SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;

/* Exercise 13 */
SELECT Name FROM Projects ORDER BY Hours LIMIT 1 OFFSET 1;

/* Exercise 14 */
SELECT * FROM Projects ORDER BY Hours LIMIT 5;

/* Exercise 15 */
SELECT CONCAT("Existem ", COUNT(Name), " cientistas na tabela Scientists.") FROM Scientists;