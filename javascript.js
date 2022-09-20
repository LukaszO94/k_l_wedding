function myFunction1() {
    const x = document.getElementById("schedule");
    const y = document.getElementById("tables");
    const z = document.getElementById("location");
    const n = document.getElementById("contacts");
    if (x.style.display === "flex") {
      x.style.display = "none";

    } else {
      x.style.display = "flex";
      y.style.display = "none";
      z.style.display = "none";
      n.style.display = "none";
    };
    
  }

  function myFunction2() {
    const x = document.getElementById("schedule");
    const y = document.getElementById("tables");
    const z = document.getElementById("location");
    const n = document.getElementById("contacts");
    if (y.style.display === "flex") {
      y.style.display = "none";
    } else {
      y.style.display = "flex";
      x.style.display = "none";
      z.style.display = "none";
      n.style.display = "none";
    }
  }

  function myFunction3() {
    const x = document.getElementById("schedule");
    const y = document.getElementById("tables");
    const z = document.getElementById("location");
    const n = document.getElementById("contacts");
    if (z.style.display === "flex") {
      z.style.display = "none";
    } else {
      z.style.display = "flex";
      y.style.display = "none";
      x.style.display = "none";
      n.style.display = "none";
    }
  }

  function myFunction4() {
    const x = document.getElementById("schedule");
    const y = document.getElementById("tables");
    const z = document.getElementById("location");
    const n = document.getElementById("contacts");
    if (n.style.display === "flex") {
      n.style.display = "none";
    } else {
      n.style.display = "flex";
      y.style.display = "none";
      z.style.display = "none";
      x.style.display = "none";
    }
  }

  function randomNum(lgth) { 
    const rand = Math.floor(Math.random() * lgth);
    return rand;
  }

  function task() {
    const zad = ['1. Wznieś toast za pare młodą',
    '2. Polej wódkę przy swoim stole',
    '3. Zatańcz z druhną/druhem',
    '4. Przysiądź się do innego stolika',
    '5. Zrób sobie zdjęcie z Panną Młodą',
    '6. Zrób sobie zdjęcie z Panem Młodym',
    '7. Zabierz swoją partnerkę/partnera na kieliszek bimbru',
    '8. Zatańcz z mamą panny młodej', 
    '9. Zaśpiewaj sto lat',
    '10. Zbij piątkę z każdą rudą osobą na weselu',
    '11. Napij się z osobą naprzeciwko',
    '12. Przynieś swojej partnerce/partnerowi coś do picia',
    '13. Wysciskaj pana młodego',
    '14. Uściśnij dłoń ojcom pary młodej', 
    '15. Zatańcz z osobą którą dziś poznałeś/poznałaś'];
    const picked = zad[randomNum(zad.length)];
    return picked;
    alert('picked');
  }

  function display() {
  
  document.getElementById("message").innerHTML = task();
  
}