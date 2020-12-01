function findAge() {
    var date = document.getElementById('birthday').value;

    if (date === "") {
        alert("Please complete the required field!");
    } else {
        var today = new Date();
        var birthday = new Date(date);
        var year = 0;
        if (today.getMonth() < birthday.getMonth()) {
            year = 1;
        } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
            year = 1;
        }
        var age = today.getFullYear() - birthday.getFullYear() - year;

        if (age < 0) {
            age = 0;
        }
        document.getElementById('result').innerHTML = "<center><h2>Congratulation</h2></center> <center><label>You are now " + age + "yrs old today</label></center>";
    }
}