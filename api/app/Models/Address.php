<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'street',
        'city',
        'state',
        'zip',
    ];

    public function surveys()
    {
        return $this->hasMany(Survey::class);
    }

    // method to return stringified Address
    public function __toString()
    {
        return $this->street . ', ' . $this->city . ', ' . $this->state . ' ' . $this->zip;
    }
}
