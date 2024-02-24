function showPassword() {
    var x = document.getElementById("myPassword");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("lock").className = "bx bxs-lock-open";
    } else {
        x.type = "password";
        document.getElementById("lock").className = "bx bxs-lock";
    }
}
