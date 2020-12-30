var gatti_circle = ` <div class="col-md-1 span d-block">
                            <i class="fa fa-circle fa-sm c-green"></i>
                        </div>`
        $('.gatti').click(function () {
            $('.gatti').toggleClass('add-keyframe');
            if ($('.span')) {
                $('.span').remove()
            }
            gatti_value = Math.round(Math.random() * (6 - 1) + 1);
            console.log(gatti_value)
            for (i = 1; i <= gatti_value; i++) {
                $('.gatti-inner').append(gatti_circle)
            }
        })