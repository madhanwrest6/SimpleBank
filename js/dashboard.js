const state=getState();
document.getElementById("checkingBalance").textContent=money(state.checking);
document.getElementById("savingsBalance").textContent=money(state.savings);
const tbody=document.getElementById("recentTransactions");
state.transactions.slice(-5).reverse().forEach(t=>tbody.insertAdjacentHTML("beforeend",`<tr><td>${t.date}</td><td>${t.description}</td><td>${t.type}</td><td>${money(t.amount)}</td></tr>`));
function show(msg){const el=document.getElementById("dashboardMessage");el.textContent=msg;el.className="alert alert-info";}
document.getElementById("depositBtn").onclick=()=>{state.checking+=100;state.transactions.push({date:new Date().toISOString().slice(0,10),description:"Cash Deposit",type:"Credit",amount:100});saveState(state);show("Deposited $100. Refreshing...");setTimeout(()=>location.reload(),500);};
document.getElementById("withdrawBtn").onclick=()=>{if(state.checking<100)return show("Insufficient balance.");state.checking-=100;state.transactions.push({date:new Date().toISOString().slice(0,10),description:"Cash Withdrawal",type:"Debit",amount:100});saveState(state);show("Withdrew $100. Refreshing...");setTimeout(()=>location.reload(),500);};
document.getElementById("logoutBtn").onclick=()=>{sessionStorage.removeItem("loggedIn");location.href="login.html";};