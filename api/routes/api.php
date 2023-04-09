<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('guest')->group(function () {
    Route::post('/register', [App\Http\Controllers\Api\TokenAuthController::class, 'store']);
    Route::post('/login', [App\Http\Controllers\Api\TokenAuthController::class, 'login']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = $request->user()->load('surveys.inventory.inventoryItems');
    $token = $user->createToken('dmt-token')->plainTextToken;
    return response()->json([
        'user' => $user,
        'token' => $token,
    ]);
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/surveys', [App\Http\Controllers\Api\SurveyController::class, 'index']);
    Route::get('/surveys/{survey}', [App\Http\Controllers\Api\SurveyController::class, 'show']);
    Route::post('/surveys', [App\Http\Controllers\Api\SurveyController::class, 'store']);
    Route::put('/surveys/{survey}', [App\Http\Controllers\Api\SurveyController::class, 'update']);
    Route::delete('/surveys/{survey}', [App\Http\Controllers\Api\SurveyController::class, 'destroy']);
});
