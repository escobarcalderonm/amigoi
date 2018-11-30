@extends('layouts.app')
@section('extracss')
    <style>
        .row {
            display: flex; /* equal height of the children */
        }
    </style>
@endsection
@section('content')
    <div class="breadcome-list">
        <div class="form-group row">
            <div class="col-md-3">
                <label for="nameplayer" class="col-form-label">Name</label>
                <input class="form-control" type="text" id="nameplayer">
                <input type="hidden" id="idplayer" value="0">
                <div class="table-responsive">
                    <table class="table table-bordered text-center" style="line-height: 0.5px!important; display: none"
                           id="tablesearch"
                           width="100%" cellspacing="0">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Type</th>
                            <th>Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-1">
                <button class="btn btn-primary" id="lookforplayer" style="position: absolute;bottom: 0;">B</button>
            </div>
            <div class="col-md-2">
                <label for="inputbuy" class="col-form-label">Buy</label>
                <input class="form-control" type="number" id="inputbuy">
            </div>
            <div class="col-md-2">
                <label for="inputsell" class="col-form-label">Sell</label>
                <input class="form-control" type="number" id="inputsell">
            </div>
            <div class="col-md-2">
                <label for="inputsell" class="col-form-label">Rep</label>
                <input class="form-control" type="number" value="1" id="inputrep">
            </div>
            <div class="col-md-2">
                <button class="btn btn-primary" id="btnsave" style="position: absolute;bottom: 0;">Save</button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered text-center" style="line-height: 0.5px!important;" id="tableplayers"
                       width="100%" cellspacing="0">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Buy</th>
                        <th>Sell</th>
                        <th>Count</th>
                        <th>Profit</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Buy</th>
                        <th>Sell</th>
                        <th>Count</th>
                        <th>Profit</th>
                        <th>Date</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    @foreach($transacciones as $transaccion)
                        @php($carta = $transaccion->getCarta())
                        <tr>
                            <input type="hidden" name="idtransaccion" value="{{$transaccion->id_tr}}">
                            <td>{{$carta->nombre}}</td>
                            <td>{{$carta->media}}</td>
                            <td>{{$transaccion->compra}}</td>
                            <td>
                                @if($transaccion->venta > 0)
                                    {{$transaccion->venta}}
                                @else
                                    <input type="number" class="form-control"
                                           style="width: 50%!important; display: inline"
                                           value="0">
                                    <button class="btn btn-primary btnupdate" style="display: inline">Update</button>
                                @endif
                            </td>
                            <td>{{$transaccion->repeticion}}</td>
                            <td>{{$transaccion->getProfit()}}</td>
                            <td>{{$transaccion->date}}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
@section('extrascripts')
    <script>

        $(document).ready(function () {

            $('#btnsave').on('click', function () {
                var idplayer = $('#idplayer').val();
                var buy = $('#inputbuy').val();
                var sell = $('#inputsell').val();
                var rep = $('#inputrep').val();
                saveTransaccion(idplayer, buy, sell, rep);
            });

            $('.btnupdate').on('click', function () {
                var id = $(this).parent().parent().find('input[name="idtransaccion"]').val();
                var sell = $(this).parent().find('input').val();
                updateTransaccion(id, sell);
            });

            $('#lookforplayer').on('click', function () {
                $('#tablesearch').show();
                var name = $('#nameplayer').val();

                var fullarray = [];

                if (name.length > 1) {
                    fullarray[0] = [];
                    fullarray[0][0] = name;

                    $.getJSON('https://www.futbin.com/search?year=19&extra=1&term=' + name)
                        .done(function (data) {
                            fullarray[0][2] = null;

                            for (var i = 0; i < data.length; i++) {
                                if (data[i].version == 'Normal') {
                                    var strimage = data[i].image;
                                    var splitp = strimage.split('.');
                                    var len = splitp.length - 2;
                                    var split2 = splitp[len].split('/');
                                    var idd = split2[split2.length - 1];
                                    fullarray[0][2] = idd;

                                    savePlayer(data[i].name, 1, data[i].rare, data[i].rating, idd);
                                }
                            }
                        }).fail(function () {
                        console.log('error get player');
                    });
                }
            });
        });

        function savePlayer(nombre, tipo, calidad, media, codigo) {
            $.ajax({
                type: 'get',
                data: {nombre: nombre, tipo: tipo, calidad: calidad, media: media, codigo: codigo},
                url: '{{route('cartas.store-player')}}',
                success: function (data) {
                    console.log(data);
                    var html = '<tr><td>' + nombre + '</td>' + '<td>' + media + '</td>' + '<td>' + data[1] + '</td>' + '<td><button class="btn btn-primary" onclick="setPlayer(' + data[0] + ',\'' + nombre + '\')"></button></td></tr>';
                    $('#tablesearch tbody').append(html);
                }
            });
        }

        function saveTransaccion(id, buy, sell, rep) {
            $.ajax({
                type: 'get',
                data: {id: id, buy: buy, sell: sell, rep: rep},
                url: '{{route('monedero.store-transaccion')}}',
                success: function (data) {
                    console.log(data);
                    if (data == 'success') {
                        alert('ok');
                    } else {
                        alert('error');
                    }
                }
            });
        }

        function updateTransaccion(id, sell) {
            $.ajax({
                type: 'get',
                data: {id: id, sell: sell},
                url: '{{route('monedero.update-transaccion')}}',
                success: function (data) {
                    console.log(data);
                    if (data == 'success') {
                        alert('ok');
                    } else {
                        alert('error');
                    }
                }
            });
        }

        function setPlayer(id, nombre) {
            console.log(id);
            $('#nameplayer').val(nombre);
            $('#idplayer').val(id);
            console.log($('#idplayer').val());
            $('#tablesearch tbody').empty();
            $('#tablesearch').hide();
        }

    </script>
@endsection