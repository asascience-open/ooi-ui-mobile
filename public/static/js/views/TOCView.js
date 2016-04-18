var TOCView = Backbone.View.extend({
    initialize: function(){
        this.tocArray = new arrays();
        this.tocArray.fetch();
        this.initDate = new Date();
    },
    render:function(){
        var msElapsed = Math.abs((new Date()).getTime() - this.initDate.getTime());
        //alert("That request took " + msElapsed + " ms.");       
    }
})
