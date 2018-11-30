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
            <div class="col-md-5">
                <label for="inputname" class="col-form-label">Name</label>
                <input class="form-control" type="text" id="inputname">
            </div>
            <div class="col-md-5">
                <label for="inputcantidad" class="col-form-label">Buy</label>
                <input class="form-control" type="number" id="inputcantidad">
            </div>
            <div class="col-md-2">
                <button class="btn btn-primary" id="btnsave" style="position: absolute;bottom: 0;">Save</button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered text-center" style="line-height: 0.5px!important;" id="tableextras"
                       width="100%" cellspacing="0">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                        <th>Date</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    @foreach($extras as $extra)
                        <tr>
                            <td>{{$extra->nombre}}</td>
                            <td>{{$extra->cantidad}}</td>
                            <td>{{$extra->created_at}}</td>
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
                var nombre = $('#inputname').val();
                var cantidad = $('#inputcantidad').val();
                saveExtra(nombre,cantidad);
            });

        });

        function saveExtra(nombre,cantidad) {
            $.ajax({
                type: 'get',
                data: {nombre: nombre, cantidad: cantidad},
                url: '{{route('monedero.store-extra')}}',
                success: function (data) {
                    if (data == 'success') {
                        alert('ok');
                    } else {
                        alert('error');
                    }
                }
            });
        }

    </script>
@endsection