function myFunction1() {
    const x = document.getElementById("schedule");
    const y = document.getElementById("Tables");
    const z = document.getElementById("Location");
    const n = document.getElementById("Contacts");
    if (x.style.display === "flex") {
      x.style.display = "none";

    } else {
      x.style.display = "flex";
    };
    
  }

  function myFunction2() {
    var x = document.getElementById("tables");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  function myFunction3() {
    var x = document.getElementById("location");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  function myFunction4() {
    var x = document.getElementById("contacts");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }