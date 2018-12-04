@extends('layouts.app')
@section('extracss')
@endsection
@section('content')



@endsection
@section('extrascripts')
    <script>
        // console.log('DATA YOUTUBE');
        // var YOUR_API_KEY = 'AIzaSyAmaeduAThGdFai-yJZVyZVt3xv7xebimY';
        // $.ajax({
        //     type: 'get',
        //     // url: 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key='+YOUR_API_KEY+'&part=snippet,contentDetails,statistics,status',
        //     // url: 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&key='+YOUR_API_KEY+'&videoId=Voqi6NVYdjk',
        //     url: 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&key='+YOUR_API_KEY+'&videoId=Voqi6NVYdjk',
        //     success: function (data) {
        //         console.log(data);
        //     }
        // });

        $.ajax({
            type: 'post',
            data: {prueba: '123', prueba2: 'dasdas'},
            url: '{{url('php/notifications.php')}}',
            success: function (data) {
                console.log(data);
            }
        });
    </script>
@endsection