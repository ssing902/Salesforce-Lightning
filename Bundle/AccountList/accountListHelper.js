({
	loadAccounts : function(cmp) {
        var action = cmp.get("c.getAccounts");
        action.setCallback(this,function(response)
        {
            var state = response.getState();
            if(state === 'SUCCESS')
            {
                cmp.set("v.accounts",response.getReturnValue());
                cmp.set("v.accountList",response.getReturnValue());
                this.updateTotal(cmp);
            }

            // Display the toast method to indicate load Status

            var toastEvent = $A.get("e.force:showToast");
            if(state==='SUCCESS')
            {
                toastEvent.setParams(
                    {
                        "title":"Success!",
                        "message":"Yours account have been loaded successfully"
                    });
            }
            else
            {
                toastEvent.setParams(
                    {
                        "title" : "Error!",
                        "message":"Something has gone wrong"
                    });
            }
            toastEvent.fire();
        });
        $A.enqueueAction(action);
    },
    updateTotal:function(cmp)
    {
        var accounts = cmp.get("v.accounts");
        cmp.set("v.totalAccounts" ,accounts.length);
    }
})