document.getElementById('output').style.visibility = "hidden";
document.getElementById("lbsinput").addEventListener("input", function(e) {
  document.getElementById('output').style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutput").innerHTML = lbs / Math.floor(2.2046);
  document.getElementById("ozOutput").innerHTML = lbs * Math.floor(16);
  document.getElementById("tonsOutput").innerHTML = lbs * 0.0005;

});
