<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
    try {
        DB::connection()->getPdo();
        $database = 'connected';
    } catch (Throwable $exception) {
        $database = 'disconnected';
    }

    return response()->json([
        'status' => 'ok',
        'database' => $database,
        'timestamp' => now()->toIso8601String(),
    ]);
});

Route::apiResource('/products', ProductController::class)->only(['index', 'show', 'store', 'update', 'destroy']);
