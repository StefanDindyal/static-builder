(function swing() {
    var ang  = 25,
        dAng = 5,
        ddAng = .5,
        dir  = 1,
        box = document.getElementById("box");
    
    (function setAng(ang){
        box.style.WebkitTransform =  'rotate('+ang+'deg)';
        box.style.MozTransform =  'rotate('+ang+'deg)';
        dir = -dir;
        if (dAng > 1)
            dAng -= ddAng;
        
        if (Math.abs(ang) > 0)
            setTimeout(setAng, 1000, dir * (Math.abs(ang)-dAng));
    })(ang);
    
    box.onclick = function(){
        box.style.WebkitTransform =  'rotate(-90deg)';
        box.style.MozTransform =  'rotate(-90deg)';
        setTimeout(swing, 1000);
    }
})();

var now = new Date();
var step_time = 3000;
var start_time = new Date(now.getFullYear(), now.getMonth(),
now.getDate(), 12, 0, 39, 0);
var clock_canvas, info_canvas;
var hour_hand, minute_hand, second_hand, center;
var hour_hand_shadow, minute_hand_shadow, second_hand_shadow, center_shadow;

function draw_hour_shadow(canvas){
    hour_hand_shadow = canvas.rect(223, 111, 11, 146, 3);
    hour_hand_shadow.attr({fill: "#666666", "fill-opacity": 0.4, stroke: "#999999", "stroke-opacity": 0.3, "stroke-width": 5});
}

function draw_hour(canvas){
    hour_hand = canvas.rect(218, 105, 14, 150, 3);
    hour_hand.attr({fill: "90-#262626-#515151", stroke: "#333333", "stroke-opacity": 0.5});
}

function draw_minute_shadow(canvas){
    minute_hand_shadow = canvas.rect(226, 36, 7, 221, 3);
    minute_hand_shadow.attr({fill: "#666666", "fill-opacity": 0.4, stroke: "#999999", "stroke-opacity": 0.3, "stroke-width": 4});
}

function draw_minute(canvas){
    minute_hand = canvas.rect(221, 30, 9, 225, 3);
    minute_hand.attr({fill:"90-#262626-#515151", stroke:"#333333", "stroke-opacity": 0.5});
}

function draw_second_shadow(canvas){
    second_hand_shadow = canvas.path("M221 218C227 216 232 216 237 218L232 402C232 402 227 406 224 402L224 218");
    second_hand_shadow.attr({transform: "r45,229,227", fill:
    "#71a083", "fill-opacity": 0.9, stroke: "#71a083", "stroke-opacity": 0.5, "stroke-width": 2});
}

function draw_second(canvas){
    second_hand = canvas.path("M217 216C223 214 228 214 233 216L228 400C228 404 222 404 221 400L217 216");
    second_hand.attr({transform: "r45,225,225", fill: "#a3e5bc", stroke: "#a3e5bc"});
}

function draw_center_shadow(canvas){
    center_shadow = canvas.circle(227, 229, 18);
    center_shadow.attr({fill: "#666666", "fill-opacity": 0.2, stroke: "#666666", "stroke-opacity": 0.2});
    center_shadow.glow({size: 2, fill: true, opacity: 0.5, color: "#444444"});
}

function draw_center(canvas){
    center = canvas.circle(225, 225, 20);
    center.attr({fill:"315-#262626-#3d3d3d", stroke: "232323", "stroke-width": 2});
}

function draw_hour_ticks(canvas){
    var hour_sign;
    for(i=0;i<12;i++){
        var start_x = 225+Math.round(180*Math.cos(30*i*Math.PI/180));
        var start_y = 225+Math.round(180*Math.sin(30*i*Math.PI/180));
        var end_x = 225+Math.round(195*Math.cos(30*i*Math.PI/180));
        var end_y = 225+Math.round(195*Math.sin(30*i*Math.PI/180));	
        hour_sign = canvas.path("M"+start_x+" "+start_y+"L"+end_x+" "+end_y);
    }
}

function draw_clock(){
    clock_canvas = Raphael("clock_id",450, 450);
    var background = clock_canvas.circle(225,225,218);
    background.attr({"fill":"315-#e5e5e5-#f5f5f5","stroke":"none"});
    var clock = clock_canvas.circle(225,225,215);
    clock.attr({"fill":"#f5f5f5","stroke":"none"});

//            draw_hour_ticks(clock_canvas);
    draw_minute_shadow(clock_canvas);
    draw_hour_shadow(clock_canvas);
    draw_second_shadow(clock_canvas);
    draw_center_shadow(clock_canvas);

    draw_minute(clock_canvas);
    draw_hour(clock_canvas);
    draw_center(clock_canvas);
    draw_second(clock_canvas);

    var pin = clock_canvas.circle(225, 225, 1.5);
    pin.attr("fill", "#000");    
}

function finish_rotation(start_hour, end_hour){
    // 0 hour = 3 o'clock so offset...
    var rotation = 30 * (9 + end_hour - start_hour);
    var start_x = 225 + Math.round(215*Math.cos(30*start_hour*Math.PI/180));
    var start_y = 225 + Math.round(215*Math.sin(30*start_hour*Math.PI/180));	
    var end_x = Math.round(215*Math.cos(30*end_hour*Math.PI/180)) - 215;
    var end_y = Math.round(215*Math.sin(30*end_hour*Math.PI/180)) - 215;
    var slice = clock_canvas.path("M225,225L" + start_x + "," + start_y + "a215,215 0 0,0 " + end_x + "," + end_y + "z");
    slice.attr({transform: "r" + rotation + ",225,225", fill:
    "#a3e5bc", stroke: "none", opacity: 0.1});
    slice.insertBefore(minute_hand_shadow);
    slice.animate({opacity:1.0}, 250, "easeInOut");

    $('.info').fadeIn();
    // draw_info("info_one");
}

function rotate_hands(){
    minute_hand.animateWith(second_hand, null, {transform: "r360,225,225"}, step_time, "easeInOut" );
    minute_hand_shadow.animateWith(second_hand, null, {transform: "r360,229,227"}, step_time, "easeInOut" );
    hour_hand.animateWith(second_hand, null, {transform: "r30,225,225"}, step_time, "easeInOut");
    hour_hand_shadow.animateWith(second_hand, null, {transform: "r30,229,227"}, step_time, "easeInOut");
    second_hand_shadow.animateWith(second_hand, null, {transform: "r"+(360*12 + 45)+",229,227"}, step_time, "easeInOut");
    second_hand.animate({transform: "r"+(360*12 + 45)+",225,225"}, step_time, "easeInOut", function(){
        finish_rotation(0, 1);
    });
}

function draw_info(div_id){
    info_canvas = Raphael(div_id, 400, 100);
    var info_box = info_canvas.rect(110, 10, 180, 80, 10);
    info_box.attr({transform:"r-20,200,0", fill:"#fff", stroke:"#444444", "stroke-width":"3"});
    //info_canvas.text(100,28,"Hi there!");
    info_canvas.image("./images/hi_there.jpg", 113, 13, 175, 75);
//                info_box.animate({transform: "m -1 0 0 1 400 0"}, 1000, "easeInOut");
    info_box.animate({transform: "r18,200,0"}, 1000, "easeInOut", function(){
        info_box.animate({transform: "r-15,200,0"}, 900, "easeInOut", function(){
            info_box.animate({transform: "r13,200,0"}, 750, "easeInOut", function(){
                info_box.animate({transform: "r-9,200,0"}, 650, "easeInOut", function(){
                    info_box.animate({transform: "r7,200,0"}, 450, "easeInOut", function(){
                        info_box.animate({transform: "r-2,200,0"}, 350, "easeInOut", function(){
                            info_box.animate({transform: "r1,200,0"}, 200, "easeInOut", function(){
                                info_box.animate({transform: "r0,200,0"}, 100, "easeInOut");
                            });
                        });
                    });
                });
            });
         });
    });
}