<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ServiceRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ServiceRequestController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'service_type' => 'required|string|max:255',
            'requester_name' => 'required|string|max:255',
            'requester_email' => 'required|email',
            'details' => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed.',
                'errors' => $validator->errors(),
            ], 422);
        }

        ServiceRequest::query()->create($validator->validated());

        return response()->json(['message' => 'Request submitted. We will get back to you soon.'], 201);
    }
}
