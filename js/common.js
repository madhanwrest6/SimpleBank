const DEFAULT_STATE = {
  checking: 5200.50,
  savings: 12400.75,
  transactions: [
    {date:"2026-10-10",description:"Salary",type:"Credit",amount:3000},
    {date:"2026-10-12",description:"Amazon",type:"Debit",amount:120},
    {date:"2026-10-14",description:"Electric Bill",type:"Debit",amount:160}
  ],
  beneficiaries: []
};
function getState(){
  const saved=localStorage.getItem("simpleBankState");
  if(!saved){ localStorage.setItem("simpleBankState",JSON.stringify(DEFAULT_STATE)); return structuredClone(DEFAULT_STATE); }
  return JSON.parse(saved);
}
function saveState(state){localStorage.setItem("simpleBankState",JSON.stringify(state));}
function money(v){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(v);}
