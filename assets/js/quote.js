//HIDE

$('input').keyup(function(){
   var collected_data = collect_data($('#selected_building_type').val());
   console.log('Collected Data', collected_data);
});
$('#building_type').change(function(){

    $('#selected_building_type').val( $(this).val());

    if($(this).val() == 'none'){
        $(".residential").hide();
      $('.commercial').hide();
      $(".corporate").hide()
      $(".hybrid").hide();
      $(".elevator_type").hide();
    }
    else if($(this).val() == 'residential'){
        $(".residential").show();
      $('.commercial').hide();
      $(".corporate").hide()
      $(".hybrid").hide();
      $(".elevator_type").show();
    }
    else if($(this).val() == 'commercial'){
        $(".residential").hide();
      $('.commercial').show();
      $(".corporate").hide()
      $(".hybrid").hide();
      $(".elevator_type").show();
    }
    else if($(this).val() == 'corporate'){
        $(".residential").hide();
      $('.commercial').hide();
      $(".corporate").show()
      $(".hybrid").hide();
      $(".elevator_type").show();
    }
    else if($(this).val() == 'hybrid'){
        $(".residential").hide();
      $('.commercial').hide();
      $(".corporate").hide()
      $(".hybrid").show();
      $(".elevator_type").show();
    }
});

   
// residential
$(function(){
    $(".residential").hide();
});

// commercial
$(function(){
    $(".commercial").hide();
});

// corporate
$(function(){
    $(".corporate").hide();
});

// hybride
$(function(){
    $(".hybrid").hide();
});
// hybride
$(function(){
  $(".elevator_type").hide();
});



//variable

//var residential
var nb_apartment = $("#apartment").val()
var nb_floor_residential = $("#residential_floor").val()
var nb_basement_residential = $ ("#residential_basement").val()

//var commercial
var nb_commerce = $("#commerce").val()
var nb_floor_commercial = $("commercial_floor").val()
var nb_basement_commercial = $("commercial_basement").val()
var nb_parking_commercial = $("commercial_parking").val()
var nb_shaft_commercial = $("commercial_shaft").val()

//var corporate
var nb_companie = $("#companie").val()
var nb_floor_corporate = $("corporate_floor").val()
var nb_basement_corporate = $("corporate_basement").val()
var nb_parking_corporate = $("corporate_parking").val()
var max_occupant_corp = $("max_occupant_corp").val()

//var hybride
var nb_hybride = $("hybride").val()
var nb_floor_hybride = $("hybride_floor").val()
var nb_basement_hybride = $("hybride_basement").val()
var nb_parking_hybride = $("hybride_parking").val()
var max_occupant_hyb = $("max_occupant_hyb").val()
var activity_time = $("activity_time").val()



//RESIDENTIAL COLLECT

function collect_data(building_type){
    console.log("collect_data");
    
    console.log("building_type", building_type);
     if(building_type == 'residential') {
        var category = parseFloat($("input[name='style']:checked").val());
         console.log('category',category);
        var nb_apartment = $("#apartment").val()
         console.log("apartment", nb_apartment);
         var nb_floor_residential = $("#residential_floor").val()
         console.log("residential_floor", nb_floor_residential);
         var nb_basement_residential = $ ("#residential_basement").val()
         console.log("residential_basement", nb_basement_residential);
         //price
         
      var average_apartment = Math.ceil(nb_apartment/nb_floor_residential);
        console.log('average_apartment',average_apartment);
        var nb_elevator_residential =Math.ceil(average_apartment/6)
        console.log('nb_elevator_residential',nb_elevator_residential);
        var nb_column_lifts = Math.ceil(nb_floor_residential / 20);
       console.log("nb_column_lifts", nb_column_lifts);
       var price_residential = Math.ceil(nb_column_lifts*nb_elevator_residential*category);
       console.log('price_residential',price_residential)
        
        var qty_elevator_residential = $(".nb_elevator_residential").val(nb_elevator_residential);
console.log(qty_elevator_residential)
   

        //installation cost
        if(parseFloat($("input[id='standard']:checked").val())){
          var installation_cost_standard_r = (nb_elevator_residential*parseFloat($("input[id='standard']:checked").val()))*10/100;
          console.log('installation_cost_standard_r',installation_cost_standard_r);
  var total_price_residential = installation_cost_standard_r +price_residential;
          console.log('total_price_residential',total_price_residential)
       }
       else if(parseFloat($("input[id='premium']:checked").val())){
   var installation_cost_premium_r = (nb_elevator_residential*parseFloat($("input[id='premium']:checked").val()))*13/100;
           console.log('installation_cost_premium_r',installation_cost_premium_r);
           var total_price_residential_p = installation_cost_premium_r+price_residential;
             console.log('total_price_residential_p',total_price_residential_p)
  
       }
        else if(parseFloat($("input[id='excelium']:checked").val())){
         var installation_cost_excelium_r = (nb_elevator_residential*parseFloat($("input[id='excelium']:checked").val()))*16/100;
                 console.log('installation_cost_excelium_r',installation_cost_excelium_r);
               var total_price_residential_e = installation_cost_excelium_r+price_residential;
              console.log('total_price_residential_e',total_price_residential_e)
        
  }

  return{qty_elevator_residential,
    'installation_cost_excelium_r':installation_cost_excelium_r,
    'total_price_residential_e':total_price_residential_e,
    'total_price_residential_p':total_price_residential_p,
    'installation_cost_premium_r':installation_cost_premium_r,
    'total_price_residential':total_price_residential,
    'installation_cost_standard_r':installation_cost_standard_r,
    "nb_column_lifts": nb_column_lifts,
    'price_residential':price_residential,
    'nb_elevator_residential':nb_elevator_residential,
        'category':category,
        'average_apartment':average_apartment,
        
        'apartment': nb_apartment,
         'residential_floor': nb_floor_residential,
         'residential_basement': nb_basement_residential,
     }
     }
     else if(building_type == 'commercial') {
        var nb_commerce = Math.round($("#commerce").val())
         console.log("commerce", nb_commerce);
         var nb_floor_commercial = Math.round($("#commercial_floor").val())
         console.log("commercial_floor", nb_floor_commercial);
         var nb_basement_commercial = Math.round($("#commercial_basement").val())
         console.log("commercial_basement", nb_basement_commercial);
         var nb_parking_commercial = Math.round($("#commercial_parking").val())
         console.log("commercial_parking", nb_parking_commercial)
         var nb_shaft_commercial =Math.round( $("#commercial_shaft").val())
         console.log('commercial_shaft',nb_shaft_commercial);
        //price
         var commercial_elevator = nb_shaft_commercial;
         console.log('commercial_elevator',commercial_elevator)
        var category = parseFloat($("input[name='style']:checked").val());
        console.log('category',category);
        var price_commercial = commercial_elevator*parseFloat($("input[name='style']:checked").val());
        console.log ('price_commercial',price_commercial);
     //installation cost
         if(parseFloat($("input[id='standard']:checked").val())){
        var installation_cost_standard = (nb_shaft_commercial*parseFloat($("input[id='standard']:checked").val()))*10/100;
        console.log('installation_cost_standard',installation_cost_standard);
var total_price_commercial = installation_cost_standard +price_commercial;
        console.log('total_price_commercial',total_price_commercial)
     }
     else if(parseFloat($("input[id='premium']:checked").val())){
var installation_cost_premium = (nb_shaft_commercial*parseFloat($("input[id='premium']:checked").val()))*13/100;
        console.log('installation_cost_premium',installation_cost_premium);
        var total_price_commercial_p = installation_cost_premium+price_commercial;
        console.log('total_price_commercial_p',total_price_commercial_p)

     }
     else if(parseFloat($("input[id='excelium']:checked").val())){
      var installation_cost_excelium = (nb_shaft_commercial*parseFloat($("input[id='excelium']:checked").val()))*16/100;
              console.log('installation_cost_excelium',installation_cost_excelium);
              var total_price_commercial_e = installation_cost_excelium+price_commercial;
              console.log('total_price_commercial_e',total_price_commercial_e)
      
           }

 return{'total_price_commercial_e':total_price_commercial_e,
   'installation_cost_excelium':installation_cost_excelium,
  'installation_cost_premium':installation_cost_premium,
  'total_price_commercial_p':total_price_commercial_p,
   'total_price_commercial':total_price_commercial,
         'installation_cost_standard':installation_cost_standard,
        'price_commercial':price_commercial,
          'commercial_elevator':commercial_elevator,
           'category':category,
          'commerce': nb_commerce,
         'commercial_floor': nb_floor_commercial,
         'commercial_basement': nb_basement_commercial,
         'commercial_parking': nb_parking_commercial,
         'commercial_shaft' : nb_shaft_commercial,
     }
     }
      
     else if(building_type == 'corporate') {
        var nb_companie = $("#companie").val()
         console.log("companie", nb_companie);
         var nb_floor_corporate = parseInt($("#corporate_floor").val())
         console.log("corporate_floor", nb_floor_corporate);
         var nb_basement_corporate = parseInt($("#corporate_basement").val())
         console.log("corporate_basement", nb_basement_corporate);
         var nb_parking_corporate =parseInt($("#corporate_parking").val())
         console.log("corporate_parking", nb_parking_corporate)
         var max_occupant_corp = parseInt($("#max_occupant_corp").val())
         console.log('max_occupant_corp',max_occupant_corp)
          //price
          var category = parseFloat($("input[name='style']:checked").val());
        console.log('category',category);
          var total_occupant_corp = Math.ceil((nb_floor_corporate+nb_basement_corporate)*max_occupant_corp);
          console.log('total_occupant_corp',total_occupant_corp);
          var nb_elevator_corporate = Math.ceil(total_occupant_corp/1000);
          console.log('nb_elevator_corporate',nb_elevator_corporate)
          var nb_column_corp = Math.ceil(nb_floor_corporate/20);
          console.log('nb_column_corp',nb_column_corp)
          var price_corporate =nb_elevator_corporate*parseFloat($("input[name='style']:checked").val());
          console.log('price_corporate',price_corporate)

         if(parseFloat($("input[id='standard']:checked").val())){
        var installation_cost_standard_c= (nb_elevator_corporate*parseFloat($("input[id='standard']:checked").val()))*10/100;
        console.log('installation_cost_standard_c',installation_cost_standard_c)
var total_price_corporate = installation_cost_standard_c+price_corporate;
        
        total_price_corporate.toFixed(2)
        console.log('total_price_corporate',total_price_corporate)
   }
     else if(parseFloat($("input[id='premium']:checked").val())){
var installation_cost_premium_c = (nb_elevator_corporate*parseFloat($("input[id='premium']:checked").val()))*13/100;
        console.log('installation_cost_premium_c',installation_cost_premium_c);
        var total_price_corporate_p = installation_cost_premium_c+price_corporate;
        console.log('total_price_corporate_p',total_price_corporate_p)

     }
     else if(parseFloat($("input[id='excelium']:checked").val())){
      var installation_cost_excelium_c = (nb_elevator_corporate*parseFloat($("input[id='excelium']:checked").val()))*16/100;
              console.log('installation_cost_excelium_c',installation_cost_excelium_c);
              var total_price_corporate_e = installation_cost_excelium_c+price_corporate;
              console.log('total_price_corporate_e',total_price_corporate_e)
      
           }

         return {'installation_cost_excelium_c':installation_cost_excelium_c,
           'total_price_corporate_e':total_price_corporate_e,
           'total_price_corporate_p':total_price_corporate_p,
           'installation_cost_premium_c':installation_cost_premium_c,
           'installation_cost_standard_c':installation_cost_standard_c,
           'total_price_corporate':total_price_corporate,
   'price_corporate':price_corporate,
           'nb_column_corp':nb_column_corp,
           'nb_elevator_corporate':nb_elevator_corporate,
           'total_occupant_corp':total_occupant_corp, 
           'companie': nb_companie,
        'corporate_floor': nb_floor_corporate,
         'corporate_basement': nb_basement_corporate,
         'corporate_parking': nb_parking_corporate,
         'max_occupant_corp' : max_occupant_corp,
        }
    }

     else if(building_type == 'hybrid') {
        var nb_hybride = parseInt($("#hybride").val())
         console.log("hybride", nb_hybride);
         var nb_floor_hybride = parseInt($("#hybride_floor").val())
         console.log("hybride_floor", nb_floor_hybride);
         var nb_basement_hybride = parseInt($("#hybride_basement").val())
         console.log("hybride_basement", nb_basement_hybride);
         var nb_parking_hybride = parseInt($("#hybride_parking").val())
         console.log("hybride_parking", nb_parking_hybride);
         var max_occupant_hyb = parseInt($("#max_occupant_hyb").val())
         console.log('max_occupant_hyb',max_occupant_hyb);
         var activity_time = parseInt($("#activity_time").val())
         console.log('activity_time',activity_time);   
         
         //price
          var category = parseFloat($("input[name='style']:checked").val());
        console.log('category',category);
          var total_occupant_hyb = Math.ceil((nb_floor_hybride+nb_basement_hybride)*max_occupant_hyb);
          console.log('total_occupant_hyb',total_occupant_hyb);
          var nb_elevator_hybrid = Math.ceil(total_occupant_hyb/1000);
          console.log('nb_elevator_hybrid',nb_elevator_hybrid)
          var nb_column_hyb = Math.ceil(nb_floor_hybride/20);
          console.log('nb_column_hyb',nb_column_hyb)
          var price_hybrid =nb_elevator_hybrid*parseFloat($("input[name='style']:checked").val());
          console.log('price_hybrid',price_hybrid)

          if(parseFloat($("input[id='standard']:checked").val())){
            var installation_cost_standard_h= (nb_elevator_hybrid*parseFloat($("input[id='standard']:checked").val()))*10/100;
            console.log('installation_cost_standard_h',installation_cost_standard_h)
    var total_price_hybrid = installation_cost_standard_h+price_hybrid;
            
            total_price_hybrid.toFixed(2);
            console.log('total_price_hybrid',total_price_hybrid)
       }
         else if(parseFloat($("input[id='premium']:checked").val())){
    var installation_cost_premium_h = (nb_elevator_hybrid*parseFloat($("input[id='premium']:checked").val()))*13/100;
            console.log('installation_cost_premium_h',installation_cost_premium_h);
            var total_price_hybrid_p = installation_cost_premium_h+price_hybrid;
            console.log('total_price_hybrid_p',total_price_hybrid_p)
            total_price_hybrid_p.toFixed(2);
            
         }
         else if(parseFloat($("input[id='excelium']:checked").val())){
          var installation_cost_excelium_h = (nb_elevator_hybrid*parseFloat($("input[id='excelium']:checked").val()))*16/100;
                  console.log('installation_cost_excelium_h',installation_cost_excelium_h);
                  var total_price_hybrid_e = installation_cost_excelium_h+price_hybrid;
                  console.log('total_price_hybrid_e',total_price_hybrid_e)
          
               }


 return {'installation_cost_excelium_h':installation_cost_excelium_h,
  'total_price_hybrid_e':total_price_hybrid_e,
  'installation_cost_premium_h':installation_cost_premium_h,
   'total_price_hybrid_p':total_price_hybrid_p,
   'total_price_hybrid':total_price_hybrid,
   'installation_cost_standard_h':installation_cost_standard_h,
   'price_hybrid':price_hybrid,
   'nb_column_hyb':nb_column_hyb,
  'nb_elevato_hybrid':nb_elevator_hybrid,
   'total_occupant_hyb':total_occupant_hyb,
  'hybride': nb_hybride,
         'hybride_floor': nb_floor_hybride,
         'hybride_basement': nb_basement_hybride,
         'hybride_parking': nb_parking_hybride,
         'max_occupant_hyb' : max_occupant_hyb,
         'activity_time': activity_time,
     }
     }
    }
    
    
    // var elevator_shaft_residential  = document.getElementById("total").value;
    // console.log("commercial_shaft",elevatorShaftCommercial);
    // $('#average_elevators').html(elevatorShaftCommercial);
 
    

   
 
         
  
  


       
 
       

    


// if(building_type == "residential"){
//   var total_redidential = nb_apartment/nb_floor_residential;
//   consol.log("nb_apartment/nb_floor_residential",total_residential);
  
// }
// return {'nb_apartment/nb_floor_residential': total_residential,
// }


  
    

// function showData()
// {
//     $("#submit").click(function(){
//  $("#total").html(building)
//     )}
// )};

/*$(document).ready(function(){
    $("button").click(function(){
      $("p").html("Hello <b>world!</b>");
    });
  });*/
    

// //residential calcul

// function compute_data(collected_data){
//       console.log(collected_data['#apartment']);
//       console.log(collected_data['#residential_floor']);
//       console.log(collected_data['#residential_basement']);
      
// //residential calcul


    




