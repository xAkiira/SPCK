function signup(e) {
    event.preventDefault();
    const username = document.getElementById("Username").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    var user = {
        username : username,
        email : email,
        password : password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username,json)
    alert("đăng ký thành công")
    window.location.href="login.html"
}

function login(e) {
    event.preventDefault();
    const username = document.getElementById("Username").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
        alert("vui lòng điền đủ thông tin")
    }
    else if(username == data.username && email == data.email && password == data.password){
        alert("đăng nhập thành công")
    }
    else{
        alert("đăng nhập thất bại")
    }
}  