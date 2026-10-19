document.getElementById("transferForm").addEventListener("submit",e=>{
 e.preventDefault(); const state=getState(); const from=document.getElementById("fromAccount").value; const to=document.getElementById("toAccount").value;
 const amount=Number(document.getElementById("amount").value); const msg=document.getElementById("message");
 const fail=t=>{msg.className="alert alert-danger";msg.textContent=t;}; const ok=t=>{msg.className="alert alert-success";msg.textContent=t;};
 if(from===to)return fail("From and To accounts cannot be the same.");
 if(!Number.isFinite(amount)||amount<=0)return fail("Enter a valid transfer amount.");
 if(amount>state[from])return fail("Insufficient balance.");
 state[from]-=amount; state[to]+=amount;
 state.transactions.push({date:new Date().toISOString().slice(0,10),description:`Transfer ${from} to ${to}`,type:"Debit",amount});
 saveState(state); ok(`Transfer successful! ${money(amount)} transferred.`);
});