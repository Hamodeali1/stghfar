let count = 0;
document.getElementById("counterButton").addEventListener("click", function() {
    count++;
    document.getElementById("count").textContent = count;
});
