import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";


actor Token {
  Debug.print("hey=y");

  let totalSup = 1000000000;
  let owner : Principal = Principal.fromText("7d5t6-h4yrh-r4w72-xmxcc-rbihe-lzinu-u7jim-vc3dc-zx2w6-2aqfb-nqe");
  let symbol : Text = "QBTE";

  private stable var balanceEntries:[(Principal,Nat)]=[];
  private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
   if (balances.size() < 1)
    {
    balances.put(owner, totalSup);};
  

  public query func balanceOf(who : Principal) : async Nat {
    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?x) x;
    };
    return balance;

  };
  public query func getSymbol() : async Text {
    return symbol;

  };
  public shared (msg) func payOut() : async Text {
    // Debug.print(debug_show (msg.caller));
    if (balances.get(msg.caller) == null) {
      let amount = 10000;

    let res=  await transfer(msg.caller, amount);
      return res;
    } else {
      return "Already claimed";
    };
  };

  // public shared (msg) func deposit(amount:Nat):async Principal{
  //   let fbalance= await balanceOf(msg.caller);
  //   if (fbalance > amount){
  //     let newfb:Nat=fbalance-amount;
  //     balances.put(msg.caller,newfb);
  //     return msg.caller;
  //   } else {
  //     return msg.caller;
  //   }
  // };

  // public shared (msg) func deposit(amount:Nat):async Principal{
  //   let fbalance= await balanceOf(msg.caller);
  //   if (fbalance > amount){
  //     let newfb:Nat=fbalance-amount;
  //     balances.put(msg.caller,newfb);
  //     return msg.caller;
  //   } else {
  //     return msg.caller;
  //   }
  // };

  public shared (msg) func transfer(to : Principal, amount : Nat) : async Text {
    let fromBalance = await balanceOf(msg.caller);
    if (fromBalance > amount){
      let newFromB:Nat=fromBalance-amount;
      balances.put(msg.caller,newFromB);

      let toBalance=await balanceOf(to);
      let newToBalance=toBalance+amount;
      balances.put(to,newToBalance);
      return "success";

    }
    else{
      return "Insufficient Funds";
    }    
  };
  

  system func preupgrade(){
    balanceEntries:=Iter .toArray(balances.entries());
  };

  system func postupgrade(){
    balances:=HashMap.fromIter<Principal,Nat>(balanceEntries.vals(),1,Principal.equal,Principal.hash
    );
    if (balances.size() < 1)
    {
    balances.put(owner, totalSup);}

  };

};
