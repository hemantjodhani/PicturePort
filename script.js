$(document).ready(function(){

    var movie_url = "https://www.nollyverse.com/movie/phenomena/download/"
    var web_shows_url = "https://www.nollyverse.com/serie/wednesday/season-1"
    // var horror_movie_url = "https://adhirit.online/lights-out-2016-full-movie-download-for-free-adhiritmovies/"
    var selectedValue = ""

    $('input[type="radio"][name="type"]').change(function() {
         selectedValue = $('input[type="radio"][name="type"]:checked').val();
        if(selectedValue == "web-shows"){
            $(".name-input").show()
            $(".season-input,.season-text").show()
            $(".name-input").attr("placeholder" , "Search a Webshow")
            $("body").css("background-image", "url(pexels-ellie-burgin-4057890.jpg)")
        }
        if(selectedValue == "movie"){
            $(".name-input").show()
            $(".season-input,.season-text").hide()
            $(".name-input").attr("placeholder" , "Search a Movie")
            $("body").css("background-image", "url(pexels-boys-in-bristol-photography-15150350.jpg)")
        }     
        else{
            $("body").css("background-color", "white");
            $("body").css("color", "black");
        }
    });


    $(".submit-btn").click(function(){

        if(selectedValue == "web-shows"){
            $(".submit-btn").attr("href" , "")
            var user_input = $(".name-input").val().replaceAll("'", "").replaceAll(":", "");
            var season_input = $(".season-input").val()
            if(user_input != "" && season_input != ""){
                user_input = $.trim(user_input);
                var replaced_input = user_input.replaceAll(" " , "-").toLowerCase();
                web_shows_url = "https://www.nollyverse.com/serie/"+replaced_input+"/season-"+season_input;
                $(".submit-btn").attr("href" , web_shows_url)
                $("input[name='myRadio'][checked]").prop("checked", false);
                $(".name-input").val("")
                $(".season-input").val("")
            }
            else{
                alert("Please fill proper Details")
            }
        }
        if(selectedValue == "movie"){
            $(".submit-btn").attr("href" , "")
            var movie_name = $(".name-input").val().replaceAll("'", "").replaceAll(":", "");
            if(movie_name != ""){
                movie_name = $.trim(movie_name);
                var replaced_input = movie_name.replaceAll(" " , "-").toLowerCase();
                movie_url = "https://www.nollyverse.com/movie/"+replaced_input+"/download/"
                $(".submit-btn").attr("href" , movie_url);
                $("input[name='myRadio'][checked]").prop("checked", false);          
                $(".name-input").val("")
                $(".season-input").val("")   
            }
            else{
                alert("Please fill proper Details")
            }
        }  
    });

});
