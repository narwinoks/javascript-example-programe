function convert() {
    const kilo=document.getElementById("kilo").value;
    const miles=document.getElementById("milis");
    
    const valueMiles =kilo * 0.621371;
    miles.value =valueMiles;
}