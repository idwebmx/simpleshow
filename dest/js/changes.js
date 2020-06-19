$('.dragme-001, .dragme-002, .dragme-003, .dragme-004, .dragme-005, .dragme-006').draggable({
    helper: 'clone'
});

$('.dropme1').droppable({
    drop: function() {
        $('.dropme1').append($('.dragme-001'));
        $('.dragme-001').addClass('doneme faa-float animated').removeClass('dragme-001');
    }
});

$('.dropme2').droppable({
    drop: function() {
        $('.dropme2').append($('.dragme-002'));
        $('.dragme-002').addClass('doneme faa-float animated').removeClass('dragme-002');
    }
});

$('.dropme3').droppable({
    drop: function() {
        $('.dropme3').append($('.dragme-003'));
        $('.dragme-003').addClass('doneme faa-float animated').removeClass('dragme-003');
    }
});

$('.dropme4').droppable({
    drop: function() {
        $('.dropme4').append($('.dragme-004'));
        $('.dragme-004').addClass('doneme faa-float animated').removeClass('dragme-004');
    }
});

$('.dropme5').droppable({
    drop: function() {
        $('.dropme5').append($('.dragme-005'));
        $('.dragme-005').addClass('doneme faa-float animated').removeClass('dragme-005');
    }
});

$('.dropme6').droppable( {
    disabled: false,
    drop: function() {
        $('.dropme6').append($('.dragme-006'));
        $('.dragme-006').addClass('doneme faa-float animated').removeClass('dragme-006');

        
        var findClass = 'doneme';

        $('.ui-draggable').each(function(){
            if( $(this).hasClass(findClass) ){
                setTimeout(function(){
                    $("#c-modal, #modal-end").show();
                    // Wrap every letter in a span
                    var textWrapper = document.querySelector('.ml5');
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                    anime.timeline({loop: false})
                    .add({
                        targets: '.ml5 .letter',
                        scale: [4,1],
                        opacity: [0,1],
                        translateZ: 0,
                        easing: "easeOutExpo",
                        duration: 950,
                        delay: (el, i) => 70*i
                    }).add({
                        targets: '.ml5',
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                    });
                    setTimeout(function(){
                        // Wrap every letter in a span
                        var textWrapper = document.querySelector('.ml6');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                        $(".ml6").css("visibility", "initial");
                        anime.timeline({loop: false})
                        .add({
                            targets: '.ml6 .letter',
                            scale: [4,1],
                            opacity: [0,1],
                            translateZ: 0,
                            easing: "easeOutExpo",
                            duration: 950,
                            delay: (el, i) => 70*i
                        }).add({
                            targets: '.ml6',
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000
                        });
                        setTimeout(function(){
                            // Wrap every letter in a span
                            var textWrapper = document.querySelector('.ml7');
                            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                            $(".ml7").css("visibility", "initial");
                            anime.timeline({loop: false})
                            .add({
                                targets: '.ml7 .letter',
                                scale: [4,1],
                                opacity: [0,1],
                                translateZ: 0,
                                easing: "easeOutExpo",
                                duration: 950,
                                delay: (el, i) => 70*i
                            }).add({
                                targets: '.ml7',
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });                        
                        }, 1500);                        
                    }, 1500);
                }, 2500);
            }
            return false;
        });
        
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml3');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
        .add({
            targets: '.ml3 .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70*i
        }).add({
            targets: '.ml3',
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    }
});

$(document).ready(function(){

    $("#id-btn-start").click( function(){
        $("#c-modal, #modal-start").hide();        

        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml2');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
        .add({
            targets: '.ml2 .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70*i
        }).add({
            targets: '.ml2',
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    });
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.ml3 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
}).add({
    targets: '.ml3',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});


setTimeout(function(){
    $(".ml4").css("visibility", "initial");
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml4');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '.ml4 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
    }).add({
        targets: '.ml4',
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}, 3500);


   
