USE PiecesProviders;

/* exercise 1 */
SELECT Code, Name FROM Providers ORDER BY Name DESC LIMIT 1;

/* exercise 2 */
SELECT * FROM Provides ORDER BY Price LIMIT 5;

/* exercise 3 */
SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;

/* exercise 4 */
SELECT concat("A peça mais cara é a: ", Price, ", provida pela empresa ", Provider, " e custa ", Price, " reais.") 
FROM Provides ORDER BY Price DESC LIMIT 1;