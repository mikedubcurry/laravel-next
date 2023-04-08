<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InventoryItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'inventory_id',
        'name',
        'description',
        'estimated_weight',
    ];

    public function inventory()
    {
        return $this->belongsTo(Inventory::class);
    }

}
