# Coolshop-backend-test

### Homework 
Si implementi nel linguaggio di propria scelta tra NodeJs, PHP, C#, uno script da eseguire da linea di comando.
Si possono usare librerie di terze parti a vostro piacimento.
Lo script riceve in input il percorso di un file csv da importare, un numero di colonna nel quale cercare, una chiave di ricerca.
Lo script dovrà essere così invocato (esempio in PHP)

$ php src/search.php ./file.csv 2 Alberto

dove ./file.csv è il percorso di un file csv così formattato:
1,Rossi,Fabio,01/06/1990;
2,Gialli,Alessandro,02/07/1989;
3,Verdi,Alberto,03/08/1987;

Il numero 2 rappresenta l'indice di colonna in cui cercare (nel file precedente il nome)
Alberto rappresenta la chiave di ricerca.

L'output del comando deve essere la linea corrispondente, nel nostro caso:
3,Verdi,Alberto,03/08/1987;

La consegna è attesa in formato repository git pubblica, su GitHub o similari.

### Info about solution

- The solution is NodeJs based and requires fs and readline modules.
- A simple error checking on the argv is implemeted, but can be naturally improved, for instance checking the date formate ('moment' module is suggested) and implementing a *not* case-sensitive research by name/surname.

Thanks 4 your time! 🙂
