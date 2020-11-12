$('#sideBarCnt').css({'width': $('.sideBar').width() + 'px'})
$('.container .head').css({'width': $('.docContainer').width() + 'px'})
$('#fullTreeMenuListContainer').css({'height': 'calc(100vh - 245px)'})

if ($('.docContainer').height() + 125 > document.body.clientHeight) {
    $('.history').addClass('history-fixed')
}

$(window).resize(function() {
    $('#sideBarCnt').css({'width': $('.sideBar').width() + 'px'})
    $('.container .head').css({'width': $('.docContainer').width() + 'px'})
    realFunc()
})

window.addEventListener('scroll', realFunc);

function realFunc(){
    var sd = $(window).scrollTop();
    var dcheight = $('.docContainer').height() + 65 - sd
    if (sd > 0 && dcheight < document.body.clientHeight) {
        $('.history').removeClass('history-fixed')
    } else {
        if (!$('.history').hasClass('history-fixed')) {
            $('.history').addClass('history-fixed')
        }
        if ($('.docContainer').height() + 125 < document.body.clientHeight) {
            $('.history').removeClass('history-fixed')
        }
    }
    if (breakpoint() == 'lg') {
        if (sd > 65 && dcheight>0) {
            if (!$('.subHeadWrapper').hasClass('shw-fixed')) {
                $('.subHeadWrapper').addClass('shw-fixed')
                $('.docContainer').addClass('dc-fixed')
                $('#sideBarCnt').addClass('ftm-fixed')
                $('.rightSideMenu').addClass('rsm-fixed')
                $('#docHead').addClass('ch-fixed')
            }
            if (dcheight > document.body.clientHeight) {
                $('#sideBarCnt.ftm-fixed').css({'height': 'calc(100vh - 120px)'})
                $('#sideBarCnt.ftm-fixed #fullTreeMenuListContainer').css({'height': 'calc(100vh - 180px)'})
                $('.rightSideMenu.rsm-fixed').css({'height': 'calc(100vh - 110px)'})
            } else {
                $('#sideBarCnt.ftm-fixed').css({'height': (dcheight - 40) + 'px'})
                $('#sideBarCnt.ftm-fixed #fullTreeMenuListContainer').css({'height': (dcheight - 90) + 'px'})
                $('.rightSideMenu.rsm-fixed').css({'height': (dcheight - 40) + 'px'})
            }
            $('.markdown-body').css({'margin-top': (100 + $('.container .head').height()) + 'px'})
        } else {
            $('.subHeadWrapper').removeClass('shw-fixed')
            $('.docContainer').removeClass('dc-fixed')
            $('#sideBarCnt').removeClass('ftm-fixed')
            $('.rightSideMenu').removeClass('rsm-fixed')
            $('.container .head').removeClass('ch-fixed')
            $('.markdown-body').css({'margin-top': '40px'})
        }
    }
    if (breakpoint() == 'md') {
        if (sd > 65 && dcheight > 0) {
            if (!$('.subHeadWrapper').hasClass('shw-fixed')) {
                $('.subHeadWrapper').addClass('shw-fixed')
                $('.docContainer').addClass('dc-fixed')
                $('#sideBarCnt').addClass('ftm-fixed')
                $('#docHead').addClass('ch-fixed')
            }
            if (dcheight > document.body.clientHeight) {
                $('#sideBarCnt.ftm-fixed').css({'height': 'calc(100vh - 120px)'})
                $('#sideBarCnt.ftm-fixed #fullTreeMenuListContainer').css({'height': 'calc(100vh - 180px)'})
                $('.rightSideMenu.rsm-fixed').css({'height': 'calc(100vh - 110px)'})
            } else {
                $('#sideBarCnt.ftm-fixed').css({'height': (dcheight - 40) + 'px'})
                $('#sideBarCnt.ftm-fixed #fullTreeMenuListContainer').css({'height': (dcheight - 90) + 'px'})
                $('.rightSideMenu.rsm-fixed').css({'height': (dcheight - 40) + 'px'})
            }
            $('.markdown-body').css({'margin-top': (100 + $('.container .head').height()) + 'px'})
        } else {
            $('.subHeadWrapper').removeClass('shw-fixed')
            $('.docContainer').removeClass('dc-fixed')
            $('#sideBarCnt').removeClass('ftm-fixed')
            $('#docHead').removeClass('ch-fixed')
            $('.markdown-body').css({'margin-top': '40px'})
            $('#fullTreeMenuListContainer').css({'height': 'calc(100vh - 245px)'})
        }
    }
}

$('.sideBarIcon').click(function() {
    $(".sideBar").toggleClass('hide-sm');
    $(".sideBar").toggleClass('hide-xs');
    setTimeout(function() {
        console.log('sidebar' + $('.sideBar').width())
        $('#sideBarCnt').css({'width': $('.sideBar').width() + 'px'})
    }, 100)
})

let timeInt = setInterval(function() {
    var container = $('#sideBarCnt'), scrollTo = $('#sideBarCnt .activeLink');
    console.log(scrollTo)
    if (scrollTo.length>0) {
        container.scrollTop(
            scrollTo.offset().top - container.offset().top + container.scrollTop()
        );
        clearInterval(timeInt)
    }
}, 500)

$(document).click(function(){
    $('.otherVersions').hide()
    $('.fullVersionInfo').hide()
})

$('.changeBtn').on('click', function(e) {
    $('.otherVersions').toggle()
    stopPropagation(e);
})

$('.fvChange').on('click', function(e) {
    $('.fullVersionInfo').toggle()
    stopPropagation(e);
})