# Webprogramozás JavaScript beadandó

Status: Under Development 🚧

## Feladat

### Bevezető

Budapest nyüzsgő belvárosának elengedhetetlen eleme kontinentális Európa legrégebbi metróhálózata, mely évente körülbelül négyszázmillió utazást szolgál ki. Egy jó metróhálózat rengeteg tervezést igényel, nem csak mérnöki, de menedzsment szempontból is — hiszen a váratlan eseményekre fel kell készülnünk.  

A Fővárosi Közgyűlés mai ülésén a 33 képviselő Szilveszter Gergő főpolgármester javaslatára egyhangú igennel szavazott meg téged a Metrófejlesztési Bizottság operatív vezetőjének; gratulálunk! A feladatod el is kezdődik, Hősies Dávid egykori BKK vezérigazgató ismerteti a részleteket.

---

### Menü

- Az oldal megnyitásakor egy menü fogad, ahol megadhatjuk a játékos nevét új játék kezdése előtt.  
- Egy **Start** gomb megnyomására átkerülünk a játék oldalára, és elindul egy időzítő, ami számolja az eltelt időt.  
- A menüből egy gombon keresztül elérhető a játék leírása is.

---

### Játékleírás

A JavaScript projekt egy egyszemélyes metróépítős játék, melyben a cél minél több pontot összegyűjteni.  

- A játék **négy fordulóból áll**, mindegyikben egy adott metróvonalat épít a játékos (M1/sárga, M2/piros, M3/kék, M4/zöld).  
- A fordulók sorrendje véletlenszerű.  
- A **térkép** 10×10 mezőből áll, a `stations.json` vagy `stations-min.json` alapján a megállóhelyek meghatározva.  
- Minden megállóhelynek van betűjele (A, B, C, D), kivéve a 30-as ID-jú „Deák tér” Joker megállóhelyet, ami bármely betűvel használható.  

**Fontos fogalmak:**

- **megállóhely**: pont a térképen, betűjellel.
- **megállóhely kártya**: A, B, C, D, Joker vagy váltó (extra feladat).
- **szakasz**: két megállóhelyet összekötő, a játékos által berajzolt egyenes vonal.
- **metróvonal**: egyszínű szakaszok összessége.
- **kör**: egy megállóhely kártya felfordítása és szakasz építése.
- **forduló**: egy adott metróvonal építésével eltöltött körök.

**Pontszámítás szempontjai:**

- A Duna folyó két részre osztja a térképet (Buda/Pest).  
- Egy szakasz csak akkor keresztezi a Dunát, ha egyik megállóhelye Budán, a másik Pesten van.  
- Egyes megállóhelyek vasúti pályaudvar alatt találhatók (`train` attribútum).  
- Minden megállóhely kerülete (`district`) ismert a pontszámításhoz.

---

### Játékmenet

Egyszerűsített folyamat:

1. Metróvonalak véletlenszerű sorrendbe állítása.
2. Minden metróvonalra:
   - Megállóhely kártyák megkeverése.
   - Amíg a fordulóvége-feltétel nem teljesül:
     - Megállóhely kártya felfordítása.
     - Szakasz berajzolása (opcionális).
   - Forduló pontjának kiszámítása.
3. Összpontszám kiszámítása.

**Szakaszépítés szabályai:**

- Csak az aktuális metróvonal végéből az aktuális kártyán jelzett betűjelű megállóba húzható.
- Joker megállóhely bármely betűvel használható.
- Nem haladhat át harmadik megállóhelyen.
- Nem keresztezhet más szakaszt (kivéve megállóhelyen).
- Nem lehet párhuzamos szakasz ugyanazon két megállóhely között.
- 45 fokos átlós szakasz is megengedett.
- Váltókártya esetén a metróvonal bármely végéről építhető további szakasz.

**Pontozás:**

- PK = hány kerületet érintett a vonal
- PM = legtöbb megállóhely egy kerületben
- PD = hányszor kel át a Duna alatt
- FP = (PK × PM) + PD
- Pályaudvarok pontja (`PP`) a csúszkán jelezve
- Csomópontok: 2 vonalas = 2 pont, 3 vonalas = 5 pont, 4 vonalas = 9 pont
- Végső pont = Sum(FP) + PP + csomópontok

---

### Extra feladatok

- **Mentés:** név, pont és idő elmentése Local Storage-be, eredmények menüben megtekinthetők.  
- **Váltókártya:** speciális szakaszépítési szabályok a fordulóban.  
- **Játékmódok:** Duplázás, Joker, Váltó, Hatalmas forgalom képességek használata.

---

### Segítség a feladat megoldásához

1. **Felhasználói felület megtervezése:** HTML, CSS, négyzetrács.
2. **Viselkedés hozzáadása:**  
   - Játéklogika: adatok és műveletek.  
   - Eseménykezelők: kattintások, szakaszépítés, frissítés.  
3. **Adattárolás kialakítása:** kis 3×3-as teszt térképen először próbálni a logikát.  
4. **Megjelenés:** igényes, jól olvasható, négyzetrácsos elrendezés, minimalista vagy grafikus design.

---

### Minimálisan teljesítendő (8 pont)

- README kitöltése (nyilatkozat, pontok).  
- JavaScript keretrendszer nélkül.  
- Bad practice elkerülése.  
- Menü: név, Start gomb, leírás.  
- Játék: játékos neve, időmérő, aktuális metróvonal, tábla és megállók kirajzolása, szakaszépítés (90° vagy 45°).

### Alap feladatok (12 pont)

- **Kártyák (1,5 pont)**
- **Szakaszépítés (5,5 pont)**
- **Fordulók (1,5 pont)**
- **Pontozás (3,5 pont)**

### Extra feladatok (5 pont)

- Alternatív fordulóvége-feltétel.  
- Mentés (Local Storage).  
- Váltókártya.  
- Ceruza képességek.
