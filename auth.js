<script>
const AUTH_KEY = "adminAuth";

function login(u, p) {
  const saved = JSON.parse(localStorage.getItem(AUTH_KEY)) || {
    user: "admin",
    pass: "admin123"
  };

  if (u === saved.user && p === saved.pass) {
    localStorage.setItem("role", "admin");
    return true;
  }
  return false;
}

function changePassword(newPass) {
  let auth = JSON.parse(localStorage.getItem(AUTH_KEY));
  auth.pass = newPass;
  localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
}

function protect() {
  if (localStorage.getItem("role") !== "admin") {
    location.href = "admin.html";
  }
}

if (!localStorage.getItem(AUTH_KEY)) {
  localStorage.setItem(AUTH_KEY, JSON.stringify({
    user: "admin",
    pass: "admin123"
  }));
}
</script>
