({
	doInit : function(component, event, helper) {
		//var globalId = cmp.getGlobalId();
        console.log(/*globalId + */" Hello World");
    },
    handleClick:function(component,event,helper)
    {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId":component.get("v.recordId")
        });
        navEvt.fire();
    }
    
})