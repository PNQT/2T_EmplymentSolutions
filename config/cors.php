<?php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie','*'],

    'allowed_methods' => ['*'],  // Cho phép tất cả các phương thức (GET, POST, PUT, DELETE, ...)
    
    'allowed_origins' => ['*'],  // Cho phép tất cả các miền. Bạn có thể giới hạn chỉ cho phép một số miền nhất định như ['https://yourfrontend.com']

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],  // Cho phép tất cả các header, nếu cần chỉ định thì có thể thay đổi thành ['Content-Type', 'X-Requested-With', ...]

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,  // Nếu bạn cần gửi cookie hoặc thông tin xác thực, đặt thành `true`
];

