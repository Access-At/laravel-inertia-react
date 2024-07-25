<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite('resources/frontend/app.tsx')
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
