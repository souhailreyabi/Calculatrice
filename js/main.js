function ice(){
	that 		= this,
    this.field  = "input#nbr",
    this.button = "#body .buttons",
    this.init   = false,

    this.run = function()
    {
    	$(this.button).click(function(){
    		var valeur=$(this).html();
    		  if (that.init == false)
            {
                $(that.field).val("");
                that.init = true;
            }
            
            if (valeur != "=")
                $(that.field).val($(that.field).val()+ valeur);

            that.dispatcher(valeur);
    	});

    	
   
    },
    this.dispatcher=function(valeur){
    	if ($(this.field).val().indexOf("/") != -1)
            this.operation(valeur, "/");
        if ($(this.field).val().indexOf("*") != -1)
            this.operation(valeur, "*");
        if ($(this.field).val().indexOf("-") != -1)
            this.operation(valeur, "-");
        if ($(this.field).val().indexOf("+") != -1)
            this.operation(valeur, "+");
        if ($(this.field).val().indexOf("ac") != -1)
            this.operation(valeur, "ac");

        

    },
    this.operation=function(valeur,ops){
    	var nb = $(this.field).val().split(ops),
            result;

        if (ops == "/" ){
            result = nb[0] / nb[1];
        }

        else if (ops == "*")
            result = nb[0] * nb[1];
        else if (ops == "-")
            result = nb[0] - nb[1];
        else if (ops == "+")
            result = parseFloat(nb[0]) + parseFloat(nb[1]);

        result = Math.round((result) * 100) / 100;

        if (nb.length > 1)
        {

             if (valeur == "=")
             	if(result=="Infinity") 
                   $(this.field).val("division impossible sur zero");
               	else
                $(this.field).val(result);
            	else if (nb.length > 2)
                $(this.field).val(result + ops);
        }
        if(ops=="ac"){
	$(this.field).val("");        }
    };

    
}
