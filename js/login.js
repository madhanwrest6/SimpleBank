document.getElementById("loginForm").addEventListener("submit",e=>{
  e.preventDefault();
  const u=document.getElementById("username").value.trim();
  const p=document.getElementById("password").value;
  if(u==="admin"&&p==="admin123"){sessionStorage.setItem("loggedIn","true");location.href="dashboard.html";}
  else document.getElementById("errorMessage").textContent="Invalid username or password";
});