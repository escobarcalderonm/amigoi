@extends('layouts.app')
@section('extracss')
    <style>
        .row {
            display: flex; /* equal height of the children */
        }

        .col-md-6 {
            flex: 1; /* additionally, equal width */
        }
    </style>
@endsection
@section('content')
    <div class="breadcome-list">
        <div class="form-group row">
            <div class="col-md-6">
                <button id="btnpaste" class="btn btn-primary" style="width: 100%;height: 100%">P</button>
            </div>
            <div class="col-md-6">
                <label for="inputprofit" class="col-2 col-form-label" style="color: white;">Profit</label>
                <input class="form-control" type="number" value="150" step="50" id="inputprofit">
            </div>
        </div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0"
                 aria-valuemax="100"></div>
        </div>
        <div class="card-body">

            <div id="containerinput" style="display: none" class="card mb-3">
                <div class="form-group">
                    <textarea class="form-control" rows="3" id="codeplayers"></textarea>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-bordered text-center" style="line-height: 0.5px!important;" id="tableplayers"
                       width="100%" cellspacing="0">
                    <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th>Auction</th>
                        <th>Profit</th>
                        <th>Updated</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>Pos</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th>Auction</th>
                        <th>Profit</th>
                        <th>Updated</th>
                    </tr>
                    </tfoot>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
@section('extrascripts')
    <script>

        function init() {
            updateBar(0);
            $('#containerinput').show();
            $('#codeplayers').val("");
            $('#tableplayers tbody').empty();
        }

        function updateBar(per) {
            $('.progress-bar').attr('style', 'width: ' + per + '%');
            $('.progress-bar').attr('aria-valuenow', per);
            $('.progress-bar').html(per + '%');
        }

        function savePlayer(nombre,tipo,calidad,media,codigo) {
            $.ajax({
                type: 'get',
                data: {nombre: nombre, tipo: tipo, calidad: calidad, media: media, codigo: codigo},
                url: '{{route('cartas.store-player')}}',
                success: function (data) {
                    console.log(data);
                    if (data[1] == 'success') {

                    } else {

                    }
                }
            });
        }

        var normalize = (function () {
            var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
                to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
                mapping = {};

            for (var i = 0, j = from.length; i < j; i++)
                mapping[from.charAt(i)] = to.charAt(i);

            return function (str) {
                var ret = [];
                for (var i = 0, j = str.length; i < j; i++) {
                    var c = str.charAt(i);
                    if (mapping.hasOwnProperty(str.charAt(i)))
                        ret.push(mapping[c]);
                    else
                        ret.push(c);
                }
                return ret.join('');
            }

        })();

        $(document).ready(function () {
            $("body").toggleClass("sidebar-toggled");
            $(".sidebar").toggleClass("toggled");

            var name = '';
            var diff = 150;
            var namesplit = [];
            var fullarray = [];

            function getItem(array, index) {
                var ss = array[index].split('/');
                if (ss.length === 3) {
                    var value = ss[0];
                    var rating = ss[1];
                    var pricep = ss[2].replace('.', '');

                    if (value.length > 1) {
                        var fullname = value;
                        var formatname = normalize(fullname.toLowerCase().replace(" ", "+"));

                        fullarray[index] = [];
                        fullarray[index][0] = fullname;
                        fullarray[index][1] = formatname;
                        fullarray[index][5] = pricep;


                        $.getJSON('https://www.futbin.com/search?year=19&extra=1&term=' + formatname)
                            .done(function (data) {
                                fullarray[index][2] = null;

                                for (var i = 0; i < data.length; i++) {
                                    if (data[i].rating == rating && data[i].version == 'Normal') {
                                        // console.log(data[i].rating);
                                        // console.log(rating);
                                        var strimage = data[i].image;
                                        var nationimage = data[i].nation_image;
                                        var splitp = strimage.split('.');
                                        var len = splitp.length - 2;
                                        var split2 = splitp[len].split('/');
                                        var idd = split2[split2.length - 1];

                                        fullarray[index][2] = idd;
                                        fullarray[index][6] = nationimage;

                                        savePlayer(data[i].name,1,data[i].rare,rating,idd);

                                    }
                                }

                                $.getJSON('https://www.futbin.com/19/playerPrices?player=' + fullarray[index][2] + '&all_versions', function (data1) {
                                    if (fullarray[index][2] != null) {
                                        var price1 = data1[fullarray[index][2]]['prices']['ps']['LCPrice'].replace(',', '');
                                        var price2 = data1[fullarray[index][2]]['prices']['ps']['LCPrice2'].replace(',', '');
                                        var updated = data1[fullarray[index][2]]['prices']['ps']['updated'];
                                        var nationimage = fullarray[index][6];
                                        var strimage = '';
                                        var hours = updated.split(' ');
                                        fullarray[index][3] = price1;
                                        fullarray[index][4] = price2;
                                        var selled = parseInt(price1) * 0.95;
                                        var profit = selled - parseInt(pricep);
                                        var colorProfit = '';
                                        var colorType = '';
                                        var colorUpdated = '';
                                        var fw = 'normal';
                                        if (profit < diff) {
                                            colorProfit = '#ff7b7b';
                                        } else {
                                            colorProfit = '#71ff67';
                                            fw = 'bold';
                                            strimage = '<img style="height: 12px;" src="' + nationimage + '">';
                                        }
                                        if (parseInt(rating) > 74) {
                                            colorType = '#eac30f';
                                        } else if (parseInt(rating) > 64) {
                                            colorType = '#979ca4';
                                        } else {
                                            colorType = '#a17d53';
                                        }
                                        if (hours[1] == 'hours' && parseInt(hours[0]) > 2) {
                                            colorUpdated = '#ff7b7b';
                                        }
                                        // console.log(index + ' || ' + fullarray[index][0] + ' -> ' + fullarray[index][3] + ' // ' + fullarray[index][4] + '[' + updated + ']');
                                        $('#tableplayers tbody').append('<tr style="font-weight: ' + fw + '"><td>' + (index + 1) + '</td><td>' + fullname + strimage + '</td><td style="background-color: ' + colorType + '">' + rating + '</td><td>' + price1 + ' / ' + price2 + '</td><td>' + pricep + ' (' + selled + ')</td><td style="background-color: ' + colorProfit + '">' + profit + '</td><td style="background-color: ' + colorUpdated + '">' + updated + '</td></tr>')
                                        updateBar((index + 1) * 5);
                                    }
                                    // console.log(index + ' | ' + array.length);
                                    if (index < array.length) {
                                        getItem(array, ++index);
                                    }
                                });
                            }).fail(function () {
                            // console.log('error get player');
                            getItem(array, ++index);
                        });
                    }
                }
            }

            $('#codeplayers').bind('input propertychange', function () {
                if (this.value.length) {
                    name = this.value;
                    namesplit = name.split('&');
                    // console.log(namesplit);
                    getItem(namesplit, 0);
                }
            });

            $('#btnpaste').click(function () {
                init();
                diff = $('#inputprofit').val();

                var editor = document.getElementById("codeplayers");
                editor.focus();
                editor.select();
                document.execCommand('Paste');
                $('#containerinput').hide();
            });
        });

    </script>
@endsection