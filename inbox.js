
function isCrap(email) {

    var mylist = [
        "gameforge_mmo@news.gameforge.com",
        "noreply@mass.datingfactory.com",
        "no-reply@mykoob.com",
        "noreplay@supernetto.lv",
        "no-reply-joki@oho.lv",
        "telefonija@bk.ru",
        "info@markus.lv",
        "taxiapp@bk.ru",
        "evakuators24@mail.ru",
        "note.s@bk.ru",
        "camp@olybet.com",


        "travel@inbox.lv",
        "jaunumi@postcard.lv",
        "jaunumi@delfi.lv",
        "sferarazuma@mail.ru",
        "metapowershop12@gmail.com",
        "konsultacijas@list.ru",
        "autolizings@mail.ru",
        "metapowers@gmail.com",
        "no_reply@qguys.com",
        "info@laimture.lv",
        "postmaster@hotmail.com",
        "info@clubx.lv",
        "admin@clubx.lv",
        "admine@clubx.lv",
        "no-reply@clubx.lv",
        "info@tiesitev.lv",
        "support@inbox.lv",
        "info@inbox.lv",
        "info@dating.lt",
        "www4sexlv@gmail.com",
        "palidziba@220.lv",
        "promotions@inbox.lv",
        "noreply@twoomail.com",
        "ads_bwin@inbox.lv",


        "info@visidati.lv",
        "mail@cllvdonate.info",
        "ani688@wp.pl",
        "anitabaumane@wp.pl",
        "ok773@inbox.lv",
        "prieks1746@inbox.lv",
        "prieks1657@inbox.lv",
        "prieks1452@inbox.lv",
        "prieks1057@inbox.lv",
        "vasara5513@inbox.lv",
        "vasara5168@inbox.lv",
        "vasara4674@inbox.lv",
        "news@email.skype.com",
        "support@1100ad.com",
        "noreply@fotostrana.ru",
        "no-reply@oho.lv",
        "maksatnespeja@inbox.ru",
        "noreply-bf@dnsloft.com",
        "portativos.perkam@mail.ru",
        "smart@inbox.lv",
        "noreply@itmcash.com",


    ];


    if (email == null) {
        console.log(email);
        console.log("NULL!");
        return false;
    }

    email = email.trim().toLowerCase();

    if (
        mylist.indexOf(email) != -1
            || email.indexOf("@homeik.cn") > -1
            || email.indexOf("topvisioncctv.") > -1
            || email.indexOf("@vesti.ru") > -1
            || email.indexOf("@11.lv") > -1
            || email.indexOf("@boro.lv") > -1
            || email.indexOf("@open24.lv") > -1
            || email.indexOf("@uiutvdome.info") > -1
            || email.indexOf("@mediart.info") > -1
            || email.indexOf("@reklama.lv") > -1
            || email.indexOf("@sexsaites.net") > -1
            || email.indexOf("@iekare.com") > -1
            || email.indexOf("@bongacams.com") > -1
            || email.indexOf("newsletter") > -1
            || email.indexOf("@x-cupid.com") > -1
            || email.indexOf("@emails.skype.com") > -1
            || email.indexOf("@pazintysxxx.com") > -1
            || email.indexOf("@ototo.lv") > -1
            || email.indexOf("@abcd.lv") > -1
            || email.indexOf("@forblabla.com") > -1
            || email.indexOf("@spincasino.com") > -1
            || email.indexOf("@trig.com") > -1
            || email.indexOf("@advertising.com") > -1
            || email.indexOf("@ohoplus.com") > -1
            || email.indexOf("@vip4xxx.com") > -1
            || email.indexOf("@myplan4you.com") > -1
            || email.indexOf("@bidpro.eu") > -1
            || email.indexOf("@ncdrilling.com") > -1
            || email.indexOf("@teamo.ru") > -1
            || email.indexOf("@vkrugudruzei.ru") > -1
            || email.indexOf("@members.fling.com") > -1
            || email.indexOf("@travellerspecials.com") > -1
            || email.indexOf("@jetsetspecials.com") > -1
            || email.indexOf("@lo2011.lv") > -1
            || email.indexOf("@kazinotops.lv") > -1
            || email.indexOf("@twoomail.com") > -1
            || email.indexOf("@betsafe.com") > -1
            || email.indexOf("@betway.lv") > -1
            || email.indexOf("888.com") > -1
            || email.indexOf("@riggedinriga.com") > -1
            || email.indexOf("@bwin.com") > -1
            || email.indexOf("@pokerstars.com") > -1
            || email.indexOf("@triobet.com") > -1
            || email.indexOf("@badoo.com") > -1
            || email.indexOf("@olybet.lv") > -1
            || email.indexOf("@olybet.com") > -1
            || email.indexOf("@unibet.lv") > -1
            || email.indexOf("@4fun.sx") > -1
            || email.indexOf("@unibet.lv") > -1
            || email.indexOf("@boomtime.lv") > -1
            || email.indexOf("@topface.com") > -1
            || email.indexOf("@katamail.com") > -1
            || email.indexOf("@totalizators.com") > -1
            || email.indexOf("@andrewchristian.com") > -1
            || email.indexOf(".andrewchristian.com") > -1
            || email.indexOf("mailer-daemon@") > -1
            || email.indexOf("@kongregate.com") > -1
            || email.indexOf("@facebookappmail.com") > -1
            || email.indexOf("facebookmail.com") > -1
            || email.indexOf("@support-love.com") > -1
            || email.indexOf("@sexdraugiem.com") > -1
            || email.indexOf("@odnoklassniki.ru") > -1
            || email.indexOf("@www.loveplanet.lv") > -1
            || email.indexOf("@loveplanet.ru") > -1
            || email.indexOf("@ferratum.lv") > -1
            || email.indexOf("@expekt.com") > -1
            || email.indexOf("@dzirnavnieks.lv") > -1
            || email.indexOf("@t-online.de") > -1
            || email.indexOf("@4fun.sx") > -1
            || email.indexOf("@prieks.com") > -1
            || email.indexOf("@olympic-online.com") > -1
            || email.indexOf("@lovesupport.ru") > -1
            || email.indexOf("@unibet-mail.com") > -1
            || email.indexOf("@betsafe.lv") > -1
            || email.indexOf("@viensviens.lv") > -1
            || email.indexOf("@zolmaniem.lv") > -1
            || email.indexOf("@t-online.de") > -1
        ) {
        //console.log("crap:" + email);
        return true;
    }
    //console.log("not crap:" + email);
    return false;
}

function isImportant(email) {

    var mylist = [
        "billing@nic.lv"
    ];


    if (email == null) {
        console.log(email);
        console.log("NULL!");
        return false;
    }

    email = email.trim().toLowerCase();

    if (
        mylist.indexOf(email) != -1
            || email.indexOf(".gov.lv") > -1
            || email.indexOf("@nic.lv") > -1
            || email.indexOf("@vp.gov.lv") > -1
        ) {
        //console.log("important:" + email);
        return true;
    }
    //console.log("not crap:" + email);
    return false;
}

function ToggleListSize() {
    var size = GetNextSize();





    $.post(location.protocol+"//mail.inbox.lv/prefs/interface", {

        actionID: "update_prefs",
        group: "interface",
        stay: 1,
        max_msgs: size,
        refresh_time: 300}, function (data) {
        location.reload();
    });
}
function deleteCrap() {


    var found = false;
    $('.eml-list__table .eml__from__name').each(function () {

        var email = GetEmail($(this));

        if (isCrap(email)) {
            var $checkBox = $(this).parent().parent().find("input[name=indices\[\]]");
            //console.log($(this).parent().parent());

            $checkBox.trigger("click");
            $checkBox.attr('checked', 'checked');
            //$checkBox.prop('checked', 'checked');
            found = true;
        }
    });

    if (found) {
        $('#toolbar_primary_btn_delete').trigger("click");
    }


}


function SaveStorage(key, storageVal, log) {
    if (typeof(log) != "undefined" && log == true) {
        _gaq.push(['_trackEvent', key, storageVal]);
    }
    if (typeof(storageVal) != "undefined") {

        var type = typeof(storageVal);

        if (type != "string" && type != "object") {

            console.log("Saving to storage: " + key + " type " + typeof(storageVal) + " = ");
        }

        switch (typeof(storageVal)) {
            case "object":
                var storageValString = JSON.stringify(storageVal);
                //console.log(storageValString);

                localStorage[key] = storageValString;
                return storageVal;

                break;
            case "boolean":
                var storageValString = storageVal;
                console.log(storageValString);
                localStorage[key] = storageValString;
                return storageVal;

                break;
            default:
                localStorage[key] = storageVal;
                //console.log(storageVal);
                return localStorage[key];

                break;

        }


    } else {
        //console.log("NOT Saving to storage: " + key + " = " + showAds);
        return storageVal;
    }
}

function LoadStorage(key, type, def) {

    if (typeof(type) == "undefined") {
        type = "string";
    }


    var storageVal = localStorage[key];
    switch (type) {
        case "bool":

            if (typeof(def) == "undefined") {
                def = true;
            }

            if (!storageVal) {
                storageVal = def;
            }
            if (typeof storageVal == 'string' && storageVal == 'false') {
                storageVal = false;
            } else {
                storageVal = true;
            }

            //console.log("Getting :" + key + " = " + storageVal);
            break;
        case "string":

            if (typeof(def) == "undefined") {
                def = "";
            }


            if (!storageVal) {
                storageVal = def;
            }
            break;
        case "json":
            if (storageVal != undefined) {
                //console.log("Json parse" + storageVal);
                storageVal = JSON.parse(storageVal);
            } else {
                storageVal = new Array();
            }
            break;

    }

    return storageVal;


}


document.onkeydown = NavigateThrough;

var focusInInput = false;

if (document.getElementsByTagName)
    onload = function () {
        var e, i = 0;
        while (e = document.getElementsByTagName('INPUT')[i++]) {
            if (e.type == 'text' || e.type == 'email' || e.type == 'search') e.onfocus = function () {
                focusInInput = true
            };
            if (e.type == 'text' || e.type == 'email' || e.type == 'search') e.onblur = function () {
                focusInInput = false
            };
        }
        i = 0;
        while (e = document.getElementsByTagName('TEXTAREA')[i++]) {
            e.onfocus = function () {
                focusInInput = true
            };
            e.onblur = function () {
                focusInInput = false
            };
        }
    };

function NavigateThrough(event) {
    if (!document.getElementById) return;

    if (window.event) event = window.event;

    if ((event.ctrlKey || event.altKey) && !focusInInput) {
        var link = null;
        var href = null;
        switch (event.keyCode ? event.keyCode : event.which ? event.which : null) {
            case 0x25:
                link = document.getElementById('toolbar_primary_ul_pull-right').getElementsByClassName('ifi-triangle-left')[0].parentNode;
                break;
            case 0x27:
                link = document.getElementById('toolbar_primary_ul_pull-right').getElementsByClassName('ifi-triangle-right')[0].parentNode;
                break;
            case 0x26:
                link = document.getElementById('toolbar_primary_ul_pull-right').getElementsByClassName('ifi-to-start')[0].parentNode;
                break;
            case 0x28:
                link = document.getElementById('toolbar_primary_ul_pull-right').getElementsByClassName('ifi-to-end')[0].parentNode;
                break;
            case 0x24:
                href = '/';
                break;
        }

        if (link && link.href) document.location = link.href;
        if (href) document.location = href;
    }
}


var alwaysShownAttachs = false;
function SyncAlwaysShowHideAttachments() {
    alwaysShownAttachs = LoadStorage("alwaysShownAttachs", 'bool');

    if (alwaysShownAttachs) {
        $('#alwaysShowPhotos').attr('checked', 'checked');
    }
}

function SetAlwaysOnOff(isChecked, setCheckbox){
    alwaysShownAttachs = SaveStorage("alwaysShownAttachs", isChecked, false);
    if(setCheckbox){

        var isChecked2 = $('#alwaysShowPhotos').is(':checked');
        if(isChecked!=isChecked2) {
            console.log("setting checkbox to " + isChecked);
            $('#alwaysShowPhotos').attr('checked', isChecked);
        }
    }
}

function AlwaysShowHideAttachments(e) {
    var isChecked = $('#alwaysShowPhotos').is(':checked');
    SetAlwaysOnOff(isChecked, false);
    e.preventDefault();
}

//.btn_next


var shownAttachs = false;
function ShowHideAttachments() {



    if (!shownAttachs) {
        shownAttachs = true;



        if ($('.attachs__list_copy').length > 0) {
            $('.attachs__list_copy').show();
        } else {

            $('.eml-list__table .eml_has-attach').each(function () {


                var thisAtt = $(this);
                if (!thisAtt.hasClass('eml_unseen')) {
                    var url = thisAtt.find('.eml__subject__link').attr('href');


                   $.get(url, function (data) {

                        var attachList = $(data).find('.attach.attach_type-image');
                        console.log("Done:" + attachList.length);

                        var ol = thisAtt.find('.eml__from').append('<ol class="attachs__list_copy attachs__list"></ol>').find('.attachs__list');
                        //$('body').append(data);
                        //console.log($(data).find('.action-view-attach').attr('href'));
                        var countFound=0;
                        attachList.each(function () {
                            var thisAttUrl = $(this).find('a').attr('href');
                            ol.append('<a style="display:inline;float:left;" href="' + thisAttUrl + '" class="attachments__item-content" id="attach-no-0"><img alt="" width="200" style="float:left;" class="attachments__item-thumb" src="' + thisAttUrl + '"></a>');
                            countFound++;
                        });
                       if(countFound==0){
                           ol.hide();
                       }


                        //$( "body" ).html( data );
                        //alert( "Load was performed." );
                    });


                }
                ;
            });
        }

        //console.log($('button[data-action=preview-pics][data-view=thumbs]').hasClass('hidden'));
        //console.log($('button[data-action=preview-pics][data-view=tiles]').hasClass('hidden'));
        //$('button[data-action=preview-pics][data-view=thumbs]').click();

        setTimeout(function(){
            $('button[data-action=preview-pics][data-view=thumbs]').click();
        },100);
    } else {


        shownAttachs = false;
        $('.attachs__list_copy').hide();

        $('button[data-action=preview-pics][data-view=tiles]').click();
    }
    console.log("ShowHideAttachments");
    SyncAttach();


}

function SyncAttach(){
    console.log("SyncAttach");
    if(shownAttachs){
        $('#togglePhotos .ifi-eye-open').removeClass('ifi-eye-open').addClass('ifi-eye-close');
        $('#alwaysShowPhotosLabel').show();
    } else {
        $('#togglePhotos .ifi-eye-close').addClass('ifi-eye-open').removeClass('ifi-eye-close');
        $('#alwaysShowPhotosLabel').hide();
        SetAlwaysOnOff(false, true);
    }
}


function GetEmail($this) {
    var email = $this.attr('title');
    if (email == "") {
        email = $this.find('strong').html();
    }
    if (email == null) {
        //email= $this.text();
        email = $this
            .clone()    //clone the element
            .children() //select all the children
            .remove()   //remove all the children
            .end()  //again go back to selected element
            .text();
    }
    return email;
}

var buttonAdded = false;
var crapCount = 0;
function AddDeleteButton() {
    crapCount++;
    var deleteText='<span class="ifi-trash"></span>';
    if (!buttonAdded) {
        $('.btn-toolbar_primary').append('<li class="btn-group" id="deleteCrap"><span class="btn" style="color:red;font-weight: bold;">'+deleteText+' (' + crapCount + ')</span></li>')
        $('#deleteCrap').bind('click', deleteCrap);
        buttonAdded = true;
    } else {
        $('#deleteCrap .btn').html(''+deleteText+' (' + crapCount + ')');

    }
}


function GetCurrentSize() {
    return $('.eml-list__tbody tr').length;
}
function GetNextSize() {
    var size = 20;
    if (GetCurrentSize() < 100) {
        size = 100;
    } else {
        size = 20;
    }
    return size;
}
$(document).ready(function () {


    var pokazatjFotkiText='<span class="ifi-eye-open"></span>'; // Показать фотки

    $('.btn-toolbar_primary').append('<li class="btn-group" id="togglePhotos"><span class="btn" id="toggleEyeButton">'+pokazatjFotkiText+'</span><label class="btn" id="alwaysShowPhotosLabel"><input id="alwaysShowPhotos" type="checkbox"> Always show</label></li>');

    $('#togglePhotos #toggleEyeButton').bind('click', function(){
        console.log("Click toggl");
        ShowHideAttachments();
    });
    $('#alwaysShowPhotos').bind('change', AlwaysShowHideAttachments);

    SyncAlwaysShowHideAttachments();
    if (alwaysShownAttachs) {
        console.log("alwaysShownAttachs from ready");
        ShowHideAttachments();
    }
    console.log("On ready!");
    SyncAttach();


    /*
    $('.btn-toolbar_primary').append('<li class="btn-group" id="toggleListSize"><span class="btn">Razmer:' + GetCurrentSize() + '->' + GetNextSize() + '</span></li>');
    $('#toggleListSize').bind('click', ToggleListSize);
*/

    $('.eml-list__table .eml__from__name').each(function () {
        var email = GetEmail($(this));

        $(this).append("<i style='color:#666;'>" + email + "</i>");

        if (isCrap(email)) {
            AddDeleteButton();
            //$(this).parent().parent().hide();
            var row = $(this).parent().parent();
            row.fadeTo(0, 0.13);
            row.parent().append(row);
        }

        if (isImportant(email)) {

            var row = $(this).parent().parent();
            row.addClass('eml_important');
            //row.parent().append(row);
        }

    });


});

function removeSpam(){

    //return;
    //delete crap button!


    var currentEmail = "";
    if ($('.inx-profile__email').length > 0) {
        currentEmail = $('.inx-profile__email').text();
        console.log("current mail:" + currentEmail);
    }



    /*
    //removing side products?
    var $inx = $('#inx-aside-products');
    if ($inx.length > 0) {
        $inx.empty();
    } else {
        var $inx = $('.m-folders_main');
    }
    */


    $('.b-invite-friend').hide();
    $('.b-kaspersky').parent().hide();
    $("div[id^='bxS-']").hide();
    $("div[id^='cakeBox_']").hide();
    $("div[class^='bxS-']").hide();
    $("td[id^='bxS-']").hide();
    $("td[class^='bxS-']").hide();

    $('.ChatBody a.meny:contains("Edit profile")').parent().append('| <a href="http://puh.lv/lv/?utm_source=slud_inbox&utm_medium=inbox.lv&utm_campaign=extension" class="meny" title="PUH.lv - sekss sludinājumi un iepazīšanās Rīgā un Latvijā. Pievienot sludinājumu bezmaksas!" style="font-weight:bold;"><img height="12" width="12" style="vertical-align:bottom;margin-right:2px;" alt="Ielūgums" src="http://puh.lv/images/heart12.gif">Sex ads and dating</a>');
    $('.ChatBody a.meny:contains("Izmainīt profilu")').parent().append('| <a href="http://puh.lv/lv/?utm_source=slud_inbox&utm_medium=inbox.lv&utm_campaign=extension" class="meny" title="PUH.lv - sekss sludinājumi un iepazīšanās Rīgā un Latvijā. Pievienot sludinājumu bezmaksas!" style="font-weight:bold;"><img height="12" width="12" style="vertical-align:bottom;margin-right:2px;" alt="Ielūgums" src="http://puh.lv/images/heart12.gif">Sekss sludinājumi</a>');
    $('.ChatBody a.meny:contains("Правка профиля")').parent().append('| <a href="http://puh.lv/ru/?utm_source=slud_inbox&utm_medium=inbox.lv&utm_campaign=extension" class="meny" title="ПУХ.lv - секс объявления и знакомства в Риге и Латвии. Подать объявление бесплатно!" style="font-weight:bold;"><img height="12" width="12" style="vertical-align:bottom;margin-right:2px;" alt="Ielūgums" src="http://puh.lv/images/heart12.gif">Секс объявления</a>');

    /*

     $('#mtd_257[href="/lv/entertainment/acquaintances/"]').after('<br><img height="12" width="12" style="vertical-align:bottom;margin-right:2px;" alt="Ielūgums" src="http://puh.lv/images/heart12.gif"><a href="http://puh.lv/lv/?utm_source=slud_inbox&utm_medium=inbox.lv&utm_campaign=extension" class="a1" id="mtd_puh" title="PUH.lv - sekss sludinājumi un iepazīšanās Rīgā un Latvijā. Pievienot sludinājumu bezmaksas!" style="font-weight:bold;">Sekss sludinājumi</a>');
     $('#mtd_257[href="/ru/entertainment/acquaintances/"]').after('<br><img height="12" width="12" style="vertical-align:bottom;margin-right:2px;" alt="Ielūgums" src="http://puh.lv/images/heart12.gif"><a href="http://puh.lv/ru/?utm_source=slud_inbox&utm_medium=inbox.lv&utm_campaign=extension" class="a1" id="mtd_puh" title="ПУХ.lv - секс объявления и знакомства в Риге и Латвии. Подать объявление бесплатно!" style="font-weight:bold;">Секс объявления</a>');
     */


    $('.fp').parent().parent().parent().parent().addClass('left_block');
    $('#div_banner').next().hide();


    $('i:contains("There are no messages in this mailbox.")').parent().parent().parent().parent().parent().append('<center><a href="http://puh.lv/en/?utm_source=mail_empty&utm_medium=inbox.lv&utm_campaign=extension"><img src="http://puh.lv/images/b940x150.png" width="940" height="150"></a></center>');
    $('i:contains("Сообщения в ящике отсутствуют.")').parent().parent().parent().parent().parent().append('<center><a href="http://puh.lv/ru/?utm_source=mail_empty&utm_medium=inbox.lv&utm_campaign=extension"><img src="http://puh.lv/images/b940x150.png" width="940" height="150"></a></center>');
    $('i:contains("Šajā pastkastītē ziņojumu nav.")').parent().parent().parent().parent().parent().append('<center><a href="http://puh.lv/lv/?utm_source=mail_empty&utm_medium=inbox.lv&utm_campaign=extension"><img src="http://puh.lv/images/b940x150.png" width="940" height="150"></a></center>');

    /*
     var d = new Date();
     var curr_hour = d.getHours();
     var curr_min = d.getMinutes();
     if (curr_min < 10)curr_min = '0' + curr_min;


     $('#mailbox_messages tr[class="item"]').after('' +
     '<tr style="cursor:pointer;cursor:hand;" rel="puh" class="unseen" onmouseover="javascript:this.className=\'unseen-hi\'" onmouseout="javascript:this.className=\'unseen\'">'+
     '<td nowrap="nowrap" rel="puh"><img height="12" width="12" vspace="3" hspace="5" alt="Ielūgums" src="http://puh.lv/images/heart12.gif"></td>'+
     '<td nowrap="nowrap" rel="puh"><span>'+curr_hour+':'+curr_min+'</span></td>'+
     '<td nowrap="nowrap" rel="puh"><span><b>PUH.lv ielūgums</b></span></td>'+
     '<td align="center" rel="puh"><img src="/images/message/attachment.gif">    </td>'+
     '<td rel="puh"><span><b>Iepazīšanās sludinājumi — meitenes, sievietes, puiši, vīrieši kuri meklē otru pusi.</b></span></td>'+
     '<td align="right" rel="puh">&nbsp;<span>41&nbsp;KB</span></td>'+
     '</tr>');
     */


    /*
     $('td[rel="puh"]').each(function () {
     $(this).bind('click', function () {
     document.location.href = "http://puh.lv/lv/?utm_source=mail&utm_medium=inbox.lv&utm_campaign=extension";
     });
     });



     $('#mailbox_messages td a.eml__subject__link:contains("PUH.lv")').each(function () {
     $(this).prepend('<img height="10" width="10" style="vertical-align:bottom;margin-right:2px;" title="PUH.lv ziņojums" alt="PUH.lv ziņojums" src="http://puh.lv/images/heart10.gif">');

     });
     */


    $('#imr_banner').parent().hide();
    $('.image-login_tl').parent().parent().parent().attr('width', '100%');


    $('#inxHeadAdsPlace').parent().parent().parent().parent().hide();
    $('td[width="398"]').attr('width', '100%');
//$('.item').hide();
    $('.ui-adoad-outer').hide();
    $('#inviteFriendLinkDiv').parent().hide();
    $('img[alt="Kaspersky"]').parent().parent().parent().parent().hide();
    /*
     $('a[href*="bannerID"]').hide();
     $('object[data*="bannerID"]').hide();
     */
//$('img').hide();

    /* games.inbox.lv */
    $('#games .ad').hide();

    $('div[id*="adid"]').hide();
    $('#adoAdWraper').children(':first-child').next().next().hide().html('');


//$('a[href*="dating.inbox.lv"]').attr('href','http://puh.lv');
    $('a[href*="go.inbox.lv"]').attr('href', 'http://puh.lv/lv/?utm_source=mail&utm_medium=inbox.lv&utm_campaign=extension').html('PUH.lv');
//$('a:contains(mail+)').attr('href','PUH.lv').attr('href','http://puh.lv');

    $('#step2Form').show();
    $('#mlusessl').attr('checked', false);




}

$(document).ready(function () {



    removeSpam();




});
