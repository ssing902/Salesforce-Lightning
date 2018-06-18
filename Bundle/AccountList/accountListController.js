({
	doInit : function(component, event, helper) {
        // Retreive all accounts during component intializtion
        helper.loadAccounts(component);
        
       
    },
    handleSelect : function(component,event,helper)
    {
        var accounts = component.get("v.accounts");
        var accountList = component.get("v.accountList");
        
        // Get the selected option:
        var selected = event.getSource().get("v.value");
        
        var filter = [];
        var k = 0;
        for(var i =0;i<accountList.Length;i++)
        {
            var c = accountList[i];
            if(selected == "All")
            {
                filter[k] =c;
                k++;
            }
            else
            {
                filter = accountList;
            }
        }
        // set the filtered list of the contact based on the selected option
        component.set("v.accounts",filter);
        helper.updateTotal(component);
   }
})