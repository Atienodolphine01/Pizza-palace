
$(function(){
    $('.sum').hide();
    $('.data').hide();

    $('#checkout').click(function(){
        let flavour= $('#flavour option:selected').val();
        let size= $('#size option:selected').val();
        let crust= $('#crust option:selected').val();
        let topping= $('#topping option:selected').val();
        let number= $('#number').val();
        //console.log(size);

        let order=(flavour,size,crust,topping,number,total)=> {
            return{flavour,size,crust,topping,number,total};
        };

        let price, totalPrice;
            switch(flavour){
              case flavour= "raspberry":
                  switch(size){
                    case size= "large":
                        price= 1200;
                        if (crust==="thin"){
                            totalPrice = (price * number)+ 150;
                        } else if(crust==="thick"){
                            totalPrice = (price * number)+ 200;
                        } else if(crust==="flatbread"){
                            totalPrice = (price * number)+ 190;
                        }
                        break;
                    case size="medium":
                        price= 600;
                        if (crust==="thin"){
                            totalPrice = (price * number)+ 150;
                        } else if(crust==="thick"){
                            totalPrice = (price * number)+ 200;
                        } else if(crust==="flatbread"){
                            totalPrice = (price * number)+ 190;
                        }
                        break; 
                    case size="small":
                        price= 300;
                        if (crust==="thin"){
                            totalPrice = (price * number)+ 150;
                        } else if(crust==="thick"){
                            totalPrice = (price * number)+ 200;
                        } else if(crust==="flatbread"){
                            totalPrice = (price * number)+ 190;
                        }
                        break;          
                }
                break;
              case flavour="bufsticks":
                  switch(size){
                    case size="large":
                        price= 1200;
                          if (crust==="thin"){
                              totalPrice = (price * number)+ 150;
                          } else if(crust==="thick"){
                              totalPrice = (price * number)+ 200;
                          } else if(crust==="flatbread"){
                              totalPrice = (price * number)+ 190;
                          }
                          break;
                    case size="medium":
                        price= 600;
                          if (crust==="thin"){
                              totalPrice = (price * number)+ 150;
                          } else if(crust==="thick"){
                              totalPrice = (price * number)+ 200;
                          } else if(crust==="flatbread"){
                              totalPrice = (price * number)+ 190;
                          }
                          break; 
                    case size="small":
                        price= 300;
                          if (crust==="thin"){
                              totalPrice = (price * number)+ 150;
                          } else if(crust==="thick"){
                              totalPrice = (price * number)+ 200;
                          } else if(crust==="flatbread"){
                              totalPrice = (price * number)+ 190;
                          }
                          break;
                  }
                break; 
             case flavour= "chicken":
                  switch(size){
                    case size="large":
                        price= 1200;
                          if (crust==="thin"){
                              totalPrice = (price * number)+ 150;
                          } else if(crust==="thick"){
                              totalPrice = (price * number)+ 200;
                          } else if(crust==="flatbread"){
                              totalPrice = (price * number)+ 190;
                          }
                          break;
                    case size="medium":
                        price= 600;
                          if (crust==="thin"){
                              totalPrice = (price * number)+ 150;
                          } else if(crust==="thick"){
                              totalPrice = (price * number)+ 200;
                          } else if(crust==="flatbread"){
                              totalPrice = (price * number)+ 190;
                          }
                          break; 
                    case size="small":
                        price= 300;
                          if (crust==="thin"){
                              totalPrice = (price * number)+ 150;
                          } else if(crust==="thick"){
                              totalPrice = (price * number)+ 200;
                          } else if(crust==="flatbread"){
                              totalPrice = (price * number)+ 190;
                          }
                          break; 
                  }  
              case flavour= "periperi":
                  switch(size){
                    case size="large":
                        price= 1200;
                          if (crust==="thin"){
                              totalPrice = (price * number)+ 150;
                                      } else if(crust==="thick"){
                              totalPrice = (price * number)+ 200;
                          } else if(crust==="flatbread"){
                              totalPrice = (price * number)+ 190;
                          }
                          break;
                    case size="medium":
                        price= 600;
                          if (crust==="thin"){
                              totalPrice = (price * number)+ 150;
                          } else if(crust==="thick"){
                              totalPrice = (price * number)+ 200;
                          } else if(crust==="flatbread"){
                              totalPrice = (price * number)+ 190;
                          }
                          break; 
                    case size="small":
                        price= 300;
                          if (crust==="thin"){
                              totalPrice = (price * number)+ 150;
                          } else if(crust==="thick"){
                              totalPrice = (price * number)+ 200;
                          } else if(crust==="flatbread"){
                              totalPrice = (price * number)+ 190;
                          }
                          break;  
                  } 
                  break;         
          }
          switch(topping){
            case topping = "sausages":
                totalPrice = totalPrice + 150;
                break;

            case topping = "bacon":
                totalPrice = totalPrice + 300;
                break; 
            
            case topping = "tomatoes":
                totalPrice = totalPrice + 100;
                break;    

            case topping = "minced":
                totalPrice = totalPrice + 300;
                break;    
          }

        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        //console.log(newOrder);   

        $('.sum').slideDown(2000);
        $('.data').slideUp(2000);
        $('#list').slideDown(2000);
        $('.deliver').show(1000);
        $('.pick').show(1000);

        $('#list').text(" ");
        $('#list').append("<br>" + "Flavour :  " + newOrder.flavour + "<br>" + "Size :  " + newOrder.size + "<br>"
         + "Crust :  " + newOrder.crust + "<br>" + "Topping :  " + newOrder.topping + "<br>" + "Number :  "
         + newOrder.number + "<br>" + "Total price :  " + newOrder.total + "<br><br>").css('color', 'black').css('font-size', '24px');

    });
    $(".deliver").click(function(){
        $('.sum').slideUp();
        $('#list').slideUp();
        $('.sum').text("Please enter your details").slideDown();
        $('.deliver').hide(1000);
        $('.pick').hide(1000);
        $('.data').slideDown();
    });
    $(document).ready(function(){
        $("button#make").click(function(event){
            // event.preventDefault();
            let person = $("input#name").val();
            let phone = $("input#phone").val();
            let location = $("input#location").val();

            if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
                alert(person+", We have recieved your order and "+phone+" . Your delivery charge is ksh150 plus the total amount of ordered pizza. It will be delivered to you at "+location+ ".  ");
            }
            else {
                alert("Please fill in the details for delivery!");
            }
        });
    });        
});