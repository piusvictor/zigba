//Global variables declaration 
var insulation=[],roof=[],water=[],site=[],project=[],transport=[],pollution=[],economics=[],education=[],social=[],renewable=[],daylight=[];

$(document).ready(function(){



    $('.sidebtn').click(function(){
        $('.sidebtn').css('display','none');
        $('.side-dialog').fadeIn();
        $('.side-dialog').css('display','block');
    });

    $('.close').click(function(){
        $('.side-dialog').fadeOut();
        $('.side-dialog').css('display','none');
        $('.sidebtn').fadeIn();
        $('.sidebtn').css('display','block');
    });
    
    $('.secwigt').click(function(){

        if($('#areatxt').val()=="" || $('#latitude1').val()=="")
        alert('Please enter both Area and Latitude then try again!');

        else{


            //calculate the area and latitude
            calculatePanels(getArea1());
            latitude(getlat1());


            $('.first-widget').fadeOut();
        
        $('.first-widget').remove();
        $('.second-widget').fadeIn();
        $('.sidebtn').css('display','block');
        $('.second-widget').css('display','block');

        }
        
    });


    
    //second widget area
    $('.generate').click(function(){


        if($('#houseArea').val()=="" || $('#latitude2').val()=="")
        alert('Please enter both Area and Latitude then try again!');

        else{
        calculatePanels(getArea2());
        latitude(getlat2());
    }

        /*$('.energy').css('display','block');
        $('.material').css('display','block');
        $('.water').css('display','block');*/
    });
    
    $('#materialSelect').change(function(){
        $('.materialText').text($('#materialSelect option:selected').text());
       selected=$('#materialSelect').val();
        $('.materialValue').text(selected);
        $('#watchSelectedValue').val(selected);


    });

//reflectance Material
    $('#reflectanceMaterial').change(function(){
        $('.materialText').text($('#materialSelect option:selected').text());
       selected=$('#reflectanceMaterial').val();
       // $('.materialValue').text(selected);
        $('#reflectanceSelectedValue').val(selected);


    });


    //field site
    $('#fieldSelect').change(function(){
        $('#fieldSelectedValue').val($('#fieldSelect option:selected').text());
       selected=$('#fieldSelect').val();
       // $('.materialValue').text(selected);
        //$('#fieldSelectedValue').val(selected);


    });


    //Transport Access
    $('#transportSelect').change(function(){
        $('#transportSelectedValue').val($('#transportSelect option:selected').text());
       selected=$('#fieldSelect').val();
       // $('.materialValue').text(selected);
        //$('#fieldSelectedValue').val(selected);


    });



    $('.clear').click(function(){
        /*
        $('#materialSelect').val('0').change(); 
        $('.energy').css('display','none');
        $('.material').css('display','none');
        $('.water').css('display','none');
        */

       window.location.assign("sbat.html");
    });

    

    $(".modal-result").click(function(){

       

        insulationResult();
        roofResult();
        daylightResult();
        waterResult();
        siteResult();
        renewResult();
        projectResult();
        economicsResult();
        transportResult();
        pollutionResult();
        educationResult();
        socialResult();

       
         if(insulation.length<1){
             
            alert('Please select atleast one option from Insulation Section');
           
         }

         else if(roof.length<1){
             
            alert('Please select atleast one option from Roof Section');
           
         }

         

         

         else if(renewable.length<1){
            alert('Please select atleast one option from Renewable Section');
            
           
         }

         else if(daylight.length<1){
            alert('Please select atleast one option from Daylight Section');
            
           
         }

         else if(water.length<1){
             
            alert('Please select atleast one option from Water Section');
           
         }

         else if(project.length<1){
            alert('Please select atleast one option from Project Section');
            
           
         }



         else if(site.length<1){
             
            alert('Please select atleast one option from Sustainable site Section');
           
         }

         else if(economics.length<1){
            alert('Please select atleast one option from Economics Section');
            
           
         }

         else if(transport.length<1){
             
            alert('Please select atleast one option from Transport Section');
           
         }

         else if(pollution.length<1){
            alert('Please select atleast one option from Pollution Section');
            
           
         }

         else if(education.length<1){
            alert('Please select atleast one option from Education Section');
            
           
         }

         else if(social.length<1){
            alert('Please select atleast one option from Social section');
            //return;
           
         }

         else if(daylight.length>0&&social.length>0&&education.length>0&&project.length>0&&water.length>0&&economics.length>0&&renewable.length>0&&site.length>0&&pollution.length>0&&roof.length>0&&insulation.length>0)
         {
             $("#myModal").modal("show"); 
            //copying modal div contents to main printable area
            $("#enegyPerform1").html($('#print-view').html());
         }

         else
         {
             alert('Please make sure you select atleast one option from selectable section and try again');
         }

















            

    });


        //eventloop for listening modal event
        $("#myModal").on('hide.bs.modal', function(){
            $("#enegyPerform1").html('');
            insulation=[];roof=[];water=[];site=[];project=[];transport=[];pollution=[];economics=[];education=[];social=[];renewable=[];daylight=[];
        });


            //Print function
            $("#print-btn").click(function(){               
                
                alert('Sorry this is a paid feature that cost $45,please pay to enjoy printing your assessment Report');
              //  window.print();  
               // $("#enegyPerform1").html('');

               
            });    

    
 });//documentReady ends


        //insulation-result selected

        function insulationResult(){
         

            var html="";

            var daylightCount=$("input[name='insulation']").length;
            var daylightCheckedCount=$("input[name='insulation']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='insulation']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                insulation.push($(this).val());
                
            });
            if(html==""){              
                return
               
                //$("#myModal .close").click();     
                 
                          }               

            else{

                var htmlEnergy='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar progress-bar-striped progress-bar-animated " style="width:100%">100%</div></div>';
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

                $(".energy-results-clone").html("");

                $(".energy-results").clone().appendTo(".energy-results-clone");
                $(".energy-results-clone").append(htmlEnergy);

                $('.insulation-result').html(html);

                //copying cooling results to printable view
                $(".cooling-results-clone").html("");
                $(".cooling-results").clone().appendTo(".cooling-results-clone"); 
                
                
                //copying water results to printable view
                $(".water-result-clone").html("");
                $(".water-results").clone().appendTo(".water-result-clone"); 

                //copying daylighting results to printable view
                $(".daylight-result-clone").html("");
                $(".daylight-results").clone().appendTo(".daylight-result-clone"); 

                
                
                // //copying modal div contents to main printable area
                // $("#enegyPerform1").html($('#print-view').html());
               // $("#myModal").modal("show");             

            }    
               
        }


        // roof-material select results
        function roofResult(){
         

            var html="";

            var daylightCount=$("input[name='roof']").length;
            var daylightCheckedCount=$("input[name='roof']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='roof']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                roof.push($(this).val());
                
            });
            if(html==""){              
                //alert('Please select atleast one option from Roof');
                //$("#myModal .close").click();     
                 return; 
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
                //$("#myModal").modal("show");
                $('.roofing-result').html(html);             

            }    
               
        }


        //water select results
        function waterResult(){
         

            var html="";
            var daylightCount=$("input[name='water']").length;
            var daylightCheckedCount=$("input[name='water']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='water']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                water.push($(this).val());
                
            });

            //calculating the percentage
           // html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            if(html==""){              
                //alert('Please select atleast one option from water');
                //$("#myModal .close").click();     
                return; 
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
                //$("#myModal").modal("show");
                $('.water-selected-list').html(html);             

            }    
               
        }


        //water select results
        function daylightResult(){
         

            var html="";
            var daylightCount=$("input[name='daylight']").length;
            var daylightCheckedCount=$("input[name='daylight']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            $.each($("input[name='daylight']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                daylight.push($(this).val());
                
            });

            //calculating the percentage
                   // html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            if(html==""){              
                //alert('Please select atleast one option from water');
                //$("#myModal .close").click();     
                return; 
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
                //$("#myModal").modal("show");
                $('.daylight-selected-list').html(html);             

            }    
               
        }


        //progressbar status color function

        function colorStatus(percentValue){
            //let classCol="";
            
            if(percentValue>=40 && percentValue<50)
                return "bg-warning";
            else if(percentValue>=50 && percentValue<60)
                return "bg-primary";    
            else if(percentValue>=60 && percentValue<80)
               return "bg-info";
            else if(percentValue>=80)
                 return "bg-success";
            else
                  return "bg-danger";


        }


        //sustainable site select results
        function siteResult(){
         

            var html="";

            var daylightCount=$("input[name='site']").length;
            var daylightCheckedCount=$("input[name='site']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='site']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                site.push($(this).val());
                
            });
            if(html==""){              
                //alert('Please select atleast one option from site');
                //$("#myModal .close").click();     
                return; 
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
                //$("#myModal").modal("show");
                $('.site-result').html(html);             

            }    
               
        }


          //renewable energy select results
          function renewResult(){
         

            var html="";

            var daylightCount=$("input[name='renewable']").length;
            var daylightCheckedCount=$("input[name='renewable']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='renewable']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                renewable.push($(this).val());
                
            });
            if(html==""){              
               // alert('Please select atleast one option from renewable energy');
                //$("#myModal .close").click();     
                return; 
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
                //$("#myModal").modal("show");
                $('.renewable-result').html(html);             

            }    
               
        }




        //project select results
        function projectResult(){
         

            var html="";
            var daylightCount=$("input[name='project']").length;
            var daylightCheckedCount=$("input[name='project']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='project']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                project.push($(this).val());

                
            });
            if(html==""){              
               // alert('Please select atleast one option from Projects');
                //$("#myModal .close").click();     
                return;
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
                //$("#myModal").modal("show");
                $('.project-result').html(html);             

            }    
               
        }

        //transport select results
        function transportResult(){
         

            var html="";
            var daylightCount=$("input[name='transport']").length;
            var daylightCheckedCount=$("input[name='transport']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='transport']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                transport.push($(this).val());
                
            });
            if(html==""){              
                //alert('Please select atleast one option from Transport');
                //$("#myModal .close").click();     
                return;
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
                //$("#myModal").modal("show");
                $('.transport-result').html(html);             

            }    
               
        }

        //pollution select results
        function pollutionResult(){
         

            var html="";
            var daylightCount=$("input[name='pollution']").length;
            var daylightCheckedCount=$("input[name='pollution']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='pollution']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                pollution.push($(this).val());
                
            });
            if(html==""){              
                //alert('Please select atleast one option from Pollution');
                //$("#myModal .close").click();     
                return;
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
                //$("#myModal").modal("show");
                $('.pollution-result').html(html);             

            }    
               
        }

        //Economics select results
        function economicsResult(){
         

            var html="";
            var daylightCount=$("input[name='economics']").length;
            var daylightCheckedCount=$("input[name='economics']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='economics']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                economics.push($(this).val());
                
            });
            if(html==""){              
                //alert('Please select atleast one option from Economics');
                //$("#myModal .close").click();     
                return;
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
                //$("#myModal").modal("show");
                $('.economics-result').html(html);             

            }    
               
        }

        //Education select results
        function educationResult(){
         

            var html="";
            var daylightCount=$("input[name='education']").length;
            var daylightCheckedCount=$("input[name='education']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='education']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                education.push($(this).val());
                
            });
            if(html==""){              
                //alert('Please select atleast one option from Education');
                //$("#myModal .close").click();     
                return;
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
               // $("#myModal").modal("show");
                $('.education-result').html(html);             

            }    
               
        }

        //social select results
        function socialResult(){
         

            var html="";
            var daylightCount=$("input[name='social']").length;
            var daylightCheckedCount=$("input[name='social']:checked").length;
            var daylightPercent=((daylightCheckedCount * 100) / daylightCount).toFixed(1);
            var progIndicator=colorStatus(daylightPercent);

            //calculating the percentage
            //html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';

            $.each($("input[name='social']:checked"), function(){            
              
                html+="<li class='bullets'>"+$(this).val()+"</li>";
                social.push($(this).val());
                
            });

           // html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
            if(html==""){              
                //alert('Please select atleast one option from Social');
                //$("#myModal .close").click();     
                return;  
                          }               

            else{
                html+='<br><b>Performance Score:</b><div class="progress" style="width:70%"><div class="progress-bar '+progIndicator+' progress-bar-striped progress-bar-animated " style="width:'+daylightPercent+'%">'+daylightPercent+'%</div></div>';
                //$("#myModal").modal("show");
                $('.social-result').html(html);             

            }    
               
        }




    function getArea1(){
    
        return $("#areatxt").val()
    }
    
    function getArea2(){
    
        return $("#houseArea").val()
    }

    function getlat1(){
    
        return $("#latitude1").val()
    }

    function getlat2(){
    
        return $("#latitude2").val()
    }




    function latitude(lat){
        addlat=parseInt(lat)+10;
        $('span.latitudeSpecified').html(lat+"&deg;");
        $('span.latitudePitch').html(addlat+"&deg;");
    }
    
    function calculatePanels(area){

        Area=parseInt(area);
        rainAmount=Area*600;
        waterAmount=Area*0.45;
        bulbpower=Math.round(Area*0.8333333333);
        power=Area*25;
        lumens=power*10;
        _window=Area*0.1;
        _vegetableArea=Area*0.2;
        _grazingArea=Area*0.3;

        $('span.areaSpecified').html(Area+" m<sup>2</sup>");
        $('span.vegetableArea').html(_vegetableArea+" m<sup>2</sup>");
        $('span.grazingArea').html(_grazingArea+" m<sup>2</sup>");
        $('span.luxAcquired').html(Area+" lux");
        $('span.window').html(_window+"%");

        $('span.bulbwatts').text(bulbpower);
        $('span.bulbwatts').simpleMoneyFormat();
        $('span.bulbwatts').append("W");
        $('span.wattslumens').text(power);
        $('span.wattslumens').simpleMoneyFormat();
        $('span.wattslumens').append("W or "+lumens+"Lumens");

            //+"W or "+lumens+"Lumens" );

        $('.rainAmount').text(rainAmount);        
        $('.rainAmount').simpleMoneyFormat();
        $('.rainAmount').append(" Litres");

        $('.waterAmount').text(waterAmount);        
        $('.waterAmount').simpleMoneyFormat();
        $('.waterAmount').append(" Litres");




        if(Area>=50 && Area<=150)
        $('.panelsNeeded').text(12);
        //alert("Area range is 50-150");

        else if(Area>=150 && Area<=250)
        $('.panelsNeeded').text(18);
        //alert("Area range is 150-250");

        else if(Area>=250 && Area<=350)
        $('.panelsNeeded').text(24);
        //alert("Area range is 250-350");

        else if(Area>350)
        $('.panelsNeeded').text(32);
        //alert("Area range is greater than 350");
        else
        $('.panelsNeeded').text(12);

    } 



   
    
    


