({
	doInit : function(component, event, helper) {
        // Retreive all accounts during component intializtion
        helper.loadAccounts(component);
        
        var accounts = component.get("v.accounts");
        var accountList = component.get("v.accountList");

        // set the  list of the account base
        component.set("v.accounts",accountList);
        helper.upadateTotal(component);

    }
  
    
})