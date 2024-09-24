$(document).ready(function () {

    // 로그인 모달
    $('.container').hide();

    // SMS PDF 화면띄우기

    $(".sms_fileView").click(function () {
        $(".sms_file").show();
    })
    $(".sms_file").click(function () {
        $(".sms_file").hide();
    })

    // 카메라 모달창 딤드 및 접근권한
    $(".camera").click(function () {
        $(".btn_overlay_dimmd").show();
        $(".btn_overlay").css({ bottom: "-100%" });

        $(".btn_overlay").show();
        $(".btn_overlay").css({ bottom: 0 });
        $(".modal_camera").hide();
        $(".modal_gallery").hide();
        $(".modal_logout").hide();
    })
    $(".taking_picture").click(function () {
        $(".btn_overlay").hide();
        $(".modal_camera").show();
        $(".dimmd").css({ height: "100%" })
    })
    $(".choosing_picture").click(function () {
        $(".btn_overlay").hide();
        $(".modal_gallery").show();
        $(".dimmd").css({ height: "100%" })
    })
    $(".dimmd").click(function () {
        $(".btn_overlay_dimmd").hide();
    })
    $(".btn_disable").click(function () {
        $(".btn_overlay_dimmd").hide();
    })
    $(".btn_overlay .modal_close").click(function () {
        $(".btn_overlay_dimmd").hide();
    });

    // 비밀번호 모달창
    $(".btn.orange").click(function () {
        $(".btn_overlay_dimmd").show();
        $(".overlay_modal").show();
        $(".dimmd").css({ height: "100%" })
        $(".btn").css({ width: "100%" })
    })

    // 로그아웃 모달창
    $(".logout").click(function () {
        $(".btn_overlay_dimmd").show();
        $(".btn_overlay").hide();
        $(".modal_logout").show();
    })

    // 소식 탭바
    $(".notice_list_box .notice_list:nth-of-type(2)").hide();
    $(".notice_list_box .notice_list:nth-of-type(3)").hide();
    $(".notice_tab_bar button").click(function () {
        let i = $(this).index();
        $(this).toggleClass("active").siblings().removeClass("active");
        $(".notice_list_box .notice_list").eq(i).show().siblings().hide();
    })

    // 카메라
    $(".access_camera").click(function () {
        $(".phone_camera").show();
    })
    $(".phone_camera").click(function () {
        $(this).hide();
        $(".btn_overlay_dimmd").hide();
    })
    $(".access_gallery").click(function () {
        $(".phone_gallery").show();
    })
    $(".phone_gallery").click(function () {
        $(this).hide();
        $(".btn_overlay_dimmd").hide();
    })

    //이미지 확대 슬라이드
    //이미지 확대 슬라이드
    const act_image = new Swiper(".act_image", {
        pagination: {
            el: ".picture_pagination",
            type: "fraction",
            clickable: false,
        },
    });
    //이미지확대
    $("#image_mag").hide();
    $(".act_post > img, .notice_write img").click(function () {
        $("#image_mag").fadeIn(300);
        $(".s_arrow, .app_nav").hide();
    });
    $(".image_back").click(function () {
        $("#image_mag").fadeOut(300);
        $(".s_arrow, .app_nav").show();
    });

    //다운로드 선택창
    $(".download_btns").hide();
    $(".act_btnselect > button:nth-child(2)").click(function () {
        $(".download_btns").fadeIn();
    });
    $(".download_btns > button:nth-child(1), .download_btns > button:nth-child(2)").click(function () {
        $(".download_btns").fadeOut();
        $(".download_popup").fadeIn();
        setTimeout(function () { $('.download_popup').fadeOut(); }, 3000);
    });
    //다운로드 팝업창
    $(".download_popup").hide();

    //공유하기 슬라이드01
    const contact = new Swiper(".contact", {
        slidesPerView: "auto",
        spaceBetween: 16,
        slidesOffsetBefore: 20,
        breakpoints: {
            320: {
                slidesOffsetBefore: 20,
                slidesPerView: "auto",
                spaceBetween: 16,

            },
            518: {
                slidesOffsetBefore: 20,
                slidesPerView: "auto",
                spaceBetween: 24,

            },
            566: {
                slidesOffsetBefore: 20,
                slidesPerView: "auto",
                spaceBetween: 36,

            },
            600: {
                slidesOffsetBefore: 40,
                slidesPerView: "auto",
                spaceBetween: 30,
                slidesPerGroup: 3,
            },
        },
    });
    //공유하기 슬라이드02
    const sns_app = new Swiper(".sns_app", {
        slidesPerView: "auto",
        spaceBetween: 20,
        slidesOffsetBefore: 20,
        breakpoints: {
            320: {
                slidesOffsetBefore: 20,
                slidesPerView: "auto",
                spaceBetween: 20,

            },
            768: {
                slidesOffsetBefore: 40,
                slidesPerView: "auto",
                spaceBetween: 30,
                slidesPerGroup: 3,
            },
        },
    });
    //공유하기 팝업창
    $(".share, .share_dim, .share_modal").hide();
    $(".act_btnselect > button:nth-child(1)").click(function () {
        $(".share, .share_modal, .share_dim").fadeIn();
        $(".share_modal").animate({
            "bottom": "0%"
        });
    });
    $(".share_modal > .share_tit > img").click(function () {
        $(".share, .share_modal, .share_dim").slideDown();
        $(".share_dim").fadeOut();
        $(".share_modal").animate({
            "bottom": "-100%"
        });
    });
});