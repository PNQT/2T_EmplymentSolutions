<?php

namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'requirements',
        'benefits',
        'companyInfo',
        'location',
        'employmentType',
        'salary',
        'deadline',
        'contactEmail',
        'contactPhone',
        'applicationProcess',
        'image'
    ];
}