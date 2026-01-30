<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceRequest extends Model
{
    protected $fillable = [
        'service_type',
        'requester_name',
        'requester_email',
        'details',
        'status',
    ];
}
